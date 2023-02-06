import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div className="">
      <Head>
        <title>Honey Dripper Jewelry</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
        <meta name="description" content="Modern eCommerce Store for purchasing jewelry, built using Next.js, Shopify, and TailwindCSS."/>
        <meta property="og:title" content="Honey Dripper Jewelry Co" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.myroute.dev" />
        <meta property="og:image" content="https://www.myroute.dev/share.png" />
        <meta property="og:description" content="Modern eCommerce Store for purchasing jewelry, built using Next.js, Shopify, and TailwindCSS. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps, and much much more!" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Honey Dripper Jewelry Co" />
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
