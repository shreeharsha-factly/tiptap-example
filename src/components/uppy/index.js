import React, { useState } from "react";
import { Modal, Button } from "antd";
import UppyUploader from "./uploader";

function MediaSelector({ updateAttributes }) {
	const [openModal, setOpenModal] = useState(true);

	const onUpload = (src) => {
		updateAttributes({ src });
		setOpenModal(false);
	};

	return (
		<Modal
			visible={openModal}
			onCancel={() => setOpenModal(false)}
			width={"800px"}
			footer={[
				<Button key="back" onClick={() => setOpenModal(false)}>
					Cancel
				</Button>,
				<Button key="submit" type="primary">
					Confirm
				</Button>,
			]}
		>
			<UppyUploader onUpload={onUpload} />
		</Modal>
	);
}

export default MediaSelector;
