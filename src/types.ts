export type Site = {
	IMAGE: string
	NAME: string
	NUM_POSTS_ON_HOMEPAGE: number
	NUM_WORKS_ON_HOMEPAGE: number
	NUM_PROJECTS_ON_HOMEPAGE: number
}

export type Page = {
	TITLE: string
	DESCRIPTION: string
}

export type Socials = {
	ICON: string
	NAME: string
	HREF: string
}[]

export type Services = {
	ICON: string
	TITLE: string
	TEXT: string
}[]
