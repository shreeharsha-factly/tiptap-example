import React from "react";
import { useEditor, EditorContent, ReactRenderer } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from '@tiptap/extension-link';
import tippy from 'tippy.js'
import Commands from './Commands.js'
import CommandsList from './CommandsList.js'
import Extensions from "./Extension.js";
import "./counter.css";
import { FaBold, FaCode, FaImage, FaIndent, FaItalic, FaLink, FaOutdent, FaTerminal, FaUnderline } from "react-icons/fa";

const Tiptap = () => {
	const editor = useEditor({
		extensions: [StarterKit, Link, Extensions,
			Commands.configure({
				suggestion: {
					items: query => {
						return [
							{
								title: 'H1',
								icon: 'H1',
								subtitle:'Heading level 1',
								command: ({ editor, range }) => {
									editor
										.chain()
										.focus()
										.deleteRange(range)
										.setNode('heading', { level: 1 })
										.run()
								},
							},
							{
								title: 'H2',
								icon: 'H2',
								subtitle:'Heading level 2',
								command: ({ editor, range }) => {
									editor
										.chain()
										.focus()
										.deleteRange(range)
										.setNode('heading', { level: 2 })
										.run()
								},
							},
							{
								title: 'H3',
								icon: 'H3',
								subtitle:'Heading level 3',
								command: ({ editor, range }) => {
									editor
										.chain()
										.focus()
										.deleteRange(range)
										.setNode('heading', { level: 3 })
										.run()
								},
							},
							{
								title: 'bold',
								icon: <FaBold/>,
								subtitle:'Make text bolder',
								command: ({ editor, range }) => {
									editor
										.chain()
										.focus()
										.deleteRange(range)
										.toggleBold('bold')
										.run()
								},
							},
							{
								title: 'italic',
								icon: <FaItalic/>,
								subtitle:'italicize text',
								command: ({ editor, range }) => {
									editor
										.chain()
										.focus()
										.deleteRange(range)
										.toggleItalic('italic')
										.run()
								},
							},
							{
								title: 'Image',
								icon: <FaImage/>,
								subtitle:'Image',
								command: ({ editor, range }) => {
									console.log({range})
									editor.chain().focus().setUppy().run()
								},
							},
							{
								title: 'Link',
								icon: <FaLink/>,
								subtitle:'Add links',
								command: ({ editor, range }) => {
									editor
										.chain()
										.focus()
										.deleteRange(range)
										.setNode('link')
										.run()
								},
							},
							{
								title: 'Underline',
								icon: <FaUnderline/>,
								subtitle:'Underline',
								command: ({ editor, range }) => {
									editor
										.chain()
										.focus()
										.deleteRange(range)
										.toggleUnderline()
										.run()
								},
							},
							{
								title: 'Indent Left',
								icon: <FaIndent/>,
								subtitle:'Indent Left',
								command: ({ editor, range }) => {
									editor
										.chain()
										.focus()
										.deleteRange(range)
										.setNode('heading', { level: 1 })
										.run()
								},
							},
							{
								title: 'Indent Right',
								icon: <FaOutdent/>,
								subtitle:'Indent Right',
								command: ({ editor, range }) => {
									editor
										.chain()
										.focus()
										.deleteRange(range)
										.setNode('heading', { level: 1 })
										.run()
								},
							},
							{
								title: 'Embed',
								icon: 'Em',
								subtitle:'Embed',
								command: ({ editor, range }) => {
									editor
										.chain()
										.focus()
										.deleteRange(range)
										.setNode('heading', { level: 1 })
										.run()
								},
							},
							{
								title: 'Code',
								icon: <FaCode/>,
								subtitle:'Code',
								command: ({ editor, range }) => {
									editor
										.chain()
										.focus()
										.deleteRange(range)
										.toggleCode()
										.run()
								},
							},
							{
								title: 'Raw HTML',
								icon: <FaTerminal/>,
								subtitle:'Raw HTML',
								command: ({ editor, range }) => {
									editor
										.chain()
										.focus()
										.deleteRange(range)
										.setNode('heading', { level: 1 })
										.run()
								},
							},
							
						].filter(item => item.title.toLowerCase().startsWith(query.toLowerCase())).slice(0, 20)
					},
					render: () => {
						let component
						let popup

						return {
							onStart(props) {
                component = new ReactRenderer(CommandsList, {
                  editor: props.editor,
                  props: props,
                });

								popup = tippy('body', {
									getReferenceClientRect: props.clientRect,
									appendTo: () => document.body,
									content: component.element,
									showOnCreate: true,
									interactive: true,
									trigger: 'manual',
									placement: 'bottom-start',
								})
							},
							onUpdate(props) {
								component.updateProps(props)

								popup[0].setProps({
									getReferenceClientRect: props.clientRect,
								})
							},
							onKeyDown(props) {
								if (props.event.key === 'Escape') {
									popup[0].hide()

									return true
								}

								return component.ref?.onKeyDown(props)
							},
							onExit() {
								popup[0].destroy()
								component.destroy()
							},
						}
					},
				},
			}),],
		content: `
    <img>
		<h1>TipTap</h1>
    `,
	});

	console.log({
		html: editor ? editor.getHTML() : null,
		json: editor ? editor.getJSON() : null,
	});

	return (
		<>
			{/* <MenuBar editor={editor} /> */}
			<div class="tippy-box" data-state="visible" tabindex="-1" data-animation="fade" role="tooltip" style={{maxWidth: '350px', transitionDuration: '300ms'}} data-placement="bottom-start"><div class="tippy-content" data-state="visible" style={{transitionDuration: '300ms'}}><div class="react-renderer"></div></div><div class="tippy-arrow" style={{position: 'absolute', left: '0px', transform: 'translate3d(3px, 0px, 0px)'}}></div></div>

			<EditorContent editor={editor} />
		</>
	);
};

export default Tiptap;
