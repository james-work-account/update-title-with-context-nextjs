import { TitleProvider } from "@/hooks/useTitle";
import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <TitleProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TitleProvider>
  );
}
