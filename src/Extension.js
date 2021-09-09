import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import Component from "./Component";

export default Node.create({
	name: "img",
	group: "block",

	draggable: true,

	// addCommands() {
	// 	return {
	// 		setUppy:
	// 			(attributes) =>
	// 			({ commands }) => {
	// 				return commands.toggleNode(ReactNodeViewRenderer(Component));
	// 			},
	// 	};
	// },

	// addCommands() {
	// 	return {
	// 		setImage:
	// 			(options) =>
	// 			({ commands }) => {
	// 				return commands.insertContent({
	// 					attrs: options,
	// 				});
	// 			},
	// 	};
	// },

	addAttributes() {
		return {
			src: {
				default: null,
			},
			alt: {
				default: null,
			},
			title: {
				default: null,
			},
		};
	},
	parseHTML() {
		return [
			{
				tag: "img",
			},
		];
	},

	renderHTML({ HTMLAttributes }) {
		return ["img", mergeAttributes(HTMLAttributes)];
	},

	addNodeView() {
		return ReactNodeViewRenderer(Component);
	},
});
