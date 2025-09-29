import { z, defineCollection } from "astro:content";

const workCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        publishDate: z.date(),
    }),
});

export const collections = {
    work: workCollection,
};
