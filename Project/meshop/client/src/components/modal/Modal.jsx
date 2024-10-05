import React from "react";
import { createPortal } from "react-dom";
const Modal = ({ children, open, onClose, style }) => {
	return createPortal(
		open && (
			<div className="modal absolute w-full h-dvh top-0 start-0 bg-slate-900 flex justify-center items-center bg-opacity-55">
				<div className="modal-content relative" style={style}>
					<i
						className="fa-solid fa-xmark text-xl absolute top-0 end-0 me-3 mt-2"
						onClick={() => onClose(false)}
					></i>
					{children}
				</div>
			</div>
		),
		document.body
	);
};

export default Modal;
