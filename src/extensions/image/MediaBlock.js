import React from "react";
import { NodeViewWrapper } from "@tiptap/react";
import MediaSelector from "../../components/uppy";

const MediaBlock = (props) => {
	return (
		<NodeViewWrapper className="react-component">
			{!props.node.attrs.src ? (
				<MediaSelector updateAttributes={props.updateAttributes} />
			) : (
				<figure>
					<img src={props.node.attrs.src} alt={props.node.attrs.alt} />
					<figcaption>{props.node.attrs.alt || "sample image"}</figcaption>
				</figure>
			)}
		</NodeViewWrapper>
	);
};

export default MediaBlock;
