import { defineCollection, z } from 'astro:content';

const appsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    platforms: z.array(z.enum(['iOS', 'iPadOS', 'macOS', 'watchOS', 'visionOS', 'tvOS'])),
    appStoreUrl: z.string().url().optional(),
    websiteUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    status: z.enum(['available', 'coming-soon', 'beta']).default('available'),
    color: z.string().optional(),
  }),
});

export const collections = {
  apps: appsCollection,
};


