import React  from "react";
// import {BrowserRouter} from 'react-router-dom'
// import 
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Switch } from "react-router";
import  ReactDOM  from "react";
import Header from "./Header"
import Footer from "./Footer";
import SignInSide from "./Login/SignInSide";
import SignUp from "./SignUp/SignUp";

function App(){


return(
<BrowserRouter>
<Routes>
        <Route path="/" element={<SignInSide />}>
       
        </Route>
        <Route path="/signup" element={<SignUp />}>
       
       </Route>
      </Routes>
</BrowserRouter>

);


}

export default App;

