/** @format */

import type React from "react";
import { ThemeProvider } from "../components/theme-provider";
import { ColorThemeProvider } from "../components/color-theme-provider";
import { Poppins, Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./index.css";

const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-inter",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-space",
});

export const metadata: Metadata = {
	title: "Ojukwu Levi Chinedu | Web3 Developer",
	description:
		"Professional portfolio of Ojukwu Levi Chinedu, a Web3 Full-Stack Developer and Technical Writer specializing in blockchain technology.",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			data-theme="dark"
			>
			<body
				className={`${poppins.variable} ${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
				<ThemeProvider>
					<ColorThemeProvider>{children}</ColorThemeProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
