import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/layout/Navbar/AdminNavbar";
import Sidebar from "../components/layout/Drawer/Sidebar";
import SideBarContext from "../context/SideBarContext";
import { createPortal } from "react-dom";
import Content from "../components/layout/Content/Content";
import Footer from "../components/layout/Footer/Footer";
const Dashboard = () => {
	return (
		<div className="relative">
			<SideBarContext>
				<div className="flex ">
					{/* {createPortal(<Sidebar />, document.getElementById("root"))} */}
					<Sidebar />
					<div className="flex flex-col w-full">
						<AdminNavbar />
						<Content>
							<div className="h-full flex items-center justify-center">
								<Outlet />
							</div>
							<Footer />
						</Content>
					</div>
				</div>
			</SideBarContext>
		</div>
	);
};

export default Dashboard;
