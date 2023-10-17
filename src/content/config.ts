import {z, defineCollection} from 'astro:content'

const portfolioCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    link: z.string().optional(),
  }),
})

export const collections = {
  projects: portfolioCollection,
}
