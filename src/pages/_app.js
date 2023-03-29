import { store } from "@/app/store";
import { Provider as ReduxProvider } from "react-redux";
import { SessionProvider as AuthProvider } from "next-auth/react";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps}>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </AuthProvider>
  );
}
