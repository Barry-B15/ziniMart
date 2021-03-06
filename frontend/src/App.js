import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";


function App() {
    return ( 
    <BrowserRouter>
        <div className = "grid-container">
            <header className = "row">
                <div >
                    <a className = "brand" href = "/" > torZini Mart </a>    
                </div > 
                <div className = "header-links">
                    <a href = "/cart" > Cart </a>   
                    <a href = "/signin" > Sign In </a>    
                </div >
            </header>

            <main className = "main">
                <Route path = "/product/:id" component = { ProductScreen } ></Route>  
                <Route path = "/" component = { HomeScreen } exact ></Route>  
                {/* there should be no space btw <Route></Route> or it will not work */}
            </main >  
            <footer className = "row center">
                    Copyright & copy; torZini 2020. All Rights Reserved 
            </footer>     
        </div >
        </BrowserRouter>
    );
}

export default App;