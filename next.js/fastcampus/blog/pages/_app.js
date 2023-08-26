import "styles/globals.css";
import Layout from "src/components/Layout";
import { useRouter } from "next/router";
import ErrorBoundary from "src/components/ErrorBoundary";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout home={router.pathname === "/"}>
      <ErrorBoundary fallbackComponent={<div>sorry,..</div>}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Layout>
  );
}
