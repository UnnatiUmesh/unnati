import { ThemeProvider } from "next-themes";
import "./globals.css";

import React, { PropsWithChildren } from 'react'

const RootLayout = (props:PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
        {props.children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout;