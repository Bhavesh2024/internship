import React from "react";
import ProductCarousel from "./ProductCarousel";
import SearchProductCard from "../../product/SearchProductCard";

const ProductCarouselContainer = () => {
	return (
		<div className="m-10">
			<ProductCarousel category={"smartphones"} label={'Smartphone'} autoPlay={true} autoPlaySpeed={1000} infinite={true} />
			<ProductCarousel category={"smartTvs"} label={'Smart TV'} autoPlay={true} autoPlaySpeed={2000} infinite={true}  />
			<ProductCarousel category={"headphones"} label={'Headphone'} autoPlay={true} autoPlaySpeed={2500} infinite={true}  />
			{/* <SearchProductCard /> */}
		</div>
	);
};

export default ProductCarouselContainer;
