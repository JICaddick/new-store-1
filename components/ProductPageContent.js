import Image from "next/image";
import ProductForm from "./ProductForm";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import RecommendedList from "./RecommendedList";

function ProductPageContent({ product }) {
  const images = [];

  product.images.edges.map((image, index) => {
    images.push(
      <SwiperSlide key={`slide-${index}`}>
        <Image
          src={image.node.originalSrc}
          alt={image.node.altText}
          layout="fill"
          objectFit="cover"
        />
      </SwiperSlide>
    );
  });

  SwiperCore.use([Navigation, Pagination]);
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-11/12 max-w-6xl mx-auto space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 ">
        <div className="w-full max-w-md overflow-hidden bg-white border shadow-lg rounded-2xl md:w-1/2">
          <div className="relative w-full h-96">
            <Swiper
              style={{
                "--swiper-navigation-color": "#000",
                "--swiper-pagination-color": "#000",
              }}
              navigation
              pagination={{ clickable: true }}
              className="h-96 rounded-2xl"
              loop="true"
            >
              {images}
            </Swiper>
          </div>
        </div>
        <ProductForm product={product} />
      </div>
      <p className="flex flex-col items-center justify-center pt-16 space-y-8 text-gray-500 lg:space-x-8 drop-shadow-2xl">
        {product.description}
      </p>
      <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />
    </div>
  );
}

export default ProductPageContent;
