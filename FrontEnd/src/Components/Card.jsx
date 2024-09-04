import React from "react";

function Card({ title, category, imageUrl, name, price }) {
  return (
    <>
      <div className="mt-4 mb-3 p-3 ">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={imageUrl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">{category}</div>
            </h2>
            <p>{title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 text-black duration-300 dark:text-white">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
