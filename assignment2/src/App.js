import "./App.css";
import React, {useState,useEffect} from "react";
import {useForm} from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";  
import sheeps from "./data.json";

const App = () => {
let search = "";
const [cart, setCart] = useState([]);
const [cartTotal, setCartTotal] = useState(0);
const { register, handleSubmit, formState: { errors } } = useForm();
const [dataF,setDataF] = useState({});
const [viewer,setViewer] = useState(0);

const render_products =  sheeps.map((sheep) => (
            <div>
              <div key={sheep.id} className="group relative shadow-lg">
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
                    <a href={sheep.herf}>
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
              <div className="bg-white rounded">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => removeFromCart(sheep)}
              >
                {" "}
                -{" "}
              </button>{" "}
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => addToCart(sheep)}>
                {" "}
                +{" "}
              </button>
            </div>
            <div className="bg-white rounded">
              ${sheep.price} <span class="close">&#10005;</span>
              {howManyofThis(sheep.id)}
            </div>
          </div>
));

        
            
                
   
function howManyofThis(id) {
  let hmot = cart.filter((cartItem) => cartItem.id === id);
  return hmot.length;
}
const addToCart = (el) => {
  setCart([...cart, el]);
};
const removeFromCart = (el) => {
  let hardCopy = [...cart];
  hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
  setCart(hardCopy);
};
const cartItems = cart.map((el) => (
  <div key={el.id}>
    <img class="img-fluid" src={el.image} width={150} />
    {el.title}${el.price}
  </div>
));
useEffect(() => {
  total();
}, [cart]);
const total = () => {
  let totalVal = 0;
  for (let i = 0; i < cart.length; i++) {
    totalVal += cart[i].price;
  }
  setCartTotal(totalVal);
};


  

    function Start(s){
      
        const updateHooks = () => {
          setViewer( 1 );
          setDataF({});
        }
        return(
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
              {}
              <div>
              <p className="text-gray-700 text-white">
                <span style={{ color: "White" }}>Order total:</span>
                <span style={{ color: "White" }}>${cartTotal}</span>
              </p>
              </div>
            </div>
          </div>
          <div className="ml-5 p-10 xl:basis-4/5">
          <div className="category-section fixed">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 category-title">
          Sheep ({sheeps.length})
        </h2>
        <div
          className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10"
          style={{ maxHeight: "800px", overflowY: "scroll" }}
        >
            {render_products}
            </div>
            </div>
            
          </div>
        </div>
        
      );}
      function Cart(){
      
        const updateHooks = () => {
          setViewer( 2 );
          setDataF({});
        }
        return(
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
              {}
              <div>
              <p className="text-gray-700 text-white">
                <span style={{ color: "White" }}>Order total:</span>
                <span style={{ color: "White" }}>${cartTotal}</span>
              </p>
              </div>
            </div>
          </div>
          <div className="ml-5 p-10 xl:basis-4/5">
          <div className="category-section fixed">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 category-title">
          Sheep ({sheeps.length})
        </h2>
        <div
          className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10"
          style={{ maxHeight: "800px", overflowY: "scroll" }}
        >
            {render_products}
            </div>
            </div>
            
          </div>
        </div>
        
      );}

      return(
        <div>
          {viewer === 0 && <Start />}
          {viewer === 1 && <Cart />}
        </div>
      )

    
  }
    

 // end App

export default App;
   