import React from "react";

const BlogContext = React.createContext()//created wrapper for the app component

export const BlogProvider = ({children}) =>{//?children is the element which was wrapped. In this example, it's <App/> from App.js
   //?We passed in value to be used for all components
   const blogPosts = [
       {title:'Blog Post #1'},
       {title:'Blog Post #2'}
    ]
    return( 
   <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider> 
    )
}
export default BlogContext