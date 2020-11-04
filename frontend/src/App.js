import React from "react";
import Product from "./components/Product";
import data from './data';

function App() {
    return ( <
        div className = "grid-container" >
        <
        header className = "row" >
        <
        div className = "brand" >
        <
        a href = "/" > torZini Mart < /a>   < /
        div > <
        div className = "header-links" >
        <
        a href = "/cart" > Cart < /a>   <
        a href = "/signin" > Sign In < /a>   < /
        div >

        <
        /header>

        <
        main className = "main" >
        <
        div className = "row center" >

        {
            data.products.map((product) => ( <
                Product key = { product._id }
                product = { product } > < /Product>
            ))
        } <
        /div>  < /
        main > <
        footer className = "row center" >
        Copyright & copy; torZini 2020. All Rights Reserved <
        /footer>  < /
        div >
    );
}

export default App;