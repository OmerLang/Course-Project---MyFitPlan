import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import  bcrypt from "bcrypt";
import { createUser,findUserById, findUserByEmail, updateDetails, changePassword } from "./Server/dbQueries.js";
import session from "express-session";
import { generatePlan } from "./Server/planGenerator.js";
import { findUserInPlans, insertPlan, matchPhoneToId, getHashedPassword } from "./Server/dbQueries.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static("public"));
app.use(
  session({
    secret: "dev-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/api/me", async (req, res) => {
  const logged = req.session.userId;
  if (!logged) {
    return res.status(200).json({ loggedIn: false, hasPlan: false });
  } try {
    const plan = await findUserInPlans(req.session.userId);
    const hasPlan = !!plan;
    if (!hasPlan){
      return res.status(200).json({ loggedIn: true, hasPlan });
    }
    const userRow = await findUserById(req.session.userId);
    return res.status(200).json({ loggedIn: true, hasPlan, plan: plan.plan_json, name: userRow.name });
  } catch (err) {
    return res.status(500).json({ message: "Server error, Please try again" });
  }
});

app.get("/workout-plan",requireLogin ,async (req, res) => {
  res.sendFile(
    path.join(__dirname, "/public/pages/workout_plan.html")
  );
});

app.patch("/api/reset-password", async (req, res) => {
  try{
    const { email, phone, newpassword } = req.body;
    if (!email || !phone || !newpassword){
      return res.status(400).json({ message: "Missing fields"});
    }
    const user = await findUserByEmail(email);
    if (!user){
      return res.status(401).json({ message: "Email doesn't exist" })
    }
    const match = await matchPhoneToId(user.id, phone);
    if (!match){
      return res.status(401).json({ message: "Phone Number doesn't match"})
    }
    const oldPasswordHash = await getHashedPassword(user.id);
    const samePassword = await bcrypt.compare(newpassword, oldPasswordHash);
    if (samePassword) {
      return res.status(400).json({ message:"Password already in use" });
    }
    const saltRounds = 10;
    const newPasswordHash = await bcrypt.hash(newpassword, saltRounds);
    const changed = await changePassword(user.id, newPasswordHash);
    if (changed.affectedRows === 0){
      return res.status(500).json({ message: "User not Found" });
    }
    return res.status(200).json({ message: "Password changed successfuly" });
  } catch (err) {
    res.status(500).json({ message: "Server error, Please try again" });
  }
});

app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, phone, age, gender, country, password } = req.body;
    if (!name || !email || !phone || age == null || !gender || !country || !password){
      return res.status(400).json({ok: false, message: "Missing Fields"})
    }
    const userFound = await findUserByEmail(email);
    if (userFound) {
      return res.status(409).json({ ok: false, message: "Email already exists" });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await createUser(name, email, phone, age, gender, country, hashedPassword);
    return res.status(200).json({ message: "User Created" });
  } catch (err) {
    return res.status(500).json({ message: "Error - Server Error" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Error - Incorrect Email or Password" });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Error - Incorrect Email or Password" });
    }
    req.session.userId = user.id;
    const planExist = await findUserInPlans(user.id);
    if (!planExist) {
      return res.status(200).json({ next: "/pages/details.html"});
    }
    return res.status(200).json({ next: "/"})
  } catch (err) {
    return res.status(500).json({ message: "Error - Server Error" });
  }
});


app.post("/api/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.status(200).json({ ok: true });
  });
});

app.post("/api/submitDetails", requireLogin, async (req, res) => {
  try{
    const { height, weight, goal, experience } = req.body;
    const userId = req.session.userId;
    const rowsUpdated = await updateDetails (userId, height, weight, goal, experience);
    if (rowsUpdated !== 1){
      return res.status(400).json({ message: "Failed to update user details"});
    }
    const userRow = await findUserById (userId); 
    if (!userRow) {
      return res.status(500).json({ message: "User could not be found"});
    }
    const plan = generatePlan(userRow);
    if (!plan){
      return res.status(500).json({ message: "Failed creating a plan"});
    }
    const result = await insertPlan(plan, userRow);
    console.log(`plan created: ${result.planCreated}`, `plan updated: ${result.planUpdated}`);
    return res.status(200).json({ redirectTo: "/workout-plan" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

function requireLogin(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Not logged in" });
  }
  next();
}

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
