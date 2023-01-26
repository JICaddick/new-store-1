import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";

function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;

  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <header className="sticky top-0 z-20 bg-white border-b">
    <div className="flex items-center justify-between max-w-6xl px-4 pt-4 pb-2 mx-auto lg:max-w-screen-xl">
      <Link href="/" passHref>
        <a className="cursor-pointer">
          <span className="pt-1 text-lg font-bold">
              Shopify + Next.js 
            </span>
          </a>
        </Link>
        <a className="font-bold cursor-pointer text-md"
          onClick={() => setCartOpen(!cartOpen)}
        >
          Cart ({cartQuantity})
        </a>
        <MiniCart cart={cart} />
      </div>
    </header>
  );
}

export default Nav;
