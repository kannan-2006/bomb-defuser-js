# 💣 Bomb Defuser Game

Here’s a web game that really puts your reflexes to the test. Under the hood, it shows off how you can use **asynchronous JavaScript** and **event handling** to create a tense countdown. You get ten seconds—just ten—to save the day.

## ✨ Features

* **Automated Countdown:** The moment you load the page, the 10-second timer starts ticking down using `setInterval()`.
* **Keyword Validation:** The game keeps an eye on what you type, looking for the magic word: “defuse”.
* **Keyboard Event Handling:** Hit **Enter** to lock in your answer—handled by a "keydown" event.
* **Dynamic Game States:**  
  * **Success:** Nail it in time, and you get a big “YOU DID IT”—timer stops cold.
  * **Failure:** Miss the window? “BOOM” flashes up, and you can’t try again.

* **Responsive Styling:** Clean, bold, and centered—with a bright background and a huge timer—thanks to **Bootstrap 4**.

## 🛠️ Tech Stack

* **HTML5:** Lays out the timer and input field.
* **CSS3:** Custom styles for the full-height layout, bomb visuals, and big, easy-to-read fonts.
* **Bootstrap 4:** Helps keep things lined up and looking sharp on any screen.
* **Vanilla JavaScript:** Drives the countdown, handles input, and keeps the game moving.

## 🚀 How It Works

1. **Countdown Launch:** As soon as the script runs, it fires up a `setInterval` (tied to a `uniqueId`) that drops the timer by one every second.
2. **Watching the Input:** The script checks the input field for the word “defuse” as you type.
3. **Winning:** If you hit Enter while “defuse” is in the box—and time’s still on the clock—the script stops the interval, and you win.
4. **Losing:** If the timer hits zero, the interval stops, and the game blasts “BOOM” on the screen.

## 📂 Project Files

* `Bomb Defuser.html`: The structure—timer and input.
* `Bomb Defuser.css`: All about looks—layout and big fonts.
* `Bomb Defuser.js`: Where the magic happens—logic, timing, and keyboard controls.
