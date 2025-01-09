import { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';
import Layout from './Layout';
import Home from './component/Home/Home';
import Men from './component/men/Men';
import NewFeatured from './component/NewFeatured/NewFeatured.jsx';
import SelectNewfeauted from './component/selectImage/SelectNewfeauted';
import Women from './component/Women/Women';
import Kids from './component/Kids/Kids';
import Sales from './component/Sales/Sales';
import SelectedMenImg from './component/selectImage/SelectedMenImg';
import SelectedWomenImg from './component/selectImage/SelectedWomenImg';
import Cart from './component/Reducer/Cart';
import SelectedSales from './component/selectImage/SelectedSales';
import SelectedKids from './component/selectImage/SelectedKids';

function App() {
  useEffect(()=>{
    const handleRouteChange =()=>{
      window.scrollTo(0,0)
    };
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener("popstate",handleRouteChange)
  },[])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element ={<Home/>}/>
        <Route path="newFeatured" element ={<NewFeatured/>}/>
        <Route path= "men" element={<Men />}/>
        <Route path= "women" element={<Women />}/>
        <Route path= "kids" element={<Kids />}/>
        <Route path= "sales" element={<Sales />}/>
        <Route path= "/selectimage/:id/:title" element={<SelectNewfeauted />}/>
        <Route path= "/selectmenImage/:id/:title" element={<SelectedMenImg />}/>
        <Route path= "/selectWomenImage/:id/:title" element={<SelectedWomenImg />}/>
        <Route path= "/selectSalesImage/:id/:title" element={<SelectedSales />}/>
        <Route path= "/selectKidsImage/:id/:title" element={<SelectedKids />}/>
        <Route path= "/cart" element={<Cart />}/>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
