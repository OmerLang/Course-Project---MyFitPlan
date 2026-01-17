export const workoutPlans = [
  // =========================
  //FAT LOSS (weight_loss)
  // =========================
  {
    id: "WL-01",
    goal: "weight_loss",
    title: "Fat Loss Beginner (3 Days)",
    level: "beginner",
    daysPerWeek: 3,
    durationWeeks: 6,
    summary:
      "Full-body strength + low-impact cardio to burn calories and build consistency.",
    schedule: [
      {
        day: "Day 1",
        focus: "Full Body + Walk",
        warmup: [
          "5-8 min brisk walk or bike",
          "Dynamic stretches (hips, shoulders)",
        ],
        workout: [
          {
            exercise: "Goblet Squat",
            sets: 3,
            reps: "10-12",
            restSec: 75,
            gif: "/assets/gifs/goblet_squat.gif",
          },
          {
            exercise: "Push-ups (knees if needed)",
            sets: 3,
            reps: "8-12",
            restSec: 75,
            gif: "/assets/gifs/pushup.gif",
          },
          {
            exercise: "Dumbbell Row",
            sets: 3,
            reps: "10-12 each side",
            restSec: 75,
            gif: "/assets/gifs/dumbbell_row.gif",
          },
          {
            exercise: "Romanian Deadlift (DB)",
            sets: 3,
            reps: "10-12",
            restSec: 90,
            gif: "/assets/gifs/romanian_deadlift.gif",
          },
          {
            exercise: "Plank",
            sets: 3,
            reps: "30-45 sec",
            restSec: 60,
            gif: "/assets/gifs/plank.gif",
          },
        ],
        finisher: ["20-30 min steady walk (easy pace)"],
        notes: ["Keep effort around 7/10, stop 1-2 reps before failure."],
      },
      {
        day: "Day 2",
        focus: "Intervals + Core",
        warmup: ["5 min easy cardio", "Leg swings, arm circles"],
        workout: [
          {
            exercise: "Bike/Row/Treadmill Intervals",
            sets: 8,
            reps: "30 sec hard / 60 sec easy",
            restSec: 0,
          },
          {
            exercise: "Dead Bug",
            sets: 3,
            reps: "10 each side",
            restSec: 45,
            gif: "/assets/gifs/dead_bug.gif",
          },
          {
            exercise: "Side Plank",
            sets: 3,
            reps: "20-30 sec each side",
            restSec: 45,
            gif: "/assets/gifs/side_plank.gif",
          },
        ],
        finisher: ["Optional: 10 min easy walk cooldown"],
        notes: ["Hard = breathing heavy but controlled. Easy = recover."],
      },
      {
        day: "Day 3",
        focus: "Full Body + Steps",
        warmup: ["5-8 min easy cardio", "Dynamic stretches"],
        workout: [
          {
            exercise: "Leg Press or Bodyweight Squat",
            sets: 3,
            reps: "12-15",
            restSec: 75,
            gif: "/assets/gifs/leg_press.gif",
          },
          {
            exercise: "Dumbbell Bench Press",
            sets: 3,
            reps: "10-12",
            restSec: 75,
            gif: "/assets/gifs/dumbbell_bench_press.gif",
          },
          {
            exercise: "Lat Pulldown / Assisted Pull-up",
            sets: 3,
            reps: "10-12",
            restSec: 75,
            gif: "/assets/gifs/lat_pulldown.gif",
          },
          {
            exercise: "Walking Lunges",
            sets: 2,
            reps: "10 each leg",
            restSec: 75,
            gif: "/assets/gifs/walking_lunges.gif",
          },
          {
            exercise: "Hollow Hold (or Crunches)",
            sets: 3,
            reps: "20-30 sec",
            restSec: 60,
            gif: "/assets/gifs/hollow_hold.gif",
          },
        ],
        finisher: ["Aim for 7,000-10,000 steps total that day"],
        notes: ["If very sore, reduce sets by 1."],
      },
    ],
  },

  {
    id: "WL-02",
    goal: "weight_loss",
    title: "Fat Loss Intermediate (4 Days)",
    level: "intermediate",
    daysPerWeek: 4,
    durationWeeks: 8,
    summary:
      "Upper/lower strength split + 2 cardio days for higher weekly burn.",
    schedule: [
      {
        day: "Day 1",
        focus: "Upper Body Strength",
        warmup: ["5 min easy cardio", "Band pull-aparts 2x15"],
        workout: [
          {
            exercise: "Incline DB Press",
            sets: 4,
            reps: "8-10",
            restSec: 90,
            gif: "/assets/gifs/incline_dumbbell_press.gif",
          },
          {
            exercise: "One-arm DB Row",
            sets: 4,
            reps: "10 each side",
            restSec: 90,
            gif: "/assets/gifs/one_arm_dumbbell_row.gif",
          },
          {
            exercise: "Shoulder Press",
            sets: 3,
            reps: "10-12",
            restSec: 75,
            gif: "/assets/gifs/shoulder_press.gif",
          },
          {
            exercise: "Lat Pulldown",
            sets: 3,
            reps: "10-12",
            restSec: 75,
            gif: "/assets/gifs/lat_pulldown.gif",
          },
          {
            exercise: "Triceps Rope Pushdown",
            sets: 3,
            reps: "12-15",
            restSec: 60,
            gif: "/assets/gifs/triceps_rope_pushdown.gif",
          },
          {
            exercise: "DB Biceps Curl",
            sets: 3,
            reps: "12-15",
            restSec: 60,
            gif: "/assets/gifs/bicep_curls.gif",
          },
        ],
        finisher: ["10-15 min incline walk"],
        notes: ["Keep form clean. Add weight only when reps are easy."],
      },
      {
        day: "Day 2",
        focus: "Lower Body + Core",
        warmup: ["5-8 min cardio", "Glute bridges 2x12"],
        workout: [
          {
            exercise: "Squat (machine or bar)",
            sets: 4,
            reps: "8-10",
            restSec: 120,
            gif: "/assets/gifs/squat.gif",
          },
          {
            exercise: "Romanian Deadlift",
            sets: 4,
            reps: "8-10",
            restSec: 120,
            gif: "/assets/gifs/romanian_deadlift.gif",
          },
          {
            exercise: "Leg Curl",
            sets: 3,
            reps: "12",
            restSec: 75,
            gif: "/assets/gifs/leg_curl.gif",
          },
          {
            exercise: "Calf Raises",
            sets: 3,
            reps: "12-15",
            restSec: 60,
            gif: "/assets/gifs/calf_raises.gif",
          },
          {
            exercise: "Plank",
            sets: 3,
            reps: "45 sec",
            restSec: 60,
            gif: "/assets/gifs/plank.gif",
          },
        ],
        finisher: ["5-10 min easy cooldown"],
        notes: ["If knees bother you, reduce squat depth and slow tempo."],
      },
      {
        day: "Day 3",
        focus: "Cardio Intervals",
        warmup: ["5 min easy cardio"],
        workout: [
          {
            exercise: "Intervals",
            sets: 10,
            reps: "40 sec hard / 80 sec easy",
            restSec: 0,
          },
        ],
        finisher: ["10 min walk + stretching"],
        notes: ["Choose bike/rower if impact hurts."],
      },
      {
        day: "Day 4",
        focus: "Zone 2 Cardio + Mobility",
        warmup: ["5 min easy cardio"],
        workout: [
          {
            exercise: "Zone 2 Cardio",
            sets: 1,
            reps: "35-50 min steady",
            restSec: 0,
          },
          {
            exercise: "Mobility",
            sets: 1,
            reps: "10-15 min hips/ankles/shoulders",
            restSec: 0,
          },
        ],
        finisher: [],
        notes: ["Zone 2 = you can speak short sentences."],
      },
    ],
  },

  {
    id: "WL-03",
    goal: "weight_loss",
    title: "Fat Loss Advanced (5 Days)",
    level: "advanced",
    daysPerWeek: 5,
    durationWeeks: 8,
    summary:
      "Higher frequency: strength circuits + 2 cardio days for aggressive fat loss.",
    schedule: [
      {
        day: "Day 1",
        focus: "Strength Circuit A",
        warmup: ["5-8 min cardio", "Dynamic stretches"],
        workout: [
          {
            exercise: "Goblet Squat",
            sets: 3,
            reps: "12",
            restSec: 0,
            gif: "/assets/gifs/goblet_squat.gif",
          },
          {
            exercise: "Push-ups",
            sets: 3,
            reps: "10",
            restSec: 0,
            gif: "/assets/gifs/pushup.gif",
          },
          {
            exercise: "Dumbbell Row",
            sets: 3,
            reps: "12 each side",
            restSec: 0,
            gif: "/assets/gifs/dumbbell_row.gif",
          },
          {
            exercise: "Romanian Deadlift (DB)",
            sets: 3,
            reps: "12",
            restSec: 0,
            gif: "/assets/gifs/romanian_deadlift.gif",
          },
          {
            exercise: "Plank",
            sets: 3,
            reps: "30 sec",
            restSec: 90,
            gif: "/assets/gifs/plank.gif",
          },
        ],
        finisher: ["10 min easy walk"],
        notes: [
          "Do the 5 exercises in a row with no rest between them.",
          "After plank, rest 90 seconds. That is 1 round.",
          "Complete 3 rounds total.",
        ],
      },

      {
        day: "Day 2",
        focus: "Intervals",
        warmup: ["5 min easy cardio"],
        workout: [
          {
            exercise: "Treadmill Sprint Intervals",
            sets: 12,
            reps: "20 sec sprint / 70 sec easy",
            restSec: 0,
            gif: "/assets/gifs/treadmill-sprint.gif",
          },
        ],
        finisher: ["Stretch calves/hips 8 min"],
        notes: ["If too hard, do 8 rounds instead of 12."],
      },

      {
        day: "Day 3",
        focus: "Strength Circuit B",
        warmup: ["5-8 min cardio", "Dynamic stretches"],
        workout: [
          {
            exercise: "Walking Lunges",
            sets: 3,
            reps: "10 each leg",
            restSec: 0,
            gif: "/assets/gifs/walking_lunges.gif",
          },
          {
            exercise: "Dumbbell Bench Press",
            sets: 3,
            reps: "10",
            restSec: 0,
            gif: "/assets/gifs/dumbbell_bench_press.gif",
          },
          {
            exercise: "Lat Pulldown",
            sets: 3,
            reps: "10",
            restSec: 0,
            gif: "/assets/gifs/lat_pulldown.gif",
          },
          {
            exercise: "Leg Curl",
            sets: 3,
            reps: "12",
            restSec: 0,
            gif: "/assets/gifs/leg_curl.gif",
          },
          {
            exercise: "Side Plank",
            sets: 3,
            reps: "30 sec each side",
            restSec: 90,
            gif: "/assets/gifs/side_plank.gif",
          },
        ],
        finisher: ["Optional: 10-15 min incline walk"],
        notes: [
          "Do the 5 exercises in a row with no rest between them.",
          "After side plank, rest 90 seconds. That is 1 round.",
          "Complete 3 rounds total.",
        ],
      },

      {
        day: "Day 4",
        focus: "Zone 2 Cardio",
        warmup: ["5 min easy cardio"],
        workout: [
          {
            exercise: "Zone 2 Cardio (Bike/Elliptical)",
            sets: 1,
            reps: "40-60 min steady",
            restSec: 0,
            gif: "/assets/gifs/bike-cardio.gif",
          },
        ],
        finisher: [],
        notes: ["Keep heart rate moderate; steady pace."],
      },

      {
        day: "Day 5",
        focus: "Upper + Core",
        warmup: ["Band work 5 min"],
        workout: [
          {
            exercise: "Overhead Press",
            sets: 4,
            reps: "6-8",
            restSec: 120,
            gif: "/assets/gifs/shoulder_press.gif",
          },
          {
            exercise: "Lat Pulldown",
            sets: 4,
            reps: "6-10",
            restSec: 120,
            gif: "/assets/gifs/lat_pulldown.gif",
          },
          {
            exercise: "Incline DB Press",
            sets: 3,
            reps: "8-10",
            restSec: 90,
            gif: "/assets/gifs/incline_dumbbell_press.gif",
          },
          {
            exercise: "Cable Row",
            sets: 3,
            reps: "10-12",
            restSec: 90,
            gif: "/assets/gifs/cable_row.gif",
          },
          {
            exercise: "Hanging Knee Raise",
            sets: 3,
            reps: "10-12",
            restSec: 60,
            gif: "/assets/gifs/hanging_knee_raises.gif",
          },
        ],
        finisher: ["10 min walk"],
        notes: ["This day is heavier; keep cardio easy after."],
      },
    ],
  },
  // =========================
  // BUILD MUSCLE (muscle_gain)
  // =========================

  {
    id: "MG-01",
    goal: "muscle_gain",
    title: "Muscle Gain Beginner (3 Days Full Body)",
    level: "beginner",
    daysPerWeek: 3,
    durationWeeks: 8,
    summary: "Full-body 3x/week focusing on big lifts and steady progression.",
    schedule: [
      {
        day: "Day 1",
        focus: "Full Body A",
        warmup: ["5 min cardio", "Warm-up sets for first lift"],
        workout: [
          {
            exercise: "Squat (or Leg Press)",
            sets: 4,
            reps: "6-10",
            restSec: 120,
            gif: "/assets/gifs/squat.gif",
          },
          {
            exercise: "Bench Press (DB or Bar)",
            sets: 4,
            reps: "6-10",
            restSec: 120,
            gif: "/assets/gifs/bench_press.gif",
          },
          {
            exercise: "Lat Pulldown",
            sets: 4,
            reps: "8-12",
            restSec: 90,
            gif: "/assets/gifs/lat_pulldown.gif",
          },
          {
            exercise: "DB Shoulder Press",
            sets: 3,
            reps: "8-12",
            restSec: 90,
            gif: "/assets/gifs/shoulder_press.gif",
          },
          {
            exercise: "Plank",
            sets: 3,
            reps: "30-60 sec",
            restSec: 60,
            gif: "/assets/gifs/plank.gif",
          },
        ],
        finisher: [],
        notes: ["Progression: add 1 rep each week, then add weight."],
      },
      {
        day: "Day 2",
        focus: "Full Body B",
        warmup: ["5 min cardio", "Mobility"],
        workout: [
          {
            exercise: "Romanian Deadlift",
            sets: 4,
            reps: "6-10",
            restSec: 120,
            gif: "/assets/gifs/romanian_deadlift.gif",
          },
          {
            exercise: "Incline DB Press",
            sets: 4,
            reps: "8-12",
            restSec: 90,
            gif: "/assets/gifs/incline_dumbbell_press.gif",
          },
          {
            exercise: "Seated Cable Row",
            sets: 4,
            reps: "8-12",
            restSec: 90,
            gif: "/assets/gifs/cable_row.gif",
          },
          {
            exercise: "Leg Curl",
            sets: 3,
            reps: "10-15",
            restSec: 75,
            gif: "/assets/gifs/leg_curl.gif",
          },
          {
            exercise: "DB Curl",
            sets: 3,
            reps: "10-15",
            restSec: 60,
            gif: "/assets/gifs/bicep_curls.gif",
          },
        ],
        finisher: [],
        notes: ["Stop 1-2 reps before failure on most sets."],
      },
      {
        day: "Day 3",
        focus: "Full Body C",
        warmup: ["5 min cardio"],
        workout: [
          {
            exercise: "Split Squat",
            sets: 3,
            reps: "8-12 each leg",
            restSec: 90,
            gif: "/assets/gifs/split_squat.gif",
          },
          {
            exercise: "Chest Press Machine",
            sets: 4,
            reps: "8-12",
            restSec: 90,
            gif: "/assets/gifs/chest_press_machine.gif",
          },
          {
            exercise: "Assisted Pull-up / Pulldown",
            sets: 4,
            reps: "8-12",
            restSec: 90,
            gif: "/assets/gifs/pullups.gif",
          },
          {
            exercise: "Lateral Raise",
            sets: 3,
            reps: "12-15",
            restSec: 60,
            gif: "/assets/gifs/lateral_raises.gif",
          },
          {
            exercise: "Triceps Pushdown",
            sets: 3,
            reps: "12-15",
            restSec: 60,
            gif: "/assets/gifs/triceps_rope_pushdown.gif",
          },
        ],
        finisher: [],
        notes: ["Keep weekly consistency. Sleep and food matter most."],
      },
    ],
  },

  {
    id: "MG-02",
    goal: "muscle_gain",
    title: "Muscle Gain Intermediate (4 Days Upper/Lower)",
    level: "intermediate",
    daysPerWeek: 4,
    durationWeeks: 10,
    summary: "Upper/lower split with more volume for hypertrophy.",
    schedule: [
      {
        day: "Day 1",
        focus: "Upper (Push + Pull)",
        warmup: ["Band pull-aparts 2x15", "Warm-up sets"],
        workout: [
          {
            exercise: "Bench Press",
            sets: 4,
            reps: "6-8",
            restSec: 150,
            gif: "/assets/gifs/bench_press.gif",
          },
          {
            exercise: "Barbell Row / Cable Row",
            sets: 4,
            reps: "6-10",
            restSec: 120,
            gif: "/assets/gifs/barbell_rows.gif",
          },
          {
            exercise: "Incline DB Press",
            sets: 3,
            reps: "8-12",
            restSec: 90,
            gif: "/assets/gifs/incline_dumbbell_press.gif",
          },
          {
            exercise: "Lat Pulldown",
            sets: 3,
            reps: "8-12",
            restSec: 90,
            gif: "/assets/gifs/lat_pulldown.gif",
          },
          {
            exercise: "Lateral Raise",
            sets: 4,
            reps: "12-15",
            restSec: 60,
            gif: "/assets/gifs/lateral_raises.gif",
          },
        ],
        finisher: [],
        notes: ["Aim 10-16 hard sets per muscle weekly."],
      },
      {
        day: "Day 2",
        focus: "Lower (Quads + Calves)",
        warmup: ["Glute bridges 2x12", "Warm-up sets"],
        workout: [
          {
            exercise: "Squat",
            sets: 4,
            reps: "6-8",
            restSec: 180,
            gif: "/assets/gifs/squat.gif",
          },
          {
            exercise: "Leg Press",
            sets: 3,
            reps: "10-12",
            restSec: 120,
            gif: "/assets/gifs/leg_press.gif",
          },
          {
            exercise: "Leg Extension",
            sets: 3,
            reps: "12-15",
            restSec: 75,
            gif: "/assets/gifs/leg_curl.gif",
          },
          {
            exercise: "Calf Raise",
            sets: 4,
            reps: "10-15",
            restSec: 60,
            gif: "/assets/gifs/calf_raises.gif",
          },
        ],
        finisher: [],
        notes: ["Control the lowering phase (2-3 seconds)."],
      },
      {
        day: "Day 3",
        focus: "Upper (Arms + Shoulders)",
        warmup: ["5 min easy cardio"],
        workout: [
          {
            exercise: "Overhead Press",
            sets: 4,
            reps: "6-10",
            restSec: 120,
            gif: "/assets/gifs/shoulder_press.gif",
          },
          {
            exercise: "Pull-ups / Pulldown",
            sets: 4,
            reps: "8-12",
            restSec: 90,
            gif: "/assets/gifs/pullups.gif",
          },
          {
            exercise: "Cable Fly",
            sets: 3,
            reps: "12-15",
            restSec: 60,
            gif: "/assets/gifs/cable_fly.gif",
          },
          {
            exercise: "DB Curl",
            sets: 4,
            reps: "10-15",
            restSec: 60,
            gif: "/assets/gifs/bicep_curls.gif",
          },
          {
            exercise: "Triceps Extension",
            sets: 4,
            reps: "10-15",
            restSec: 60,
            gif: "/assets/gifs/triceps_rope_pushdown.gif",
          },
        ],
        finisher: [],
        notes: ["Don’t chase max weight; chase good reps."],
      },
      {
        day: "Day 4",
        focus: "Lower (Posterior Chain)",
        warmup: ["5 min cardio", "Hamstring warm-up"],
        workout: [
          {
            exercise: "Romanian Deadlift",
            sets: 4,
            reps: "6-10",
            restSec: 150,
            gif: "/assets/gifs/romanian_deadlift.gif",
          },
          {
            exercise: "Hip Thrust",
            sets: 4,
            reps: "8-12",
            restSec: 120,
            gif: "/assets/gifs/hip_thrust.gif",
          },
          {
            exercise: "Leg Curl",
            sets: 3,
            reps: "10-15",
            restSec: 75,
            gif: "/assets/gifs/leg_curl.gif",
          },
          {
            exercise: "Walking Lunges",
            sets: 2,
            reps: "12 each leg",
            restSec: 90,
            gif: "/assets/gifs/walking_lunges.gif",
          },
        ],
        finisher: [],
        notes: ["Keep back neutral, hinge from hips."],
      },
    ],
  },

  {
    id: "MG-03",
    goal: "muscle_gain",
    title: "Muscle Gain Advanced (5 Days)",
    level: "advanced",
    daysPerWeek: 5,
    durationWeeks: 10,
    summary:
      "2 heavy strength days + 3 hypertrophy days for size and strength.",
    schedule: [
      {
        day: "Day 1",
        focus: "Heavy Lower",
        warmup: ["Warm-up sets"],
        workout: [
          {
            exercise: "Back Squat",
            sets: 5,
            reps: "3-5",
            restSec: 180,
            gif: "/assets/gifs/squat.gif",
          },
          {
            exercise: "Romanian Deadlift",
            sets: 4,
            reps: "5-8",
            restSec: 150,
            gif: "/assets/gifs/romanian_deadlift.gif",
          },
          {
            exercise: "Leg Press",
            sets: 3,
            reps: "8-12",
            restSec: 120,
            gif: "/assets/gifs/leg_press.gif",
          },
        ],
        finisher: [],
        notes: ["Heavy sets: stop with 1 rep in reserve."],
      },
      {
        day: "Day 2",
        focus: "Heavy Upper",
        warmup: ["Warm-up sets"],
        workout: [
          {
            exercise: "Bench Press",
            sets: 5,
            reps: "3-5",
            restSec: 180,
            gif: "/assets/gifs/bench_press.gif",
          },
          {
            exercise: "Weighted Row",
            sets: 4,
            reps: "5-8",
            restSec: 150,
            gif: "/assets/gifs/dumbbell_row.gif",
          },
          {
            exercise: "Overhead Press",
            sets: 3,
            reps: "6-8",
            restSec: 120,
            gif: "/assets/gifs/shoulder_press.gif",
          },
        ],
        finisher: [],
        notes: ["Keep technique strict."],
      },
      {
        day: "Day 3",
        focus: "Hypertrophy Legs",
        warmup: ["5 min cardio"],
        workout: [
          {
            exercise: "Front Squat / Hack Squat",
            sets: 4,
            reps: "8-12",
            restSec: 120,
            gif: "/assets/gifs/front_squat.gif",
          },
          {
            exercise: "Leg Extension",
            sets: 3,
            reps: "12-15",
            restSec: 75,
            gif: "/assets/gifs/leg_press.gif",
          },
          {
            exercise: "Leg Curl",
            sets: 3,
            reps: "12-15",
            restSec: 75,
            gif: "/assets/gifs/leg_curl.gif",
          },
          {
            exercise: "Calf Raise",
            sets: 4,
            reps: "12-20",
            restSec: 60,
            gif: "/assets/gifs/calf_raises.gif",
          },
        ],
        finisher: [],
        notes: ["Higher reps = controlled tempo."],
      },
      {
        day: "Day 4",
        focus: "Hypertrophy Push",
        warmup: ["Band + warm-up sets"],
        workout: [
          {
            exercise: "Incline DB Press",
            sets: 4,
            reps: "8-12",
            restSec: 90,
            gif: "/assets/gifs/incline_dumbbell_press.gif",
          },
          {
            exercise: "Dips (assisted if needed)",
            sets: 3,
            reps: "8-12",
            restSec: 90,
            gif: "/assets/gifs/tricep_dips.gif",
          },
          {
            exercise: "Lateral Raise",
            sets: 4,
            reps: "12-20",
            restSec: 60,
            gif: "/assets/gifs/lateral_raises.gif",
          },
          {
            exercise: "Triceps Pushdown",
            sets: 4,
            reps: "10-15",
            restSec: 60,
            gif: "/assets/gifs/triceps_rope_pushdown.gif",
          },
        ],
        finisher: [],
        notes: ["Pump work: short rests, full range."],
      },
      {
        day: "Day 5",
        focus: "Hypertrophy Pull",
        warmup: ["5 min easy cardio"],
        workout: [
          {
            exercise: "Lat Pulldown",
            sets: 4,
            reps: "8-12",
            restSec: 90,
            gif: "/assets/gifs/lat_pulldown.gif",
          },
          {
            exercise: "Seated Row",
            sets: 4,
            reps: "8-12",
            restSec: 90,
            gif: "/assets/gifs/cable_row.gif",
          },
          {
            exercise: "Face Pull",
            sets: 3,
            reps: "12-15",
            restSec: 60,
            gif: "/assets/gifs/face_pull.gif",
          },
          {
            exercise: "DB Curl",
            sets: 4,
            reps: "10-15",
            restSec: 60,
            gif: "/assets/gifs/bicep_curls.gif",
          },
        ],
        finisher: [],
        notes: ["Add reps first, then weight."],
      },
    ],
  },

  // =========================
  // ENDURANCE (endurance)
  // =========================
  {
    id: "EN-01",
    goal: "endurance",
    title: "Endurance Beginner (3 Days)",
    level: "beginner",
    daysPerWeek: 3,
    durationWeeks: 6,
    summary: "Build aerobic base + basic strength to support longer sessions.",
    schedule: [
      {
        day: "Day 1",
        focus: "Easy Run/Walk + Core",
        warmup: ["5 min walk", "Mobility"],
        workout: [
          { exercise: "Run/Walk", sets: 1, reps: "25-35 min easy", restSec: 0 },
          {
            exercise: "Plank",
            sets: 3,
            reps: "30-45 sec",
            restSec: 60,
            gif: "/assets/gifs/plank.gif",
          },
          {
            exercise: "Glute Bridge",
            sets: 3,
            reps: "12-15",
            restSec: 60,
            gif: "/assets/gifs/glute_bridge.gif",
          },
        ],
        finisher: ["Stretch calves/hips 8 min"],
        notes: ["Easy = you can talk comfortably."],
      },
      {
        day: "Day 2",
        focus: "Tempo Intervals",
        warmup: ["10 min easy"],
        workout: [
          {
            exercise: "Tempo Blocks",
            sets: 3,
            reps: "5 min moderate / 3 min easy",
            restSec: 0,
          },
          {
          exercise: "Single-Leg Calf Raises",
          sets: 3,
          reps: "15-20 per side",
          restSec: 45,
          gif: "/assets/gifs/calf_raises.gif",
          },
          {
          exercise: "Side Plank",
          sets: 3,
          reps: "30-45 sec per side",
          restSec: 60,
          gif: "/assets/gifs/side_plank.gif",
          }
        ],
        finisher: ["Cool down 5-10 min"],
        notes: ["Moderate = challenging but sustainable."],
      },
      {
        day: "Day 3",
        focus: "Long Easy Session",
        warmup: ["5-10 min easy"],
        workout: [
          {
            exercise: "Long steady cardio",
            sets: 1,
            reps: "40-60 min easy",
            restSec: 0,
          },
        ],
        finisher: [],
        notes: ["Choose bike/elliptical if joints hurt."],
      },
    ],
  },

  {
    id: "EN-02",
    goal: "endurance",
    title: "Endurance Intermediate (4 Days)",
    level: "intermediate",
    daysPerWeek: 4,
    durationWeeks: 8,
    summary:
      "2 easy sessions + 1 intervals day + 1 long day, plus mobility/strength.",
    schedule: [
      {
        day: "Day 1",
        focus: "Easy Base",
        warmup: ["5-10 min easy"],
        workout: [
          { exercise: "Zone 2 Cardio", sets: 1, reps: "35-50 min", restSec: 0 },
        ],
        finisher: ["Mobility 10 min"],
        notes: ["Stay consistent more than intense."],
      },
      {
        day: "Day 2",
        focus: "Intervals",
        warmup: ["10 min easy"],
        workout: [
          {
            exercise: "Intervals",
            sets: 6,
            reps: "2 min hard / 2 min easy",
            restSec: 0,
          },
          {
            exercise: "Plank (Knee tuck)",
            sets: 3,
            reps: "30 sec per side",
            restSec: 60,
            gif: "/assets/gifs/plank.gif",
          },
          {
            exercise: "Bulgarian Split Squat",
            sets: 3,
            reps: "8-10 per leg",
            restSec: 60,
            gif: "/assets/gifs/split_squat.gif",
          }
        ],
        finisher: ["Cool down 10 min"],
        notes: ["Hard = breathing heavy; keep pace repeatable."],
      },
      {
        day: "Day 3",
        focus: "Strength Support",
        warmup: ["5 min cardio"],
        workout: [
          {
            exercise: "Goblet Squat",
            sets: 3,
            reps: "10-12",
            restSec: 75,
            gif: "/assets/gifs/goblet_squat.gif",
          },
          {
            exercise: "Romanian Deadlift (DB)",
            sets: 3,
            reps: "10-12",
            restSec: 90,
            gif: "/assets/gifs/romanian_deadlift.gif",
          },
          {
            exercise: "Row",
            sets: 3,
            reps: "10-12",
            restSec: 75,
            gif: "/assets/gifs/cable_row.gif",
          },
          {
            exercise: "Push-ups",
            sets: 3,
            reps: "8-12",
            restSec: 75,
            gif: "/assets/gifs/pushup.gif",
          },
        ],
        finisher: ["Easy 10 min walk"],
        notes: ["Strength keeps you durable."],
      },
      {
        day: "Day 4",
        focus: "Long Session",
        warmup: ["5-10 min easy"],
        workout: [
          {
            exercise: "Long steady cardio",
            sets: 1,
            reps: "60-90 min easy",
            restSec: 0,
          },
        ],
        finisher: [],
        notes: ["Fuel/hydrate if above 60 minutes."],
      },
    ],
  },

  {
    id: "EN-03",
    goal: "endurance",
    title: "Endurance Advanced (5 Days)",
    level: "advanced",
    daysPerWeek: 5,
    durationWeeks: 10,
    summary:
      "Higher weekly volume: base + intervals + tempo + long day + strength maintenance.",
    schedule: [
      {
        day: "Day 1",
        focus: "Base",
        warmup: ["10 min easy"],
        workout: [
          {
            exercise: "Zone 2 w/ Aerobic Surges",
            sets: 1,
            reps: "60-75 min total",
            restSec: 0,
                
          },
        ],
        finisher: [],
        notes: 
          ["Every 8 mins, perform a 30-sec surge at 10k pace, Focus on high cadence (170+ bpm). Stay strictly in Zone 2 for the recovery periods."],
      },
      {
        day: "Day 2",
        focus: "Intervals",
        warmup: ["10-15 min easy"],
        workout: [
          {
            exercise: "Intervals",
            sets: 8,
            reps: "90 sec hard / 90 sec easy",
            restSec: 0,
          },
        ],
        finisher: ["Cool down 10 min"],
        notes: ["Repeatable pace."],
      },
      {
        day: "Day 3",
        focus: "Tempo",
        warmup: ["10 min easy"],
        workout: [
          {
            exercise: "Tempo",
            sets: 3,
            reps: "8 min moderate-hard / 4 min easy",
            restSec: 0,
          },
        ],
        finisher: ["Cool down 10 min"],
        notes: ["Don’t sprint; hold pace."],
      },
      {
        day: "Day 4",
        focus: "Strength Maintenance",
        warmup: ["5 min cardio"],
        workout: [
          {
            exercise: "Squat or Leg Press",
            sets: 3,
            reps: "6-10",
            restSec: 120,
            gif: "/assets/gifs/squat.gif",
          },
          {
            exercise: "Bench Press",
            sets: 3,
            reps: "6-10",
            restSec: 120,
            gif: "/assets/gifs/bench_press.gif",
          },
          {
            exercise: "Row",
            sets: 3,
            reps: "8-12",
            restSec: 90,
            gif: "/assets/gifs/cable_row.gif",
          },
        ],
        finisher: [],
        notes: ["Low volume, keep fresh."],
      },
      {
        day: "Day 5",
        focus: "Long Session",
        warmup: ["10 min easy"],
        workout: [
          {
            exercise: "Long steady cardio",
            sets: 1,
            reps: "90-120 min easy",
            restSec: 0,
          },
        ],
        finisher: [],
        notes: ["Hydration + easy pacing."],
      },
    ],
  },

  // =========================
  // IMPROVE CARDIO (cardio)
  // =========================
  {
    id: "CA-01",
    goal: "cardio",
    title: "Cardio Beginner (3 Days)",
    level: "beginner",
    daysPerWeek: 3,
    durationWeeks: 6,
    summary:
      "Low impact cardio + short intervals to improve heart/lung fitness safely.",
    schedule: [
      {
        day: "Day 1",
        focus: "Steady Cardio",
        warmup: ["5 min easy"],
        workout: [
          {
            exercise: "Bike/Elliptical",
            sets: 1,
            reps: "25-35 min steady",
            restSec: 0,
          },
        ],
        finisher: ["Stretch 8 min"],
        notes: ["Steady pace, don’t gas out."],
      },
      {
        day: "Day 2",
        focus: "Short Intervals",
        warmup: ["5-8 min easy"],
        workout: [
          {
            exercise: "Intervals",
            sets: 10,
            reps: "20 sec hard / 70 sec easy",
            restSec: 0,
          },
        ],
        finisher: ["Cool down 10 min"],
        notes: ["Hard = quick breathing, still controlled."],
      },
      {
        day: "Day 3",
        focus: "Mixed Cardio",
        warmup: ["5 min easy"],
        workout: [
          {
            exercise: "Cardio Mix",
            sets: 1,
            reps: "15 min steady + 5x(30s hard/60s easy) + 10 min steady",
            restSec: 0,
          },
        ],
        finisher: [],
        notes: ["Choose any machine you enjoy."],
      },
    ],
  },

  {
    id: "CA-02",
    goal: "cardio",
    title: "Cardio Intermediate (4 Days)",
    level: "intermediate",
    daysPerWeek: 4,
    durationWeeks: 8,
    summary:
      "2 zone sessions + 1 intervals + 1 tempo session for big cardio improvements.",
    schedule: [
      {
        day: "Day 1",
        focus: "Zone 2",
        warmup: ["5-10 min easy"],
        workout: [
          { exercise: "Zone 2 Cardio", sets: 1, reps: "35-55 min", restSec: 0 },
        ],
        finisher: [],
        notes: ["Talk test = pass."],
      },
      {
        day: "Day 2",
        focus: "Intervals",
        warmup: ["10 min easy"],
        workout: [
          {
            exercise: "Intervals",
            sets: 8,
            reps: "45 sec hard / 75 sec easy",
            restSec: 0,
          },
        ],
        finisher: ["Cool down 10 min"],
        notes: ["Keep the hard parts consistent."],
      },
      {
        day: "Day 3",
        focus: "Tempo",
        warmup: ["10 min easy"],
        workout: [
          {
            exercise: "Tempo",
            sets: 2,
            reps: "12 min moderate-hard / 6 min easy",
            restSec: 0,
          },
        ],
        finisher: ["Cool down 10 min"],
        notes: ["Steady discomfort, not a sprint."],
      },
      {
        day: "Day 4",
        focus: "Zone 2 + Mobility",
        warmup: ["5 min easy"],
        workout: [
          { exercise: "Zone 2 Cardio", sets: 1, reps: "30-45 min", restSec: 0 },
          { exercise: "Mobility", sets: 1, reps: "10-15 min", restSec: 0 },
        ],
        finisher: [],
        notes: ["Recover well."],
      },
    ],
  },

  {
    id: "CA-03",
    goal: "cardio",
    title: "Cardio Advanced (5 Days)",
    level: "advanced",
    daysPerWeek: 5,
    durationWeeks: 10,
    summary:
      "High frequency cardio with varied intensities for maximum conditioning.",
    schedule: [
      {
        day: "Day 1",
        focus: "Zone 2",
        warmup: ["10 min easy"],
        workout: [
          { exercise: "Zone 2", sets: 1, reps: "50-70 min", restSec: 0 },
        ],
        finisher: [],
        notes: ["Foundation day."],
      },
      {
        day: "Day 2",
        focus: "VO2 Intervals",
        warmup: ["10-15 min easy"],
        workout: [
          {
            exercise: "VO2 Intervals",
            sets: 6,
            reps: "3 min hard / 3 min easy",
            restSec: 0,
          },
        ],
        finisher: ["Cool down 10 min"],
        notes: ["Hard but controlled."],
      },
      {
        day: "Day 3",
        focus: "Recovery Cardio",
        warmup: ["5 min easy"],
        workout: [
          {
            exercise: "Easy Recovery",
            sets: 1,
            reps: "25-40 min easy",
            restSec: 0,
          },
        ],
        finisher: ["Stretch 10 min"],
        notes: ["Very easy pace."],
      },
      {
        day: "Day 4",
        focus: "Tempo",
        warmup: ["10 min easy"],
        workout: [
          {
            exercise: "Tempo",
            sets: 1,
            reps: "25-35 min moderate",
            restSec: 0,
          },
        ],
        finisher: ["Cool down 10 min"],
        notes: ["Hold pace, don’t fade."],
      },
      {
        day: "Day 5",
        focus: "Mixed Intervals",
        warmup: ["10 min easy"],
        workout: [
          {
            exercise: "Intervals Ladder",
            sets: 1,
            reps: "10x(30s hard/30s easy) + 5x(60s hard/60s easy)",
            restSec: 0,
          },
        ],
        finisher: ["Cool down 10 min"],
        notes: ["If too hard, remove the 60s set."],
      },
    ],
  },
];
// goal, age, height, weight, gender, experience
export function generatePlan(userRow) {
  const { goal, age, height, weight, gender, experience } = userRow;
  const health = calculateBMI(height, weight);
  if (goal === "weight_loss") {
    if (health === "underweight") {
      return false;
    }
    if (health === "normal") {
      if (age >= 14 && age <= 17 && gender === "female") {
        return workoutPlans[0];
      }
      if (age >= 14 && age <= 17 && gender === "male") {
        return workoutPlans[1];
      }
      if (age >= 18 && age <= 44 && gender === "female") {
        return workoutPlans[1];
      }
      if (age >= 18 && age <= 44 && gender === "male") {
        return workoutPlans[1];
      }
      if (age >= 45 && age <= 120 && gender === "female") {
        return workoutPlans[1];
      }
      if (age >= 45 && age <= 120 && gender === "male") {
        return workoutPlans[1];
      }
    }
    if (health === "overweight") {
      if (age >= 14 && age <= 17 && gender === "female") {
        return workoutPlans[1];
      }
      if (age >= 14 && age <= 17 && gender === "male") {
        return workoutPlans[1];
      }
      if (age >= 18 && age <= 44 && gender === "female") {
        return workoutPlans[2];
      }
      if (age >= 18 && age <= 44 && gender === "male") {
        return workoutPlans[2];
      }
      if (age >= 45 && age <= 120 && gender === "female") {
        return workoutPlans[1];
      }
      if (age >= 45 && age <= 120 && gender === "male") {
        return workoutPlans[2];
      }
    }
  }
  if (goal === "muscle_gain") {
    if (health === "underweight") {
      return workoutPlans[3];
    }
    if (health === "normal") {
      if (age >= 14 && age <= 17) {
        return workoutPlans[3];
      }
      if (age >=18 && age <=44 && experience === "beginner"){
        return workoutPlans[3];
      }
      if (age >=18 && age <=44 && experience === "intermediate"){
        return workoutPlans[4];
      }
      if (age >=18 && age <=44 && experience === "advanced" && gender == "female"){
        return workoutPlans[4];
      }
      if (age >=18 && age <=44 && experience === "advanced" && gender == "male"){
        return workoutPlans[5];
      }
      if (age >=45 && age <=120 && experience === "beginner"){
        return workoutPlans[3];
      }
      if (age >=45 && age <=120 && experience === "intermediate"){
        return workoutPlans[4];
      }
      if (age >=45 && age <=120 && experience === "advanced" && gender === "female"){
        return workoutPlans[4];
      }
      if (age >=45 && age <=120 && experience === "advanced" && gender === "male"){
        return workoutPlans[5];
      }
    }
    if (health === "overweight") {
      if (age >= 14 && age <= 17) {
        return workoutPlans[3];
      }
      if (age >=18 && age <=44 && experience === "beginner"){
        return workoutPlans[3];
      }
      if (age >=18 && age <=44 && experience === "intermediate" && gender =="female"){
        return workoutPlans[3];
      }
      if (age >=18 && age <=44 && experience === "intermediate" && gender =="male"){
        return workoutPlans[4];
      }
      if (age >=18 && age <=44 && experience === "advanced" && gender === "female"){
        return workoutPlans[4];
      }
      if (age >=18 && age <=44 && experience === "advanced" && gender === "male"){
        return workoutPlans[5];
      }
      if (age >=45 && age <=120 && experience === "beginner"){
        return workoutPlans[3];
      }
      if (age >=45 && age <=120 && experience === "intermediate"){
        return workoutPlans[3];
      }
      if (age >=45 && age <=120 && experience === "advanced"){
        return workoutPlans[4];
      }
      
    }
  }
  if (goal === "endurance") {
    if (health === "underweight") {
      return workoutPlans[7];
    }
    if (health === "normal") {
      if (age >= 14 && age <= 17) {
        return workoutPlans[6];
      }
      if (age >=18 && age <=44 && experience === "beginner"){
        return workoutPlans[6];
      }
      if (age >=18 && age <=44 && experience === "intermediate"){
        return workoutPlans[7];
      }
      if (age >=18 && age <=44 && experience === "advanced"){
        return workoutPlans[8];
      }
      if (age >=45 && age <=120 && experience === "beginner"){
        return workoutPlans[6];
      }
      if (age >=45 && age <=120 && experience === "intermediate"){
        return workoutPlans[7];
      }
      if (age >=45 && age <=120 && experience === "advanced"){
        return workoutPlans[7];
      }
      
    }
    if (health === "overweight") {
      if (experience === "beginner") {
        return workoutPlans[6];
      }
      if (age >=18 && age <=44 && experience === "intermediate"){
        return workoutPlans[7];
      }
      if (age >=18 && age <=44 && experience === "advanced"){
        return workoutPlans[8];
      }

      if (age >=45 && age <=120 && experience === "intermediate"){
        return workoutPlans[6];
      }
      if (age >=45 && age <=120 && experience === "advanced"){
        return workoutPlans[7];
      }
      
    }
  }
  if (goal === "cardio") {
    if (health === "underweight") {
      return workoutPlans[10];
    }
    if (health === "normal") {
      if (age >= 14 && age <= 17 && experience === "beginner") {
        return workoutPlans[9];
      }
      if (age >= 14 && age <= 17 && (experience === "intermediate" || experience === "advanced")) {
        return workoutPlans[10];
      }
      if (age >= 18 && age <= 44 && experience === "beginner") {
        return workoutPlans[9];
      }
      if (age >= 18 && age <= 44 && experience === "intermediate") {
        return workoutPlans[10];
      }
      if (age >= 18 && age <= 44 && experience === "advanced") {
        return workoutPlans[11];
      }
      if (age >= 45 && age <= 120 && experience === "beginner") {
        return workoutPlans[9];
      }
      if (age >= 45 && age <= 120 && (experience === "intermediate" || experience === "advanced")) {
        return workoutPlans[10];
      }
    }
    if (health === "overweight") {
      if (age >= 14 && age <= 17 && experience === "beginner") {
        return workoutPlans[9];
      }
      if (age >= 14 && age <= 17 && (experience === "intermediate" || experience === "advanced")) {
        return workoutPlans[10];
      }
      if (age >= 18 && age <= 44 && experience === "beginner") {
        return workoutPlans[9];
      }
      if (age >= 18 && age <= 44 && experience === "intermediate") {
        return workoutPlans[10];
      }
      if (age >= 18 && age <= 44 && experience === "advanced") {
        return workoutPlans[11];
      }
      if (age >= 45 && age <= 120 && experience === "beginner") {
        return workoutPlans[9];
      }
      if (age >= 45 && age <= 120 && (experience === "intermediate" || experience === "advanced")) {
        return workoutPlans[10];
      }
    }
  }
}

function calculateBMI(height, weight) {
  const heightT = height/100;
  const heightSquared = heightT * heightT;
  const bmi = weight / heightSquared;
  console.log(bmi);
  if (bmi < 18.5) {
    return "underweight";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    return "normal";
  }
  if (bmi > 24.9) {
    return "overweight";
  }
}
