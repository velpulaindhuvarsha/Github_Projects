# Hand / Machine

A polished, dependency-free Rock Paper Scissors game with a lightweight adaptive AI opponent.

## Run

Open `index.html` in a modern browser. Because the app uses JavaScript modules, serve the folder with a local static server when opening directly is restricted:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080` and open the `AI-Rock-Paper-Scissors` folder.

Click **Use camera** and grant browser permission to play with hand gestures. Camera access requires `localhost` or HTTPS; opening the HTML directly may prevent webcam access.

## Structure

- `index.html`: accessible game interface
- `css/`: layout, theme, and motion styles
- `js/`: game rules, adaptive AI, and DOM rendering
- `my_model/`: optional model metadata placeholders for a future trained gesture classifier
- `assets/`: reserved paths for gesture art, icons, and sound effects

The current AI runs locally with a small recent-history strategy, so the game is playable before a trained gesture model is added.
