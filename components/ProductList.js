import ProductCard from "./ProductCard"

const ProductList = ({ products }) => {
    return (
        <div className="bg-white ">
            <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg: px">
                <h2 className="mb-6 text-6xl font-extrabold text-green-700">
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
            </div>
        </div>
    )
}

export default ProductList