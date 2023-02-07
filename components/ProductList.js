import ProductCard from "./ProductCard"

const ProductList = ({ products }) => {
    return (
            <div className="max-w-2xl px-4 pb-16 mx-auto sm:py-8 sm:px-6 lg:max-w-7xl ">
                <h2 className="mb-6 text-3xl text-green-700">
                    Products
                </h2>
                <div className="grid grid-cols-1 gap-y-14 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 l:gap-x-16 xl:grid-col-4 xl:gap-x-10">
                    {
                        products?.map(product => (
                            <ProductCard key={product.node.id} product={product} />
                        )
                        )
                    }
                </div>
            </div>    )
}

export default ProductList