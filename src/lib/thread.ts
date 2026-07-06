import type { CollectionEntry } from "astro:content"
import {
	Comment,
	Group,
	Left,
	Right,
	Spine,
	Topic,
	createRoadmap,
	exportToSVG,
	type RoadmapBranchNode,
	type RoadmapData,
	type RoadmapGroupChildNode,
	type RoadmapNodeInput,
	type RoadmapPlacedBranch,
	type RoadmapSvgOptions,
	type RoadmapTheme,
} from "@devhenryhale/roadmap"

type ThreadEntry = CollectionEntry<"threads">
type RoadmapSpineInput = ThreadEntry["data"]["spine"][number]
type RoadmapBranchInput = RoadmapSpineInput["left"][number]
type RoadmapGroupInput = Extract<RoadmapBranchInput, { type: "group" }>
type RoadmapChildInput = RoadmapGroupInput["children"][number]
type ThreadThemeName = "light" | "dark"

type ThreadNodeMeta = Pick<RoadmapNodeInput, "title" | "link" | "description">

const layout: RoadmapSvgOptions["layout"] = {
	topPadding: 72,
	bottomPadding: 72,
	canvasPadding: 0,
	spineVerticalGap: 76,
	horizontalGap: 92,
	titleFontSize: 30,
}

const themes = {
	light: {
		id: "stone-light",
		name: "Stone Light",
		titleText: "#1c1917",
		spineFill: "#292524",
		spineStroke: "#1c1917",
		spineText: "#fafaf9",
		groupFill: "#fafaf9",
		groupStroke: "#d6d3d1",
		groupText: "#292524",
		topicFill: "#ffffff",
		topicStroke: "#d6d3d1",
		topicText: "#292524",
		commentFill: "#e7e5e4",
		commentStroke: "transparent",
		commentText: "#57534e",
		edgeStroke: "#78716c",
		backgroundColor: "#fafaf9",
		fontFamily: "Inter, sans-serif",
		rx: 6,
	},
	dark: {
		id: "stone-dark",
		name: "Stone Dark",
		titleText: "#fafaf9",
		spineFill: "#e7e5e4",
		spineStroke: "#fafaf9",
		spineText: "#1c1917",
		groupFill: "#292524",
		groupStroke: "#57534e",
		groupText: "#f5f5f4",
		topicFill: "#1c1917",
		topicStroke: "#57534e",
		topicText: "#f5f5f4",
		commentFill: "#44403c",
		commentStroke: "transparent",
		commentText: "#d6d3d1",
		edgeStroke: "#a8a29e",
		backgroundColor: "#1c1917",
		fontFamily: "Inter, sans-serif",
		rx: 6,
	},
} satisfies Record<ThreadThemeName, RoadmapTheme>

function nodeInput(node: ThreadNodeMeta): Omit<RoadmapNodeInput, "id"> {
	return {
		title: node.title,
		...(node.description ? { description: node.description } : {}),
		...(node.link ? { link: node.link } : {}),
	}
}

function createChildNode(node: RoadmapChildInput): RoadmapGroupChildNode {
	if (node.type === "comment") {
		return Comment(node.id, nodeInput(node))
	}

	return Topic(node.id, nodeInput(node))
}

function createBranchNode(node: RoadmapBranchInput): RoadmapBranchNode {
	if (node.type === "group") {
		return Group(node.id, nodeInput(node), () =>
			node.children.map(createChildNode)
		)
	}

	return createChildNode(node)
}

function createPlacedBranches(spine: RoadmapSpineInput): RoadmapPlacedBranch[] {
	return [
		...spine.left.map((branch) => Left(createBranchNode(branch))),
		...spine.right.map((branch) => Right(createBranchNode(branch))),
	]
}

export function createThreadData(entry: ThreadEntry): RoadmapData {
	const roadmap = createRoadmap(entry.data.title, () =>
		entry.data.spine.map((spine) =>
			Spine(spine.id, nodeInput(spine), () => createPlacedBranches(spine))
		)
	)

	return {
		...roadmap,
		id: entry.id,
	}
}

export function renderThreadSvg(
	entry: ThreadEntry,
	themeName: ThreadThemeName = "light"
) {
	return exportToSVG(createThreadData(entry), {
		theme: themes[themeName],
		layout,
		includeXmlDeclaration: false,
		interactiveLinks: true,
	})
}
