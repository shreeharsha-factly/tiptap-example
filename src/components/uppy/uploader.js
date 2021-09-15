import React from "react";
import Uppy from "@uppy/core";
import AwsS3 from "@uppy/aws-s3";
import Url from "@uppy/url";
import { Dashboard } from "@uppy/react";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/url/dist/style.css";

function UppyUploader({ onUpload }) {
	const uppy = new Uppy({
		id: "uppy-media",
		meta: { type: "avatar" },
		autoProceed: false,
	})
		.use(AwsS3, { companionUrl: "https://api2.transloadit.com" })
		.use(Url, { companionUrl: "https://api2.transloadit.com" });

	uppy.on("complete", (result) => {
		onUpload(
			"https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
		);

		console.log("complete", result);
	});
	return <Dashboard uppy={uppy} plugins={["Url"]} />;
}

export default UppyUploader;
