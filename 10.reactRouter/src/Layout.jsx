import React from "react";

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from "react-router-dom";
// wehave to impot outlet because we can change any component dynamically with the 
// help of routers( outlet) .if we give components before and after outlet 
// these will remai same only the components that we will deal with help of Outlet will be changed

function Layout(){
    return(
<>
    <Header />
    < Outlet />
    < Footer />
{/* Now the header and Footer will remain same on each page and only thr value of Outlet will be changed. */}
</>


    )
}

export default Layout