import { z } from "zod";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [1, 2, 3];
  }),
  createTodos: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    )
    .mutation(async (opts) => {
      const title = opts.input.title;
      const desc = opts.input.description;
      return {
        id: "1",
        desc,
      };
    }),
});

export type AppRouter = typeof appRouter;
