# Habit Build Product Specification

## Problem

Many people know exactly what they should do but struggle to stay consistent.

Examples:

* Studying
* Coding
* Reading
* Fitness
* Personal projects

The problem is not lack of information.

The problem is:

"I know what I should do, but I don't consistently do it."

More specifically:

"I know what to do, but I can't make myself start."

---

## Core Philosophy

Consistency is more important than intensity.

The goal is not to maximize productivity.

The goal is to help users maintain habits over long periods.

The product is designed around one principle:

Reduce resistance.
Protect consistency.
Prevent burnout.

### Resistance Training, Not Productivity

The product reframes difficulty as training.

Every time a user sits despite not feeling like it, they complete a "rep."

Just as physical resistance training builds muscle, mental resistance training builds the habit.

The discomfort is the workout. It is not a sign of failure.

---

## Additional Core Principles

### Showing Up Is The Primary Win

The primary goal is not hitting the target.

The primary goal is showing up.

A user who completes the minimum has succeeded.

Target achievement is a bonus, not the definition of success.

### Protect The Habit, Not The Day

The system should optimize for long-term consistency.

The goal is not to maximize today's output.

The goal is to help users still perform the habit 30 days from now.

### Good Days Do Not Increase Tomorrow's Obligation

Completing extra time on a good day should never create pressure to do more the next day.

The system should prevent users from turning motivation spikes into unsustainable expectations.

### Missing A Day Is Normal

Missing a day does not reset progress.

Missing a day does not mean failure.

Returning after a missed day is a success and should be treated as such.

### Difficulty Is Universal

The product should normalize struggle.

Messages should convey: "This is hard for everyone" rather than "you are struggling."

When users find a session difficult, the system should frame it as expected resistance, not personal failure.

### First-Then Structure

Encourage users to do their habit before the activity they look forward to.

The product should recommend: habit first, reward second.

This trains the brain that the habit leads to something enjoyable, building a positive feedback loop over time.

### Minimum / Target / Maximum Philosophy

Every plan contains:

* Minimum
* Target
* Maximum

Minimum:
The amount needed to keep the habit alive.

Target:
The recommended amount.

Maximum:
The upper limit designed to prevent burnout.

Users who reach the minimum should be positively reinforced.

The system should celebrate consistency before intensity.

---

## What Makes This Different

The website does not care about:

* Tasks
* Chapters
* Assignments
* Projects
* Deadlines

The website only cares about:

* Time invested
* Consistency
* Progress trends
* Sustainable growth

This is not:

* A to-do list
* A project manager
* A productivity dashboard
* A Pomodoro app
* A streak tracker

Habit Build is a consistency coach.

### Learning Habits: Completion Over Comprehension

For learning-based habits, the product should normalize incomplete understanding.

A user does not need to master a topic in one session.

The message for difficult sessions should be:

"Complete it once. Understanding will come later."

This prevents perfectionism from blocking consistency.

---

## User Flow

### Step 1: Assessment

Ask questions about:

* Current activity
* Current daily time
* Habit consistency
* Common obstacles
* User situation
* Biggest goal for the next 30 days
* Preferred time of day for the habit

One of the key obstacles should be:

"I know what to do but can't start."

The assessment should help the user identify a specific daily time slot.

Research from coaching shows that a fixed daily window makes the habit automatic.

If the user is unsure, recommend morning as a starting point (after a consistent routine like breakfast or bathing).

---

### Step 2: Personalized 30-Day Plan

The website generates a personalized plan.

The user does not create the plan.

Different users should receive different plans.

The plan should include:

* Daily minimum
* Daily target
* Daily maximum

Example:

Minimum:
The amount needed to maintain the habit.

Target:
The recommended amount.

Maximum:
The upper limit designed to prevent burnout.

The plan follows a specific cadence:

Weeks 1:
Lowest intensity. The goal is simply to build the sitting habit.

Weeks 2:
Small increase after 7 days of consistency.

Weeks 3:
Add a second block or extend time.

Weeks 4:
Build toward sustainable long-term target.

Plans should increase gradually.

Plans should never increase dramatically.

Plans should not increase simply because of one good day.

Plans should increase only after 4-7 days of sustained consistency.

---

### Step 3: Daily Check-In

Every day the user reports:

* Actual time spent
* Resistance sets completed (optional)
* A short optional note (e.g., "felt tired but did it")

The system compares:

* Minimum
* Target
* Maximum
* Actual time

Then provides supportive feedback.

The check-in should be simple enough to complete in under 10 seconds.

The recommended log format from coaching is:

Day X
Focused time: __ minutes
Resistance sets: __
Notes: __

This format worked because it split effort into two categories:

1. Core resistance time (the hard, disciplined work)
2. Total focused time (including lighter work like lectures)

Users should not need to log with perfect accuracy. Approximate time is acceptable.

Below Minimum (but showed up):

"That counts. You showed up. That's the win."

Below Minimum (missed entirely):

"That's okay. Tomorrow is a new day. Just start."

Reached Minimum:

"You kept the habit alive today. That's enough."

Reached Target:

"Consistency is building. You did what you planned."

Above Maximum:

"You did more than planned. That's fine, but tomorrow's target stays the same. Protect your energy."

---

### Step 4: Adaptive Adjustment

Adjust future recommendations based on performance.

Examples:

* Consistent success → gradual increases.
* Repeated difficulty → maintain or reduce targets.
* Missed days → supportive recovery.

Rules:

* Never increase targets after one exceptional day.
* Increase only after 4-7 days of sustained consistency.
* Decrease when needed without framing it as failure.
* A good day does not raise tomorrow's minimum.
* A bad day does not lower tomorrow's target.

The system adapts to the user.

The user should not need to constantly redesign the plan.

---

## Supporting Features

### 5-Minute Resistance Timer

Purpose:

Help users overcome the resistance to starting.

This is one of the most important features in the product.

The goal is not productivity.

The goal is simply to begin.

Core message:

"Just do 5 minutes. Then you can stop."

If the user still wants to stop after 5 minutes:

That still counts as a win.

The timer should reinforce:

* Starting matters.
* Resistance is normal.
* Showing up is success.

Framing:

The timer should reframe the session as "resistance training."

Each 5-minute block is a rep.

The discomfort experienced during the timer is the workout.

Users who complete the timer should receive a message like:

"You did a rep. Your habit is getting stronger."

Seamless Transition:

After the 5-minute timer ends, the user should be offered the option to continue into the stopwatch.

The flow is:

1. User feels resistance to starting.
2. User taps "5-Minute Resistance Timer."
3. Timer runs for 5 minutes.
4. Timer ends. The system asks: "Want to keep going?"
5. If yes → seamless transition to the stopwatch.
6. If no → "That's a win. You showed up."

This mirrors the real conversation flow that worked in coaching.

Set Counter:

The timer should track how many resistance sets the user completed in a session.

Display count like: "Resistance sets: 5 completed today"

This gives users a tangible measure of their effort beyond time.

The counter reinforces the "reps" framing.

---

### Stopwatch

Purpose:

Track actual time spent on the habit.

Used for:

* Daily tracking
* Weekly progress
* Monthly progress
* Plan adjustments

The stopwatch should support:

* Start
* Pause
* Resume
* Stop
* Save Session

---

## Progress Tracking

Show:

### Daily

* Time spent
* Minimum
* Target
* Maximum

### Weekly

* Total time
* Average time
* Active days
* Consistency trend

### Monthly

* Total time
* Progress trend
* Growth over time

Progress tracking should be simple and easy to understand.

Avoid overwhelming dashboards.

---

## Psychological Architecture

These principles are derived from the coaching conversation that inspired the product and should guide all product decisions.

### The 5-Minute Rule

The most powerful tool for overcoming procrastination.

The rule works because it removes the fear of being trapped in a long session.

The user only commits to 5 minutes. After 5 minutes, they have permission to stop.

Paradoxically, the freedom to quit makes it easier to continue.

### Resistance Training Reframe

The product reframes difficulty as training.

Every uncomfortable session is a "rep" that builds the habit muscle.

This prevents users from interpreting struggle as a sign they should quit.

### Gradual Cadence

Increases happen every 4-7 days, not daily.

This protects against motivation spikes and burnout.

The user's plan serves as a governor on their enthusiasm.

### First-Then

Habit first, reward second.

This leverages the Premack Principle: a high-probability behavior (reward) reinforces a low-probability behavior (habit).

Over time, the brain learns that the habit leads to something good.

### Minimum Protection

Every plan has a non-negotiable minimum.

On bad days, the user does the minimum and stops.

This prevents all-or-nothing thinking. The habit survives low-energy days.

### Normalization

The product normalizes difficulty, boredom, and confusion.

Messages should convey that these experiences are universal.

This reduces shame and prevents users from believing they are uniquely failing.

### Completion Over Comprehension

For learning habits, understanding can follow exposure.

The user completes the material even if they don't understand it fully.

Clarity comes with repetition.

---

## Burnout Prevention

Burnout prevention is a first-class feature.

The product should actively prevent users from:

* Doing too much too soon
* Increasing targets too quickly
* Turning motivation spikes into obligations

Rules:

* Respect the maximum.
* Encourage recovery.
* Encourage sustainable growth.
* Protect the habit before maximizing output.

---

## Important Rules

### Communication

* Never shame users.
* Never punish users.
* Never use guilt-based messaging.
* Normalize difficulty. Say "this is hard for everyone" not "you are struggling."
* When a user returns after a gap, the first message should be positive: "You came back. That's a win."
* Validate the user's experience before giving advice.

### Habit Protection

* Protect users from burnout.
* Encourage consistency over intensity.
* Simplicity is more important than feature quantity.
* Showing up is more important than hitting the target.
* Returning after a missed day is a success.
* Good days should never increase tomorrow's obligation.
* A user who reaches the minimum has succeeded.
* The goal is long-term consistency, not short-term motivation.
* Never increase targets after one exceptional day.
* Increase targets only after 4-7 days of sustained consistency.

### Session Design

* A session where the user stops after 5 minutes is still a win.
* A session where the user struggles through confusion is still progress.
* The discomfort of starting is the workout. Reframe difficulty as training.
* If a user did more yesterday, today's minimum does not change.
* Encourage "habit first, reward second" ordering.
* For learning habits: "complete once, understanding comes later."
