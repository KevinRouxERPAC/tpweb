import React, { useState } from 'react';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Formulaire} from './formulaire'
 
function Home(){

    return (
        <div>
            <div>
               <h1>Recensement des habitants</h1> 
            </div>
            <div>
                <img scr="images/logo.jpeg"></img>
            </div>
        </div>
    );

}
export { Home }

   
