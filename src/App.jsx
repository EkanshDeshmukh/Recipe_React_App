import React from "react";
import Nav from "./components/Nav";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";


const App = () => {
    return (
        <div className="w-[80%] m-auto ">
            <Nav />

            <Routes>
               
                <Route path="/" element={<Layout/>} />
            </Routes>
        </div>
    );
};

export default App;
