import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/layout/Navbar/AdminNavbar";
import Sidebar from "../components/layout/Drawer/Sidebar";
import SideBarContext from "../context/SideBarContext";
import { createPortal } from "react-dom";
import Content from "../components/layout/Content/Content";
import Footer from "../components/layout/Footer/Footer";
const AdminPanel = () => {
	return (
		<div className="relative">
			<SideBarContext>
				<div className="flex ">
					{/* {createPortal(<Sidebar />, document.getElementById("root"))} */}
					<Sidebar />
					<div className="flex flex-col w-full">
						<AdminNavbar />
						<Content>
							<div className="flex items-center justify-center w-full box-border h-60vh overflow-y-scroll scrollbar-none">
								<div className="overflow-x-auto w-fit m-auto scrollbar-none">
									<Outlet />
								</div>
							</div>
							<div className="w-full fixed bottom-0 my-0">
								<Footer />
							</div>
						</Content>
					</div>
				</div>
			</SideBarContext>
		</div>
	);
};

export default AdminPanel;
