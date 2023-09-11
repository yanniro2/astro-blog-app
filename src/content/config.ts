// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const postCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    date: z.string(),
    image: z.string().optional(),
    title: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postCollection,
};
