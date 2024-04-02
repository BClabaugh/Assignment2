import "./App.css";
import React, {useState} from "react";

let sheep = require('./data.json');
const render_products = (SheepHerd) => {
  return (
    <div className="category-section fixed">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 category-title">
        Sheep ({SheepHerd.length})
      </h2>
      <div
        className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10"
        style={{ maxHeight: "800px", overflowY: "scroll" }}
      >
        {/* Loop Products */}
        {SheepHerd.map((sheep, index) => {
          return (
            <div key={index} className="group relative shadow-lg">
              <div className=" min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
                <img
                  src={sheep.image}
                  alt={sheep.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="flex justify-between p-3">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={sheep.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>
                        {sheep.name}
                      </span>
                    </a>
                    <p>{sheep.breed}</p>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Weighs {sheep.weight}
                  </p>
                </div>
                <p className="text-sm font-medium text-green-600">
                  ${sheep.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


const App = () => {
    const [SheepHerd] = useState(sheep);
    return (
      <div className="flex fixed flex-row">
        <div
          className="h-screen bg-slate-800 p-3 xl:basis-1/5"
          style={{ minWidth: "65%" }}
        >
          <div className="px-6 py-4">
            <h1 className="text-3xl mb-2 font-bold text-white">
              {" "}
              Sheep Auction{" "}
            </h1>
            <p className="text-gray-700 text-white">
              by -{" "}
              <b style={{ color: "White" }}>
                Blake Clabaugh, Zach Schmitz
              </b>
            </p>
            <div className="py-10">
              
            </div>
          </div>
        </div>
        <div className="ml-5 p-10 xl:basis-4/5">
          {console.log(
            "Before render :",
            sheep.length,
            SheepHerd.length
          )}
          {render_products(SheepHerd)}
        </div>
      </div>
    );
}; 
 // end App

export default App;
   