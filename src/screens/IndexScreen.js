import React,{useContext} from "react";
import { StyleSheet,View,Text,FlatList,Button } from "react-native";
import BlogContext from "../context/BlogContext";


const IndexScreen =()=>{
    const {data,addBlogPost} = useContext(BlogContext)
    return (
        <View>
            <Text>Index screen</Text>
            <Button title="Add Blog" onPress={addBlogPost}/>
            <FlatList
                data={data}
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