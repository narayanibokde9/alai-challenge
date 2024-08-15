import React from "react";

interface TextInputFormProps {
	inputText: string;
	handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	handleSubmit: () => void;
}

export const TextInputForm: React.FC<TextInputFormProps> = ({
	inputText,
	handleInputChange,
	handleSubmit,
}) => {
	return (
		<div
			style={{
				flex: "1",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "20px",
				margin: "20px",
			}}
		>
			<div>
				<textarea
					value={inputText}
					onChange={handleInputChange}
					placeholder="Enter titles and descriptions. Each title should be followed by its description, separated by a new line."
					style={{
						width: "30vw",
						height: "70vh",
						fontSize: "16px",
						padding: "10px",
						border: "2px solid black",
						borderRadius: "8px",
						resize: "none",
					}}
				/>
				<button
					onClick={handleSubmit}
					style={{
						display: "block",
						width: "100%",
						padding: "10px",
						marginTop: "10px",
						border: "none",
						backgroundColor: "#007bff",
						color: "white",
						borderRadius: "4px",
						cursor: "pointer",
					}}
				>
					Generate
				</button>
			</div>
		</div>
	);
};
