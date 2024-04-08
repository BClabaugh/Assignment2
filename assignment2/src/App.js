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

const [searchTerm, setSearchTerm] = useState('');

const handleChange = (event) => {
  setSearchTerm(event.target.value);
};

const filteredSheeps = sheeps.filter((sheep) =>
    sheep.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

const render_products = filteredSheeps.map((sheep) => (
<div>
  <div class="bg-gray-200 rounded-lg p-2" key={sheep.id}>
    <div>
      <img
        src={sheep.image}
        alt={sheep.name}
        />
    </div>

    <div>
      <h3>
        <a href={sheep.herf}>
          <span>{sheep.name}</span>
        </a>

        <p>{sheep.breed}</p>
      </h3>

      <p>
        Weighs {sheep.weight}
      </p>

      <p>
        ${sheep.price}
      </p>

     

      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => removeFromCart(sheep)}> - </button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => addToCart(sheep)}> + </button>

      <p>
      ${sheep.price} <span class="close">&#10005;</span>
      {howManyofThis(sheep.id)}
      </p>

    </div>
  </div>
</div>
));

const render_cart =  sheeps.filter(sheep => howManyofThis(sheep.id) > 0).map((sheep) => (
  <div>
     <div class="bg-gray-200 rounded-lg p-2" key={sheep.id}>
    <div>
      <img
        src={sheep.image}
        alt={sheep.name}
        />
    </div>

    <div>
      <h3>
        <a href={sheep.herf}>
          <span>{sheep.name}</span>
        </a>

        <p>{sheep.breed}</p>
      </h3>

      <p>
        Weighs {sheep.weight}
      </p>

      <p>
        ${sheep.price}
      </p>

      <p>
      ${sheep.price} <span class="close">&#10005;</span>
      {howManyofThis(sheep.id)}
      </p>

    </div>
  
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
  const index = cart.findIndex((cartItem) => cartItem.id === el.id);
  if (index !== -1) {
    const hardCopy = [...cart];
    hardCopy.splice(index, 1);
    setCart(hardCopy);
  }
};



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



  

    function Start(){
      
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
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={toCart}>Checkout</button>
              </div>
            </div>
          </div>
          <div className="ml-5 p-10 xl:basis-4/5">
          <div className="category-section fixed">
        <div>
        <div className="p-4 border border-gray-300 rounded">
            <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
      

    </div>
        </div>
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

        const onSubmit = data => {
          console.log( data ); // log all data
          console.log( data.fullName ); // log only fullname
          // update hooks
          setDataF( data );
          setViewer(2);
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
                Cart / Trailer{" "}
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
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={toBrowse}> Return to Browse</button>
              <div>
          <form onSubmit={handleSubmit(onSubmit) } className="container mt-5">
            <div className="form-group">
            <input {...register("fullName", { required: true })} placeholder="Full Name" className="form-control"/>
            {errors.fullName && <p className="text-danger">Full Name is required.</p>}
            </div>

            <div className="form-group">
            <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" className="form-control"/>
            {errors.email && <p className="text-danger">Email is required.</p>}
            </div>
            <div className="form-group">
            <input 
                {...register("creditCard", { 
                    required: true,
                    pattern: /^\d{16}$/ 
                })} 
                type="tel"  
                inputMode="numeric"  
                placeholder="Credit Card" 
                className="form-control"
                maxLength={16}
                minLength={16}
                  
            />
            {errors.creditCard && <p className="text-danger">Credit Card is required and must be 16 digits.</p>}
            </div>
            <div className="form-group">
            <input {...register("address", { required: true })} placeholder="Address" className="form-control"/>
            {errors.address && <p className="text-danger">Address is required.</p>}
            </div>
            <div className="form-group">
            <input {...register("city", { required: true })} placeholder="City" className="form-control"/>
            {errors.city && <p className="text-danger">City is required.</p>}
            </div>
            <div className="form-group">
            <input {...register("state", { required: true })} placeholder="State" className="form-control"/>
            {errors.state && <p className="text-danger">State is required.</p>}
            </div>
            <div className="form-group">
            <input {...register("zip", { required: true, pattern: /^\d{5}$/ })} placeholder="Zip" 
              maxLength={5}
              minLength={5}
              className="form-control"/>
            {errors.zip && <p className="text-danger">Zip is required.</p>}
            </div>

            <button type="submit" className="btn btn-primary">Order</button>

            </form> 
        </div>
              </div>
            </div>
          </div>
          <div className="ml-5 p-10 xl:basis-4/5">
          <div className="category-section fixed">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 category-title">
          Cart ({sheeps.filter(sheep => howManyofThis(sheep.id) > 0).length})
        </h2>
        <div
          className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10"
          style={{ maxHeight: "800px", overflowY: "scroll" }}
        >
            {render_cart}
            </div>
            </div>
       
            
          </div>

         
        </div>

        
      );}



      function Checkout(){

        

        return(
          
        <div className="flex fixed flex-row">
          
          <div
            className="h-screen bg-slate-800 p-3 xl:basis-1/5"
            style={{ minWidth: "65%" }}
          >
            <div className="px-6 py-4">
              <h1 className="text-3xl mb-2 font-bold text-white">
                {" "}
                Checkout{" "}
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
               
              </p>
              <button onClick={newBrowser} className="btn btn-secondary">New Order</button>
              </div>
            </div>
          </div>
          <div className="ml-5 p-10 xl:basis-4/5">
          <div className="category-section fixed">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 category-title">
          Sheep ({sheeps.length})
        </h2>
        <div
         
          style={{ maxHeight: "800px", overflowY: "scroll" }}
        >
          <h1>Payment summary:</h1>
            
            <h3>{"Name: " + dataF.fullName}</h3>
            <p>{"Email: " + dataF.email}</p>
            <p>{"Credit Card ending in " + dataF.creditCard.substring(12)}</p>
            <p>{"Address: " + dataF.address} {dataF.city}, {dataF.state} {dataF.zip} </p>
            <span style={{ color: "Black" }}>Order total:</span>
                <span style={{ color: "Green" }}>${cartTotal}</span>
            <h1>Items Purchased</h1>
             

            
         

            </div>
            <div className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10">
            {render_cart}
            </div>
            </div>
            
          </div>
        </div>
        
      );}

    


      const newBrowser = () => {
        window.location.reload();
      }

      const toBrowse = () => {
        setViewer(0);
      }

      const toCart = () => {
        setViewer(1);
      }

      const toConfirmation = () => {
        setViewer(2);
      }


      return(
        <div>
          {viewer === 0 && <Start />}
          {viewer === 1 && <Cart />}
          {viewer === 2 && <Checkout />}
        </div>
      )

    
  }
    

 // end App

export default App;
   