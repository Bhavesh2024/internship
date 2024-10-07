import React from "react";

const SearchProductCard = () => {
	return (
		<>
			<div className="container flex justify-between">
				<div className="flex w-10/12 gap-7">
					<div className="w-1/6">
						{" "}
						<img
							src="../../../images/50.jpg"
							alt=""
							className="h-full"
						/>
					</div>
					<div>
						<div className="font-semibold text-xl my-2">
							MOTOROLA Edge 50
						</div>
						{/* <div className="bg-green-500 inline px-3 py-1 rounded-full text-sm text-gray-100 font-bold">
							4.3 <i className="fa-solid fa-star text-xs"></i>
						</div> */}
						<div>
							<ul className="text-sm list-disc ms-5 flex flex-col gap-2">
								<li>8 GB RAM | 256 GB ROM</li>
								<li>16.94 cm (6.67 inch) Display</li>
								<li>50MP + 13MP + 10MP | 32MP Front Camera</li>
								<li>5000 mAh Battery</li>
								<li>
									Snapdragon 7 Gen 1 Accelerated Edition
									Processor
								</li>
								<li>
									Handset, USB Type-C Cable, Guides, Sim Tool,
									TurboPower 68W Charger, Protective Case
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="items-center flex flex-col gap-1">
					<div className="text-2xl font-semibold">$26,999</div>
					<div className="flex gap-2 items-center">
						<span className="line-through text-slate-500">
							$32,999
						</span>
						<span className="text-sm">18% off</span>
					</div>
					<button className="bg-zinc-300 p-2 px-5 rounded-lg font-semibold">
						View Detail
					</button>
					<button className="p-2 bg-slate-800 text-gray-100 px-5 rounded-lg font-semibold my-1">
						Add to Cart
					</button>
				</div>
			</div>
		</>
	);
};

export default SearchProductCard;
