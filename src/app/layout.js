"use client"

// app/layout.js

import { Provider } from 'react-redux';
import store from './redux/store';
// import store from '../redux/store';
 // Adjust the path based on your folder structure



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
