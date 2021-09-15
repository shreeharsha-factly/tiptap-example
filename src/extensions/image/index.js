import { Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import MediaBlock from "./MediaBlock";

export const Image = Node.create({
	name: "image",
	group: "block",
	draggable: true,

	addAttributes: () => ({
		src: { default: null },
		alt: { default: null },
		link: { default: null },
	}),

	renderHTML: ({ HTMLAttributes }) => {
		const figureNode = [
			"figure",
			[
				"img",
				{
					src: HTMLAttributes.src,
					alt: HTMLAttributes.alt,
					title: HTMLAttributes.alt,
				},
			],
			["figcaption", HTMLAttributes.alt || ""],
		];

		return figureNode;
	},

	addCommands() {
		return {
			setImage:
				(options) =>
				({ commands }) => {
					return commands.insertContent({
						type: this.name,
						attrs: options,
					});
				},
		};
	},
	addNodeView() {
		return ReactNodeViewRenderer(MediaBlock);
	},
});

export default Image;
