import { defineCollection, z } from "astro:content"
import { glob, file } from "astro/loaders"

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		draft: z.boolean().optional(),
	}),
})

const work = defineCollection({
	loader: file("src/content/work/index.json"),
	schema: z.object({
		company: z.string(),
		role: z.string(),
		about: z.string(),
		dateStart: z.coerce.date(),
		dateEnd: z.union([z.coerce.date(), z.string()]),
	}),
})

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		draft: z.boolean().optional(),
		demoURL: z.string().optional(),
		repoURL: z.string().optional(),
		logoURL: z.string().optional(),
		featured: z.boolean().optional(),
	}),
})

export const collections = { blog, work, projects }
