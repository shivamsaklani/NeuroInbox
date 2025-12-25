"use client"
import { Provider } from "react-redux";
import store from "./utils/store";
import ThemeProvider from "./themeProvider";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider  
    attribute="class"
    defaultTheme="system"
    enableSystem
     disableTransitionOnChange
           >
    <Provider store={store}>
      {children}
    </Provider>
    </ThemeProvider>
  );
};

export default ReduxProvider;
