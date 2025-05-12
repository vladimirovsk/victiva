import type {Metadata} from "next";
// import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import HeaderPage from "./(components)/header/page";
import { Container } from "@mui/material";
import Footer from '@/src/app/(components)/footer/footer';

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

export const metadata: Metadata = {
	title: "VICT TIVA",
	description: "Speak like american",
};

export default function RootLayout({
   children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
		<html lang="ru">
		<body>
			<HeaderPage/>
			<Container component="main" className={'mainContainer'} maxWidth={false}>
				{children}
			</Container>
			< Footer />
		</body>
		</html>
	);
}
