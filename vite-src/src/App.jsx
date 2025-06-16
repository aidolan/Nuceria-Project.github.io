import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Home from "./pages/Home";
import Factions from "./pages/Factions";
import Header from "./Header";

const baseUrl = "Nuceria-Project.github.io/app";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= {baseUrl + "/"} element={<Header />}>
      <Route index element={<Home />} />
      <Route path={baseUrl +"/factions"} element={<Factions />} />
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;