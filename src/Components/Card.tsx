import React from "react";
import properties from "../properties.json";

const Card = () => {
	return (
		<div className="border-off-white">
			<div className="block rounded-lg bg-off-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
				{/* Flex container with grid layout */}
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{/* Map over properties and render each card */}
					{properties.map((item: any, index) => (
						<div
							key={index}
							className="border-2 rounded-xl border-light-blue bg-white flex"
						>
							{/* Image */}
							<div className="h-40 w-1/3 overflow-hidden flex items-center justify-center">
								<img
									className="object-cover h-full rounded-l-xl"
									src={`/medias/${item.Picture}`}
									alt="city"
								/>
							</div>

							{/* Details */}
							<div className="p-4 flex flex-col justify-between flex-grow">
								<h5 className="mb-2 text-xl font-medium leading-tight">
									{item.Name}
								</h5>
								<div className="flex items-center mb-2">
									<h2 className="text-light-blue">{item.City}</h2>
								</div>
								<div className="flex items-center mb-2">
									<svg
										width="17"
										height="17"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.6256 10.4505H13.883C14.2428 10.4505 14.5345 10.1588 14.5345 9.799V3.28428C14.5345 2.92449 14.2428 2.63281 13.883 2.63281L7.36827 2.63281C7.00847 2.63281 6.7168 2.92449 6.7168 3.28428L6.7168 6.54164"
											stroke="#0E215C"
											stroke-width="1.30294"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M3.46007 14.3587L9.97479 14.3587C10.3346 14.3587 10.6263 14.067 10.6263 13.7072L10.6263 7.19249C10.6263 6.83269 10.3346 6.54102 9.97479 6.54102L3.46007 6.54102C3.10027 6.54102 2.80859 6.83269 2.80859 7.19249L2.80859 13.7072C2.80859 14.067 3.10027 14.3587 3.46007 14.3587Z"
											stroke="#0E215C"
											stroke-width="1.30294"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>

									<h2>
										De {item.NbRoomsMin} à {item.NbRoomsMax} pièces
									</h2>
								</div>
								<div className="flex items-center mb-2">
									<svg
										width="16"
										height="17"
										viewBox="0 0 16 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11.7734 14.0716L11.7734 12.1172"
											stroke="#0E215C"
											stroke-width="1.30294"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M3.95637 4.29883H2.00195"
											stroke="#0E215C"
											stroke-width="1.30294"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M3.95508 2.3457V12.1178H13.7272"
											stroke="#0E215C"
											stroke-width="1.30294"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M11.7743 9.5106V4.29883H6.5625"
											stroke="#0E215C"
											stroke-width="1.30294"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>

									<h2>
										<span className="text-light-blue">À partir de </span>
										{item.Price} €
									</h2>
								</div>
								<div className="flex items-center">
									<svg
										width="16"
										height="17"
										viewBox="0 0 16 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.9788 8.07642C10.8113 8.07642 10.6066 8.07642 10.4204 8.09749V3.21679H10.4018C10.4204 3.15341 10.4204 3.06881 10.4204 3.00544C10.4204 1.33635 7.25615 0.892578 5.39477 0.892578C3.53343 0.892725 0.369141 1.33635 0.369141 3.00559C0.369141 3.06896 0.36914 3.15356 0.387707 3.21694L0.369141 3.21679V11.4569C0.369141 13.126 3.53339 13.5698 5.39477 13.5698C5.58096 13.5698 5.76701 13.5698 5.95321 13.5487V14.415C5.95321 16.0841 9.11746 16.5279 10.9788 16.5279C12.8402 16.5279 16.0045 16.0841 16.0045 14.415V10.1893C16.0045 8.52024 12.8402 8.07646 10.9788 8.07646V8.07642ZM14.8504 10.1893C14.5526 10.4851 13.2497 11.0343 10.9788 11.0343C8.708 11.0343 7.40505 10.485 7.10724 10.1893C7.40508 9.89349 8.708 9.34421 10.9788 9.34421C13.2497 9.34421 14.5526 9.89352 14.8504 10.1893ZM14.8877 12.2598C14.7015 12.5346 13.3986 13.1472 10.9789 13.1472C8.55916 13.1472 7.25618 12.5346 7.07005 12.2598V11.6049C8.16821 12.1331 9.82481 12.3021 10.9789 12.3021C12.1329 12.3021 13.7895 12.1331 14.8877 11.6049V12.2598ZM1.48602 8.64693C2.58418 9.17515 4.24077 9.34417 5.39484 9.34417C5.67399 9.34417 5.99054 9.34417 6.30693 9.30187C6.08348 9.55537 5.95324 9.83009 5.95324 10.1682C5.76705 10.1682 5.58101 10.1893 5.39481 10.1893C2.97503 10.1893 1.67212 9.57661 1.48598 9.30186L1.48602 8.64693ZM1.48602 6.53407C2.58418 7.06228 4.24077 7.23131 5.39484 7.23131C6.54884 7.23131 8.20544 7.06227 9.30366 6.53407V7.18902C9.11748 7.46373 7.81455 8.07642 5.39484 8.07642C2.97513 8.07642 1.67215 7.46376 1.48602 7.18902V6.53407ZM1.48602 4.42121C2.58418 4.94942 4.24077 5.11845 5.39484 5.11845C6.54884 5.11845 8.20544 4.9494 9.30366 4.42121V5.07616C9.11748 5.35087 7.81455 5.96356 5.39484 5.96356C2.97513 5.96356 1.67215 5.3509 1.48602 5.07616V4.42121ZM5.39484 2.16037C7.66568 2.16037 8.96862 2.70968 9.26644 3.00544C8.96859 3.30123 7.66568 3.85051 5.39484 3.85051C3.124 3.85051 1.82106 3.3012 1.52324 3.00544C1.82109 2.70979 3.124 2.16037 5.39484 2.16037ZM1.48602 11.4147V10.7598C2.58418 11.288 4.24077 11.457 5.39484 11.457C5.58103 11.457 5.76708 11.457 5.95328 11.4359V12.281C5.76709 12.281 5.58104 12.3021 5.39484 12.3021C2.97506 12.3021 1.67215 11.6894 1.48602 11.4147V11.4147ZM10.9789 15.2601C8.55909 15.2601 7.25618 14.6475 7.07005 14.3727V13.7178C8.16821 14.246 9.82481 14.415 10.9789 14.415C12.1329 14.415 13.7895 14.246 14.8877 13.7178V14.3727C14.7015 14.6473 13.3986 15.2601 10.9789 15.2601Z"
											fill="#3679FF"
										/>
									</svg>
									<h2 className="text-blue">Soit {item.Price / 100} €/mois</h2>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;
