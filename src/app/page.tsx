import Link from "next/link";

export default function Home() {
	return (
		<div className="screen font-mono">
			<ul>
				<li>
					<Link href={"/profile"}>profile</Link>
				</li>
				<li>side projects</li>
				<li>socials</li>
			</ul>
		</div>
	);
}
