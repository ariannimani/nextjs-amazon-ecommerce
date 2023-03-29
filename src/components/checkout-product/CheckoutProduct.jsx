import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/slices/cartSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
}) => {
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(removeFromCart(id));
  };

  console.log({ id });
  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };
    dispatch(addToCart(product));
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} alt={title} />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="EUR" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
              alt="Prime"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button mt-auto" onClick={addItemToCart}>
          Add to Cart
        </button>
        <button
          className="button mt-auto"
          onClick={() => removeItemFromCart(id)}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
