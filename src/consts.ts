import type { Site, Metadata, Socials, Services } from "@types"

export const SITE: Site = {
	IMAGE: "https://github.com/henryhale.png",
	NAME: "Henry Hale",
	NUM_POSTS_ON_HOMEPAGE: 4,
	NUM_WORKS_ON_HOMEPAGE: 4,
	NUM_PROJECTS_ON_HOMEPAGE: 4,
}

export const HOME: Metadata = {
	TITLE: "Home",
	DESCRIPTION: "Welcome to my corner of the internet.",
}

export const BLOG: Metadata = {
	TITLE: "Blog",
	DESCRIPTION: "A series of articles covering topics close to my heart.",
}

export const WORK: Metadata = {
	TITLE: "Work",
	DESCRIPTION: "Where I have worked and what I have done.",
}

export const PROJECTS: Metadata = {
	TITLE: "Projects",
	DESCRIPTION:
		"A collection of my projects, with links to repositories and demos.",
}

export const CONTACT: Metadata = {
	TITLE: "Contact",
	DESCRIPTION: "Say Hello. I'd love to hear from you.",
}

export const SOCIALS: Socials = [
	{
		ICON: "envelope",
		NAME: "email",
		HREF: "mailto:hello@henryhale.dev",
	},
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
		TITLE: "Software Development",
		TEXT: "I design and build efficient, maintainable software systems - from low-level utilities to full-stack web applications. I'm open to freelance or contract work.",
	},
	{
		ICON: "branch",
		TITLE: "Reverse Engineering",
		TEXT: "I explore how existing technologies work, often rebuilding or improving them. Let's connect if you're working on tech recreations, emulators, or similar projects.",
	},
]
