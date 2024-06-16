import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Contents from "@/components/contents";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "JJapterpark",
    description: "JJapterpark-demo",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <Contents>{children}</Contents>
            </body>
        </html>
    );
}
