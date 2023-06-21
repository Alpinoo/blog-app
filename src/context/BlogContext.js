import React from "react";

const BlogContext = React.createContext()//created wrapper for the app component

export const BlogProvider = ({children}) =>{//?children is the element which was wrapped. In this example, it's <App/> from App.js
   //?We passed in value to be used for all components
    return( 
   <BlogContext.Provider value={'Hello there'}>
        {children}
    </BlogContext.Provider> 
    )
}
export default BlogContext