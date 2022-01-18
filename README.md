<img src="./public/cover.png">

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

> DofTrack is a **REAL** user-friendly task tracker. With no penalties or punishments. No matter what user will only get positive emotions.

# About
The key feature of DofTrack is it’s gentleness. Unlike other task tracking applications DofTrack doesn’t get on your nerves with never-ending *<span style="color: red">red deadlines</span>*. On the contrary, it focuses on rewarding you for completed tasks. 

## Entities
The main entities of DofTrack are
 - Dream
 - Goal
 - Task & Activity

### Dream
**Dream** is the top entity which represents a huge goal *ex.: Become a Front-end developer* (basically the name speaks for itself). **Dream** consists of several **goals** which on complete would fulfill your dream.

### Goal
**Goal** is smaller than a **dream** and represents a specific aim to be accomplished *ex.: Learn javascript*. Goals consist of **tasks** and **activities**.

### Tasks
**Task** is just a task 😅 You have a title, description, deadline and difficulty level (will be explained later) 

### Activity
**Activity** is a timer which refers to some kind of a task you should do for some period of time *ex.: Read "You don’t know JS"*. When the timer reaches 0, you are able to continue tracking time for that **activity** but the timer goes up infinitely now but you still get rewarded for that.


## Rewarding system
For every **task** or **activity** finished the user gets rewarded with **gems**. The amount of **gems** user gets scales with difficulty (for **activities** - with time spent). 

When creating a **goal** user sets an amount of **gems** he has too reach completing the tasks to accomplish the **goal**.

# Milestones
- [x] Create a design
- [x] Create React components based on the design
- [x] Create functionality
- [x] Connect Firebase Firestore
- [ ] Connect Firebase Authentication
- [ ] Refactor mobile layout (*should have thought in the beginning* 😭)
- [ ] Polish the project
- [ ] Launch

# Getting started
### Installation
```bash
git clone https://github.com/steezy2401/DofTrack.git
cd ./DofTrack
npm install
```

### Start
```bash
npm run dev
```

### Build
```bash
npm run build
```