import createDataContext from "./createDataContext"


const blogReducer = (state,action)=>{
    switch(action.type){
        case 'add_blogPost':
            return [...state, {title:`Blog Post #${state.length+1}`}]
        default:
            return state
    }
}

const addBlogPost = (dispatch)=>{// we have to pass dispatch to this function because we'll use dispatch to change state
    return ()=>{
        dispatch({type: 'add_blogPost'})
    }
}

//?We export what createDataContext returns. On right part, we added necessary input that createDataContext expects
//?It'll return Context and Provider. 
export const {Context, Provider} = createDataContext(blogReducer,{addBlogPost},[])