import { useState, useContext, useEffect } from "react";
import { formatter } from "../utils/helpers";
import ProductOptions from "./ProductOptions";
import { CartContext } from "../context/shopContext";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url, id) => (
  axios.get(url, {
    params: {
      id: id
    }
  }).then(res => res.data)
)

function ProductForm({ product }) {
  const { data: productInventory } = useSWR(
    ['/api/available', product.handle],
    (url, id) => fetcher(url, id),
    { errorRetryCount: 3 }
  )

  const [available, setAvailable] = useState(true)

  const { addToCart } = useContext(CartContext);

  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  useEffect(() => {
    if (productInventory) {
      const checkAvailable = productInventory?.variants.edges.filter(item => item.node.id === selectedVariant.id)

      if (checkAvailable[0].node.availableForSale) {
        setAvailable(true)
      } else {
        setAvailable(false)
      }
    }
  }, [productInventory, selectedVariant])

  return (
    <div className="flex flex-col w-full p-4 rounded-lg shadow-lg md:w-1/3 shadow-yellow-500 shadow-2">
      <h2 className="pb-2 text-4xl text-green-700 rounded-full drop-shadow-2xl shadow-green-700">{product.title}</h2>
      <span className="text-amber-700 pd-3">
        {formatter.format(selectedVariant.variantPrice)}
      </span>
      {product.options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      ))}
      {available ?
            <button
            onClick={() => {
                addToCart(selectedVariant)
            }}
      className="px-2 py-3 mt-3 bg-yellow-400 text-amber-700 rounded-xl hover:opacity-60"
  >
Add to cart, you deserve it!
</button> : 
<button
className="px-2 py-3 mt-3 text-white rounded-lg cursor-not-allowed bg-amber-700">
Sold out!
</button>
      }
    </div>
  );
}

export default ProductForm;
