import { registerReactControllerComponents } from '@symfony/ux-react';
import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from './resources_projet/home.js';
import {Search} from './resources_projet/search_habitant.js';
import {Formulaire} from './resources_projet/formulaire.js';
import {ShowHabitants} from './resources_projet/liste_habitants.js';

registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));

const root = ReactDOM.createRoot(
    document.getElementById('composant') //as HTMLElement
);


root.render(
    <React.StrictMode>
      <Home/>
      <Formulaire/>
      <Search/>
      <ShowHabitants/>
    </React.StrictMode>
)