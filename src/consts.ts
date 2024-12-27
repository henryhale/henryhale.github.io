import type { Site, Metadata, Socials } from "@types"

export const SITE: Site = {
	IMAGE: "https://github.com/henryhale.png",
	NAME: "Henry Hale",
	EMAIL: "",
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

export const SOCIALS: Socials = [
	{
		NAME: "twitter-x",
		HREF: "https://twitter.com/devhenryhale",
	},
	{
		NAME: "github",
		HREF: "https://github.com/henryhale",
	},
]
