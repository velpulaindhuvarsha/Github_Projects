# 🤖 AI Rock Paper Scissors

An interactive, browser-based **Rock Paper Scissors game** with real-time hand gesture recognition using **Google Teachable Machine** and a lightweight adaptive AI opponent.

## 🎯 Project Overview

This project allows users to play Rock Paper Scissors using **hand gestures through a webcam**. Google Teachable Machine recognizes the player's gesture, while JavaScript handles the game logic, scoring, and adaptive AI gameplay.

## ✨ Features

* 📷 Real-time webcam-based hand gesture recognition
* 🤖 AI opponent with adaptive gameplay
* ✊ Rock, ✋ Paper, and ✌️ Scissors recognition
* 🏆 Score tracking
* 🎮 Interactive and responsive game interface
* ⚡ Lightweight and dependency-free browser application
* 🔒 Runs locally in the browser

## 🛠️ Tech Stack

* **Google Teachable Machine** – Hand gesture recognition
* **HTML** – Game structure and interface
* **CSS** – Styling, layout, theme, and animations
* **JavaScript** – Game logic, AI strategy, webcam interaction, and DOM rendering
* **Git & GitHub** – Version control and project hosting

## 🔄 How It Works

1. The player enables webcam access.
2. **Google Teachable Machine** processes the camera input.
3. The trained model recognizes the player's hand gesture.
4. The gesture is converted into Rock, Paper, or Scissors.
5. The JavaScript-based AI selects its move using recent gameplay history.
6. The game compares both moves and determines the winner.
7. The scoreboard is updated in real time.

## 📂 Project Structure

```text
AI-Rock-Paper-Scissors/
│
├── index.html
├── css/
│   └── ...
├── js/
│   └── ...
├── my_model/
│   └── ...
└── assets/
    └── ...
```

## ▶️ How to Run

### Option 1: Open Directly

Open `index.html` in a modern web browser.

### Option 2: Run Using a Local Server

Because webcam access may be restricted when opening an HTML file directly, run a local server:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

Select the project folder and open the game.

> **Note:** Webcam access generally requires `localhost` or HTTPS. Allow camera permission when prompted.

## 🌟 Project Highlights

* Integrated **Google Teachable Machine** for AI-based hand gesture recognition.
* Connected webcam input with a browser-based game.
* Implemented an **adaptive AI opponent** using recent player history.
* Developed the interface using **HTML, CSS, and JavaScript**.
* Managed real-time game state and score tracking.

## 🚀 Future Improvements

* Improve gesture recognition accuracy with additional training data.
* Add multiple difficulty levels.
* Add sound effects and animations.
* Store player statistics and game history.
* Deploy the application online using HTTPS.

## 👩‍💻 Author

**Velpula Indhu Varsha**

B.Tech Computer Science & Engineering Student

GitHub: [velpulaindhuvarsha](https://github.com/velpulaindhuvarsha)
