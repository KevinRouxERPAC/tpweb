
import { Header } from '../resources_projet/header'
import React, { useState } from 'react';

import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function Home(){

    return (
        <>
        <div>
            <div>Home</div>
            <div><img src="images/logo.jpg"></img></div>
            <div> <a href="/recensement/insert" >Ajouter habitant</a></div>

            <BrowserRouter>
                <Routes>
                    <Route>
                    </Route >

                </Routes>
                </BrowserRouter>

        </div>
        
            
        </>

    );

}
export { Composant }

   
