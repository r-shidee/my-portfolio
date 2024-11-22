import Image from "next/image";

export default function Home() {
	return (
		<div className=" min-h-screen font-[family-name:var(--font-geist-sans)] flex items-center justify-center">
			<div className="device grid">
				<div className="device__screenborder">
					<div className="screen ">body</div>
				</div>
				<div className="device__controls">controls</div>
			</div>
		</div>
	);
}
