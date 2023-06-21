import React,{useContext} from "react";
import { StyleSheet,View,Text } from "react-native";
import BlogContext from "../context/BlogContext";


const IndexScreen =()=>{
    const value = useContext(BlogContext) //?With this, value = the value in BlogContext
    return (
        <View>
            <Text>Index screen</Text>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen