import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));
// app.use("/favicon.ico", serveStatic({ path: "./favicon.ico" }));
app.get("/", (c) => c.text("You can access: /static/hello.txt"));
// app.get("*", serveStatic({ path: "./static/fallback.txt" }));

app.get("/", (c) => c.text("Hello again!"));

export default app;
