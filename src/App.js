import GoodsList from './Container/GoodsList';
import CartList from "./Container/CartList";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function App() {
  return (
    <div className="container mt-2">
        <GoodsList/>
        <CartList/>
    </div>
  );
}

export default App;
