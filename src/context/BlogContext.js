import React from "react";

const BlogContext = React.createContext()//created wrapper for the app component

export const BlogProvider = ({children}) =>{//?children is the element which was wrapped. In this example, it's <App/> from App.js
    <BlogContext.Provider>
        {children}
    </BlogContext.Provider>
}