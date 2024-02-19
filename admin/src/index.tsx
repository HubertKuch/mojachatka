import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import Dashboard from "./views/Dashboard";

const app = new Hono();
const port = 3000;
console.log(`Server is running on port ${port}`);

app.get("/static/*", serveStatic({ root: "./src/" }));

app.get("/", async (c) => c.html(<Dashboard />));

serve({
  fetch: app.fetch,
  port,
});
