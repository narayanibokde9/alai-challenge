import TldrawComponent from "./TldrawComponent";

export default function App() {
  return (
		<div style={{ position: "fixed", inset: 0, padding: "10px" }}>
			<h1>Tldraw Canvas:</h1>
			<div >
				<TldrawComponent />
			</div>
		</div>
	);
}
