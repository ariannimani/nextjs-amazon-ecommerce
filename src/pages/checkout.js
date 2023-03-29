import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { selectItems, selectTotal } from "@/slices/cartSlice";
import { Header, CheckoutProduct } from "@/components";
import { useSession } from "next-auth/react";

const Checkout = () => {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
            alt=""
            width={1020}
            height={250}
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Cart is empty." : "Shopping Cart"}
            </h1>

            {items.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2>
                Subtotal ({items.length} items):
                <span className="font-bold">
                  <Currency quantity={total} currency="EUR" />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
                onClick={() => {}}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
