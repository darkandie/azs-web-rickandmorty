import './App.css';
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./pages/router";
import { StateContext } from './context/StateContext';
import { Toaster } from 'react-hot-toast';

import client from "./service/index";

function App() {
  return (
    <StateContext>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Toaster />
          <AppRoutes />
        </ApolloProvider>
      </BrowserRouter>  
    </StateContext>
  );
}

export default App;
