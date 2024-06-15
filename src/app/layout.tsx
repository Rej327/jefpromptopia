import "../styles/globals.css";

export const metadata = {
	title: "Jefpromptopia",
	desciption: "Discover & Share AI Prompts",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="main">
				<nav></nav>
				<main className="app">{children}</main>
				<footer></footer>
			</body>
		</html>
	);
}
