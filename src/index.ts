import { Elysia } from "elysia";

const addPlugin = new Elysia()
  .state('new-todo', ({ params })=> params)
  .get("/add-todo/:text", ({ params }) => params);

const app = new Elysia()
  .use(addPlugin)
  .get("/caca", ({ store }) => store)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
