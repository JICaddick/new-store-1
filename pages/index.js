import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div className="">
      <Head>
        <title>JoBox Tool Co</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
        <meta name="description" content="Modern eCommerce Store for purchasing tools and equipment, built using Next.js, Shopify, and TailwindCSS."/>
        <meta property="og:title" content="JoBox Tool Co" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.myroute.dev" />
        <meta property="og:image" content="https://www.myroute.dev/share.png" />
        <meta property="og:description" content="Modern eCommerce Store for purchasing tools and equipment, built using Next.js, Shopify, and TailwindCSS. Additonal topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps, and much much more!" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="JoBox Tool Co" />
      </Head>
      <Hero />
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
}
