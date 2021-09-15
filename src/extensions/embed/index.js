import { Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import EmbedBlock from "./EmbedBlock";

export const Embed = Node.create({
	name: "embed",
	group: "block",
	draggable: true,

	addAttributes: () => ({
		html: { default: null },
		meta: { default: null },
	}),

	renderHTML: ({ HTMLAttributes }) => {
		const figureNode = ["div", HTMLAttributes.html];

		return figureNode;
	},

	addCommands() {
		return {
			setEmbedUrl:
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
		return ReactNodeViewRenderer(EmbedBlock);
	},
});

export default Embed;
