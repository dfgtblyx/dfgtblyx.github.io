import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.enum(['Low-Level Control', 'RL Algorithm', 'Perception']),
		technologies: z.array(z.string()),
		image: z.string(),
		order: z.number().optional(), // Optional: lower numbers appear first (1, 2, 3...)
		github: z.union([
			z.string(),
			z.array(z.object({
				title: z.string(),
				url: z.string(),
				description: z.string().optional(),
			}))
		]).optional(),
		video: z.string().optional(),
		website: z.string().optional(),
		links: z.array(z.object({
			title: z.string(),
			url: z.string(),
			description: z.string().optional(),
		})).optional(),
		images: z.array(z.string()).optional(),
	}),
});

export const collections = {
	'projects': projectsCollection,
};
