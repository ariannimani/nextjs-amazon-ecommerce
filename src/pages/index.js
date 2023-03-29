import { Banner, Header, ProductFeed } from "@/components";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon E-Commerce</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return { props: { products } };
};
