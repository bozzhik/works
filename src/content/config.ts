import {z, defineCollection} from 'astro:content'

const portfolioCollection = defineCollection({
  schema: z.object({
    type: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    icon: z.string().optional(),
    link: z.string().optional(),
    external_target: z.boolean().optional(),
  }),
})

export const collections = {
  portfolio: portfolioCollection,
}
