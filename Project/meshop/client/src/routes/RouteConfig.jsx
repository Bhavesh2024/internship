import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/main/Home";
import Login from "../components/form/Login";
import SignUp from "../components/form/SignUp";
import Cart from "../components/product/Cart";
import Account from "../components/form/Account";
import Product from "../components/product/Product";
import Dashboard from "../admin/Dashboard";
import AdminPanel from "../admin/AdminPanel";
import CustomerHome from "../hocs/CustomerHome";
import ProductCarouselContainer from "../components/layout/Slider/ProductCarouselContainer";
import ProductDataTable from "../components/table/ProductDataTable";
import UserDataTable from "../components/table/UserDataTable";
import NotFound from "./NotFound";
import Test from "../components/form/Test";
import AdminLogin from "../admin/AdminLogin";
import ProductTableContextProvider from "../context/ProductTableContext";
// import PaginationContextProvider, { PaginationContext } from "../context/PaginationContext";
const CustomHome = CustomerHome(Home);
const RouteConfig = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/test" element={<Test />} />
				<Route path="/auth/signup" element={<SignUp />} />
				<Route path="/auth/login" element={<Login />} />
				<Route path="/user" element={<CustomHome />}>
					<Route
						path=":username"
						element={<ProductCarouselContainer />}
					/>
					<Route path=":username/account" element={<Account />} />

					<Route path=":username/cart" element={<Cart />} />
				</Route>
				<Route path="/product/:id" element={<Product />} />
				<Route path="/user/admin" element={<AdminPanel />}>
					<Route path="" element={<Dashboard />} />
					{/* <Route path="account" element={<Account />} /> */}
					<Route path="products" element={<ProductTableContextProvider><ProductDataTable /></ProductTableContextProvider>} />
					<Route path="users" element={<UserDataTable />} />
				</Route>
				<Route path="/user/admin/login" element={<AdminLogin/>} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouteConfig;
