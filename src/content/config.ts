import {z, defineCollection} from 'astro:content'

const portfolioCollection = defineCollection({
  schema: z.object({
    type: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    link: z.string().optional(),
    external_target: z.boolean().optional(),
  }),
})

export const collections = {
  projects: portfolioCollection,
}
