import { db } from "./db.js";

export async function createUser(name, email, phone, age, gender, country, passwordHash) {
  const [result] = await db.query(
    "INSERT INTO users (name, email, phone, age, gender, country, password_hash) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [name, email, phone, age, gender, country, passwordHash,]
  );
  return result.insertId;
}

export async function updateDetails(userId, height, weight, goal, experience) {
  const [result] = await db.query(
    "UPDATE users SET height = ?, weight = ?, goal = ?, experience = ? WHERE id = ?",
    [height, weight, goal, experience, userId]
  );
  return result.affectedRows;
}

export async function findUserByEmail(email) {
  const [rows] = await db.query(
    "SELECT * FROM users where email = ? LIMIT 1",
    [email]
  );
  return rows[0];
}

export async function findUserById (userId) {
  const [rows] = await db.query(
    "SELECT * FROM users where id = ? LIMIT 1",
  [userId]);
  return rows[0];
}

export async function matchPhoneToId (userId, phone) {
  const [match] = await db.query(
    "SELECT id FROM users WHERE id = ? AND phone = ? LIMIT 1",
    [userId, phone]
  )
  return match[0];
}

export async function getHashedPassword (userId){
  const [rows] = await db.query(
    "SELECT password_hash FROM users WHERE id = ? LIMIT 1",
    [userId]
  )
  return rows[0]?.password_hash || null;
}

export async function changePassword (userId, newPasswordHash) {
  const [changed] = await db.query(
    "UPDATE users SET password_hash = ? WHERE id = ?",
    [newPasswordHash, userId]
  )
  return changed;
}

export async function findUserInPlans (userId) {
  const [rows] = await db.query(
  "SELECT * FROM plans where user_id = ? LIMIT 1",
  [userId]);
  return rows[0];
}

export async function insertPlan (plan, user){
  const planExist = await findUserInPlans(user.id);
  const planJson = JSON.stringify(plan);
  if (!planExist) {
    await db.query (
      "INSERT INTO plans (user_id, title, plan_json) VALUES (?, ?, ?)",
      [user.id, plan.title, planJson]
    )
    return { planCreated: true, planUpdated: false };
  }
  await db.query(
    "UPDATE plans SET title = ?, plan_json = ? WHERE user_id = ?",
    [plan.title, planJson, user.id]
  )
  return { planCreated: false, planUpdated: true };
}
