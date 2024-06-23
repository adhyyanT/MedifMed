import React from "react";
import Image from "next/image";

const Rating = ({ rating }: { rating: number }) => {
	const ratingDecimal = (rating * 10) % 10;
	if (ratingDecimal > 0) {
		rating =
			ratingDecimal <= 5
				? (Math.floor(rating) % 10) + 0.5
				: Math.floor(rating) + 1;
	}

	return (
		<div className="flex ">
			{rating > 0 &&
				Array.from(Array(Math.floor(rating))).map((val, index) => (
					<Image
						key={index}
						alt="full-star"
						src={"/star-full.png"}
						width={25}
						height={25}
					/>
				))}
			{rating > 0 && (rating * 10) % 10 > 0 && (
				<Image alt="half-star" src={"/rating.png"} width={25} height={25} />
			)}
			{Array.from(
				Array(5 - Math.floor(rating) - ((rating * 10) % 10 > 0 ? 1 : 0))
			).map((val, index) => {
				return (
					<Image
						key={index}
						alt="no-star"
						src={"/star.png"}
						height={25}
						width={25}
					/>
				);
			})}
		</div>
	);
};

export default Rating;
