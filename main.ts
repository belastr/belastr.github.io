import { App, staticFiles } from "fresh";

export const app = new App<null>();

app.use(staticFiles());

app.fsRoutes();
