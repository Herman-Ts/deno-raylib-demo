import {
  Drawing,
  Shapes,
  LIGHTGRAY,
  RAYWHITE,
  DARKBLUE,
  Text,
  Monitor,
  Timing,
  Window,
} from "@lino/raylib";

const screenWidth: number = 1280;
const screenHeight: number = 720;

Window.init(screenWidth, screenHeight, "Deno Raylib Demo");
Timing.setTargetFPS(Monitor.getCurrent().getRefreshRate());

while (!Window.shouldClose()) {
  Drawing.beginDrawing();
  Drawing.clearBackground(RAYWHITE);
  Text.drawText("Running in Deno", 190, 200, 20, LIGHTGRAY);
  Shapes.drawCircle(screenWidth / 5, 120, 35, DARKBLUE);
  Drawing.endDrawing();
}

Window.close();
