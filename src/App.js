import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';



function App() {
  return (
    <BrowserRouter >
<Header />
 
  <div>
  
  <Route path="/productdetails/:id" component={ProductDetail}/>
  <Route path="/login" component={Login} />
  <Route path="/signup" component={SignUp} />
  <Route path="/" exact={true} component={Home}/>
  

  </div>
 
  <Footer />
    </BrowserRouter>
  );
}

export default App;
