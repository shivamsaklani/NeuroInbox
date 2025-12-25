"use client";

import * as React from "react"
import {ThemeProvider as NextTheme} from "next-themes";

export default function ThemeProvider({children,...props}:React.ComponentProps<typeof NextTheme>){

    return <NextTheme {...props}>{children}</NextTheme>
}