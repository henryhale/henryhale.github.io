import type { Site, Page, Socials, Services } from "@types"

export const SITE: Site = {
	IMAGE: "https://github.com/henryhale.png",
	NAME: "Henry Hale",
	NUM_POSTS_ON_HOMEPAGE: 4,
	NUM_WORKS_ON_HOMEPAGE: 4,
	NUM_PROJECTS_ON_HOMEPAGE: 4,
}

export const HOME: Page = {
	TITLE: "Home",
	DESCRIPTION: "Welcome to my corner of the internet.",
}

export const BLOG: Page = {
	TITLE: "Blog",
	DESCRIPTION: "Writing about topics I find interesting.",
}

export const WORK: Page = {
	TITLE: "Work",
	DESCRIPTION: "Where I have worked and what I have done.",
}

export const PROJECTS: Page = {
	TITLE: "Projects",
	DESCRIPTION:
		"A collection of my projects, with links to repositories and demos.",
}

export const CONTACT: Page = {
	TITLE: "Contact",
	DESCRIPTION: "Say Hello. I'd love to hear from you.",
}

export const SOCIALS: Socials = [
	{
		ICON: "twitter",
		NAME: "twitter-x",
		HREF: "https://twitter.com/devhenryhale",
	},
	{
		ICON: "github",
		NAME: "github",
		HREF: "https://github.com/henryhale",
	},
]

export const SERVICES: Services = [
	{
		ICON: "code",
		TITLE: "Rapid Prototyping",
		TEXT: "Building fast, functional prototypes to explore ideas with minimal overhead.",
	},
	{
		ICON: "branch",
		TITLE: "End-to-End Product Thinking",
		TEXT: "Taking ideas from scratch to usable tools - frontend to backend, logic to UI.",
	},
]
