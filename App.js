import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import React from "react";
import { Provider } from "./src/context/BlogContext";



const navigator = createStackNavigator(
  {
    Index:IndexScreen
  },
  {
    initialRouteName:'Index',
    defaultNavigationOptions:{
      title: 'Blogs'
  }
})
//!Context vs props: in props, when passing data to multiple child, there'll be too much code.Props need React Navigation Stack Navigator
//!In context, we can pass data to multiple child directly, without needing a connection to these children's parents.
//?We did this to wrap whole app to send blog posts to components directly. 
const App = createAppContainer(navigator)

export default ()=>{
  return (//Wrapped App component with blogProvider to pass data between components directly
    <Provider>
      <App/>
    </Provider>
  )
}