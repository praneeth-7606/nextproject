"use client"; // Indicates that this component should be rendered on the client side

import React from "react"; // Import React for JSX
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./redux/store"; // Adjust the path based on your file structure

// Define the ReduxProvider functional component
export default function ReduxProvider({ children }) {
    return (
        <Provider store={store}> {/* Wrap children with the Redux Provider */}
            {children}
        </Provider>
    );
}
