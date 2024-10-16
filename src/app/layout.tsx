import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const departureMono = localFont({
  src: "./fonts/DepartureMono.woff2",
  variable: "--font-departure-mono",
});

export const metadata: Metadata = {
  title: "Trunk Log",
  description: "A place to log your progress one ring at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪵</text></svg>"
        />
      </head>
      <body className={`${departureMono.variable} font-departure-mono antialiased h-screen`}>
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
