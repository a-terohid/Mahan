import { FONTS } from "@/utils/font";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "@/layout/Layout"
import NextAuthProvider from '@/providers/NextAuthProvider'


export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={ FONTS }>
      <body>
        <NextAuthProvider>
            <Layout>
              {children}
            </Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
