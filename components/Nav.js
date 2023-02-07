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
    <header className="sticky top-0 z-20 w-full border-b-2 border-green-700 shadow-lg bg-yellow-50">
    <div className="flex items-center justify-between max-w-6xl px-4 pt-4 pb-2 mx-auto lg:max-w-screen-xl">
      <Link href="/" passHref>
        <a className="cursor-pointer">
          <span className="pt-1 text-xl text-green-700">
              Back to the Hive
            </span>
          </a>
        </Link>
        <a className="text-xl text-green-700 cursor-pointer"
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
