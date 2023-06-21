import React,{useState} from "react";

const BlogContext = React.createContext()//created wrapper for the app component

export const BlogProvider = ({children}) =>{//?children is the element which was wrapped. In this example, it's <App/> from App.js
   //?We passed in value to be used for all components
//    const blogPosts = [
//        {title:'Blog Post #1'},
//        {title:'Blog Post #2'}
//     ]
    const [blogPost,setBlogPost] = useState([])

    const addBlogPost = ()=>{ //?added this function to be used in other component to trigger adding new post to array
        setBlogPost([...blogPost,{title:`Blog Post #${blogPost.length+1}`}])
    }

    //?Now, every component can use this information directly passing from this component
    return( 
        <BlogContext.Provider value={{data:blogPost,addBlogPost}}>
            {children}
        </BlogContext.Provider> 
    )
}
export default BlogContext