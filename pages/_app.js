// 모든 Page를 품을 수 있는 구조. (Next.js 자체에서 제공)

import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
