import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { fetchMetaData } from "@/util/fetchMetaData";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const { getMetaDataHome } = fetchMetaData();
  const metaData = await getMetaDataHome();

  return {
    title: "Ketyla e Milton",
    description: "Casamento Ketyla e Milton",
    openGraph: {
      description: metaData?.description || "",
      title: metaData?.title || "",
      images: [metaData?.image || ""],
    },
  };
}

export const revalidate = 60;
