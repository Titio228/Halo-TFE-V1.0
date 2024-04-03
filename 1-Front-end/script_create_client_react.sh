#!/bin/bash

# Installer Vite
npm init vite@latest client -- --template react
cd client

# Installer les dépendances
npm install
npm install dotenv primereact axios keycloak-js keycloak-react-web tslib web-vitals @stripe/react-stripe-js @stripe/stripe-js @reduxjs/toolkit react-redux react-router-dom 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i -D daisyui@latest

echo "/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
  plugins: [require('daisyui')],
}" > tailwind.config.js

echo "<!doctype html>
<html lang='en'>

<head>
  <meta charset='UTF-8' />
  <link rel='icon' type='image/svg+xml' href='/vite.svg' />
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  <script src='https://kit.fontawesome.com/698545c586.js' crossorigin='anonymous' defer></script>
  <link rel='preconnect' href='https://fonts.googleapis.com'>
  <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>
  <link href='https://fonts.googleapis.com/css2?family=Roboto&display=swap' rel='stylesheet'>
  <title>Halo v.1</title>
</head>

<body>
  <div id='root'></div>
  <script type='module' src='/src/main.jsx'></script>
</body>

</html>" > index.html

cd src
cd assets
rm -f react.svg
mkdir Img Style
cd ..
mkdir Components
cd Components
mkdir App Hooks Functions
cd Hooks
mkdir Keycloak Redux Stripe Carousel
cd Keycloak

echo "import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'Halo',
    clientId: 'react',
});

export default keycloak;" > Keycloak.jsx

echo "import { useKeycloak } from 'keycloak-react-web';

const PrivateRoute = ({ children }) => {
  const { keycloak } = useKeycloak();
  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? children : null;
};

export default PrivateRoute;" > PrivateRoute.jsx

cd ..
cd Redux

echo "import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {

  },
});

export default store;
" > Store.jsx

echo "import { createSlice } from '@reduxjs/toolkit';

const premierSlice = createSlice({
  name: 'name',
  initialState: {
    dataName: {},
  },
  reducers: {
    nameFunction: (state, actions) => {
      state.dataName = { ...state.dataName, ...actions.payload };
    },
  },
});

export const { nameFunction } = premierSlice.actions;

export const nameFunctionReducer = premierSlice.reducer;
" > UseSlice.jsx

cd ..
cd ..
cd App

echo "import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={''} />
      </Routes>
    </div>
  );
}

export default App;
" > App.jsx

echo ".app {
    background-color: #e5e7eb;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    font-family: 'Roboto';
}

@media screen and (min-width: 2048px) and (max-width: 5000px) {
    .app {
        max-width: 2048px;
        margin: auto;
    }
}" > App.css

cd ..
cd ..
rm -f App.css App.jsx

echo "import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './Components/Hooks/Redux/Store';
import { KeycloakProvider } from 'keycloak-react-web';
import keycloak from './Components/Hooks/Keycloak/Keycloak';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store={store}>
        <KeycloakProvider client={keycloak}>
            <PrimeReactProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PrimeReactProvider>
        </KeycloakProvider>
    </Provider>
)" > main.jsx

echo "@tailwind base;
@tailwind components;
@tailwind utilities;" > index.css

# Lancer le projet
npm run dev


