import React, { useState } from "react";
import { NodeViewWrapper } from "@tiptap/react";
import { Button, Input, Modal } from "antd";

const EmbedBlock = (props) => {
	const [openModal, setOpenModal] = useState({ open: true, isFetch: false });

	const fetchMeta = async (url) => {
		setOpenModal({ open: false, isFetch: true });
		let response = await fetch(
			`http://127.0.0.1:8061/iframely?url=${url}&omit_script=1`,
			{
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
			}
		);
	};

	const data = {
		meta: {
			title:
				"WORST TO BEST ; Ft. Rishabh Pant (Zero to Hero) Best comeback ever Motivational video || #wecan",
			site: "YouTube",
			media: "player",
			author: "We can",
			author_url: "https://www.youtube.com/c/Wecanyt",
			description:
				"▶▶Rishabh Rajendra Pant is an Indian cricketer who plays as a middle order wicket-keeper batsman for India, Delhi, and the Delhi Capitals in the Indian Premi...",
			keywords:
				"#risabhpantmotivation, #risabhpantmotivationalvideo, #risabhpantinspirationalvideo, #risabhpantzerotohero, #cricketmotivational, #cricketinspirational, #rishabhpant, #rishabhpantbatting, #rishabhpantvsaustralia, #indiavsaustralia, #indvsaus3rdtest, #ausvsind, #rishabhpantcentury, #rishabhpantbattingtoday, #rishabhpantfunnymoments, #rishabh, #rishabhpantvstimpainehighlights, #rishabhpant89video, #rishabhpant89vsaustralia, #rishabhpant89runsvsaustralia, #india, #australia, #dayfive, #fourthtest, #highlights, #gabba",
			canonical: "https://www.youtube.com/watch?v=OkzFdeFeJL0",
		},
		html: '<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.5%;"><iframe src="https://www.youtube.com/embed/OkzFdeFeJL0?feature=oembed" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture"></iframe></div>',
	};

	props.updateAttributes(data);

	return (
		<NodeViewWrapper>
			{/* {!props.node.attrs.src ? (
				<Modal
					visible={openModal.open}
					onCancel={() => setOpenModal({ open: false, isFetch: false })}
					width={"800px"}
					footer={[
						<Button
							key="back"
							onClick={() => setOpenModal({ open: false, isFetch: false })}
						>
							Cancel
						</Button>,
						<Button key="submit" type="primary">
							Confirm
						</Button>,
					]}
				>
					<Input onPressEnter={(e) => fetchMeta(e.target.value)} />
				</Modal>
			) : ( */}
			<div dangerouslySetInnerHTML={{ __html: data.html }} />
			{/* )} */}
		</NodeViewWrapper>
	);
};

export default EmbedBlock;
