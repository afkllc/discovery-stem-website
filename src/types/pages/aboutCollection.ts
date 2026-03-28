import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean(),

    // About Us section with a list of items
    about_us: z.array(
      z.object({
        title: z.string(),
        image: z.string(),
        content: z.string(),
      }),
    ),
  }),
});
