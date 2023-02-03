import Link from "next/link"
import Image from "next/image"
import { formatter } from "../utils/helpers"

const ProductCard = ({ product }) => {
  const { handle, title } = product.node
  
  const { altText, originalSrc } = product.node.images.edges[0].node
  
  const price = product.node.priceRange.minVariantPrice.amount

  return (
    <Link
      href={`/products/${handle}`}
        >
          <a className="font-serif group hover:opacity-60">
            <div className="w-full overflow-hidden bg-gray-200 shadow-md shadow-yellow-500 rounded-2xl ">
              <div className="relative h-72">
                <Image
                  src={originalSrc}
                  alt={altText}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div> 
          <h3 className="mt-4 font-medium text-green-700">{title}</h3>
        <p className="mt-1 text-sm text-amber-500">{formatter.format(price)} </p>
      </a>
    </Link>
  )
}

export default ProductCard