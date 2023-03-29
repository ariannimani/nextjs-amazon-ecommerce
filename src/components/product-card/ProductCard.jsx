import Image from "next/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;

const ProductCard = ({ id, title, price, description, category, image }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.05);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image
        src={image}
        height={200}
        width={200}
        alt={title}
        style={{ objectFit: "contain" }}
      />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <StarIcon key={index} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs mt-2 my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="EUR" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
            alt="Prime"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
