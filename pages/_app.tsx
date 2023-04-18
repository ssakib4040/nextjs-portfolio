import Layout from "@/components/Layout";
import { SidebarProvider } from "@/contexts/Sidebar-ctx";

import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SidebarProvider>
  );
}
