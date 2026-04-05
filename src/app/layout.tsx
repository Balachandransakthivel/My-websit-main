import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Balachandran S | Portfolio",
  description: "Computer Science student passionate about Full-Stack Development, Backend Systems, and AI-based applications. Building scalable projects and continuously learning modern technologies.",
  keywords: ["Balachandran", "Portfolio", "Full-Stack Developer", "React", "Node.js", "Computer Science"],
  authors: [{ name: "Balachandran S" }],
  openGraph: {
    title: "Balachandran S | Portfolio",
    description: "Computer Science student passionate about Full-Stack Development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="9215f8ab-8b56-4877-aa40-52bc4be73ce3"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
