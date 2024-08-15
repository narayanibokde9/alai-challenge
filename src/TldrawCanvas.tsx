import React from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

export const TldrawCanvas: React.FC = () => {
	return (
		<div
			style={{
				width: "50vw",
				height: "80vh",
				border: "2px solid black",
				margin: "20px",
				boxSizing: "border-box",
			}}
		>
			<Tldraw
				hideUi={true}
				onMount={(editor) => {
					window.editor = editor;
				}}
			/>
		</div>
	);
};
