import React, { useState } from "react";
import { TldrawCanvas } from "./TldrawCanvas";
import { TextInputForm } from "./TextInputForm";
import { createShapeId, TLLineShapePoint } from "tldraw";

export default function TldrawComponent() {
	const [inputText, setInputText] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputText(e.target.value);
	};

	const handleSubmit = () => {
		const lines = inputText.split("\n");
		const eventPoints = [];

		for (let i = 0; i < lines.length; i += 2) {
			eventPoints.push({
				title: lines[i].trim(),
				description: lines[i + 1]?.trim(),
				x: 150 + (i / 2) * 200,
			});
		}

		window.editor?.createShape({
			id: createShapeId(),
			type: "line",
			x: 0,
			y: 300,
			props: {
				points: eventPoints.reduce((acc, point, index) => {
					acc[`point${index + 1}`] = {
						id: `point${index + 1}`,
						index: `a${index + 1}`,
						x: point.x,
						y: 0,
					};
					return acc;
				}, {} as Record<string, TLLineShapePoint>),
			},
		});

		eventPoints.forEach((event, index) => {
			const yOffset = index % 2 === 0 ? -100 : 30;

			window.editor?.createShape({
				id: createShapeId(),
				type: "line",
				x: event.x,
				y: 300,
				props: {
					points: {
						point1: { id: createShapeId(), index: "a1", x: 0, y: 0 },
						point2: {
							id: createShapeId(),
							index: "a2",
							x: 0,
							y: yOffset < 0 ? -30 : 30,
						},
					},
				},
			});

			window.editor?.createShape({
				id: createShapeId(),
				type: "geo",
				x: event.x - 5,
				y: 295,
				props: {
					geo: "ellipse",
					w: 10,
					h: 10,
				},
			});

			window.editor?.createShape({
				id: createShapeId(),
				typeName: "shape",
				type: "text",
				x: event.x - 50,
				y: 300 + yOffset,
				rotation: 0,
				opacity: 1,
				isLocked: false,
				props: {
					text: `${event.title}\n${event.description}`,
					textAlign: "middle",
					color: "black",
					size: "m",
				},
			});
		});
	};

	return (
		<div style={{ display: "flex", width: "100vw", height: "90vh" }}>
			<TldrawCanvas />
			<TextInputForm
				inputText={inputText}
				handleInputChange={handleInputChange}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
}
