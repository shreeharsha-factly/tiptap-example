import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ReactComponent from "./Extension.js";
import "./counter.css";
import MenuBar from "./MenuBar.js";

const Tiptap = () => {
	const editor = useEditor({
		extensions: [StarterKit, ReactComponent],
		content: `
    <img>
    `,
	});

	console.log({
		html: editor ? editor.getHTML() : null,
		json: editor ? editor.getJSON() : null,
	});

	return (
		<>
			{/* <MenuBar editor={editor} /> */}
			<EditorContent editor={editor} />
		</>
	);
};

export default Tiptap;
