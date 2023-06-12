import React from 'react';
import ReactDOM from 'react-dom/client';
// Chakra Ui
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';
//React - router - dom
import { RouterProvider } from 'react-router-dom';
import router from './router';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);


