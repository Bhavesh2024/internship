import React, { act, useContext, useRef, useState } from "react";
import { ToggleSidebarContext } from "../../../context/SideBarContext";
import UserActivityDropDown from "../../dropdown/UserActivityDropDown";

const AdminNavbar = () => {
	const { toggleSidebar, setToggleSidebar } =
		useContext(ToggleSidebarContext);

	const [toggleDropDown, setToggleDropDown] = useState(false);
	const dropDownRef = useRef(0);
	const activities = [
		{
			item: "Dashboard",
			link: "/user/admin",
		},
		{
			item: "Logout",
			link: "/",
		},
	];
	return (
		<>
			<nav className="bg-slate-600 text-gray-200 h-20 flex justify-between px-5 items-center w-full">
				<div className="flex items-center gap-4 text-xl">
					<i
						className="fa-solid fa-bars inline-block"
						onClick={() => setToggleSidebar(!toggleSidebar)}
					></i>
					<i className="fa-solid fa-house"></i>
				</div>
				<div className="flex gap-4 text-xl items-center">
					<i className="fa-solid fa-gear"></i>
					<i className="fa-solid fa-bell"></i>
					<i
						className="fa-solid fa-user-circle text-2xl relative"
						onClick={() => setToggleDropDown(!toggleDropDown)}
						id="admin"
					>
						<UserActivityDropDown
							activityList={activities}
							classes={
								"absolute top-0 bottom-0 end-0 bg-gray-500 h-fit"
							}
							open={toggleDropDown}
							parentId={"admin"}
						/>
					</i>
				</div>
			</nav>
		</>
	);
};

export default AdminNavbar;
