import type {Metadata} from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import 'animate.css';
import HeaderPage from "./(components)/header/page";
import { Container } from "@mui/material";
import Footer from '@/src/app/(components)/footer/footer';

const montserrat = Montserrat({
	subsets: ["latin", "cyrillic"],
	display: "swap",
	variable: '--font-montserrat',
});

export const metadata: Metadata = {
	title: "VIC TIVA",
	description: "Speak like american",
};

export default function RootLayout({
   children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru" className={montserrat.variable}>
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
