//?Written with small c because we only export function.
import React,{useReducer} from "react";


//? we created this function to reduce the amount of code we write. We'll use this function to create context and provider
//? for creating different contexts, we'll use this function multiple times so that we don't have to write same code again and again
export default (reducer,actions,initialState)=>{//these are the arguments that createDataContext expects from blogContext.js
    const Context = React.createContext()//creating context

    
    const Provider = ({children})=>{ //provider is a component that wraps all other components
        const [state, dispatch] = useReducer(reducer,initialState)

        //?actions === {addBlogPost: (dispatch)=>{return ()=>{}}}
        //?we're iterating over actions object and for each key, we're calling the function with dispatch as argument and returning a function
        const allActions = {}
        for (let key in actions){
            //key = addBlogPost
            allActions[key] = actions[key](dispatch)
        }


        return(
            <Context.Provider value={{state,...allActions}}>
                {children}
            </Context.Provider>
        )

    }
    return {Context,Provider}
    

}