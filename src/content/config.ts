import {z, defineCollection} from 'astro:content'

const portfolioCollection = defineCollection({
  schema: z.object({
    type: z.string(),
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    link: z.string().optional(),
    external_target: z.boolean().optional(),
  }),
})

export const collections = {
  portfolio: portfolioCollection,
}
