import React from "react";
import ProductCarouselContainer from "../layout/Slider/ProductCarouselContainer";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
const Home = ({ withCarousel }) => {
	return (
		<div>
			<Navbar />
			{!withCarousel && <ProductCarouselContainer />}
			<Footer />
		</div>
	);
};

export default Home;
