import React from "react";
import { NodeViewWrapper } from "@tiptap/react";
import UppyUploader from "./Uppy";

const Component = (props) => {
	return (
		<NodeViewWrapper className="react-component">
			{!props.node.attrs.src ? (
				<UppyUploader updateAttributes={props.updateAttributes} />
			) : (
				<img src={props.node.attrs.src} alt={"not found"} />
			)}
		</NodeViewWrapper>
	);
};

export default Component;
