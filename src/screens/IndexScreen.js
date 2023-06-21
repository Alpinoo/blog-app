import React,{useContext} from "react";
import { StyleSheet,View,Text,FlatList } from "react-native";
import BlogContext from "../context/BlogContext";


const IndexScreen =()=>{
    // const value = useContext(BlogContext) //?With this, value = the value in BlogContext
    const blogPosts = useContext(BlogContext)
    return (
        <View>
            <Text>Index screen</Text>
            <FlatList
                data={blogPosts}
                keyExtractor={(post)=>post.title}
                renderItem={({item})=>{
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen