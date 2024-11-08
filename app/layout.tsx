import UserProvider from "./context/user";
import AllOverlays from "@/app/components/AllOverlays";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "e28886-Videofeed",
  description: "NikFeed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <AllOverlays />
          {children}
          <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        </body>
      </UserProvider>
    </html>
  );
}
