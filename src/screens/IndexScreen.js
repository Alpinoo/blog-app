import React,{useContext} from "react";
import { StyleSheet,View,Text,FlatList,Button } from "react-native";
import {Context} from "../context/BlogContext";


const IndexScreen =()=>{
    const {state,addBlogPost} = useContext(Context)
    return (
        <View>
            <Text>Index screen</Text>
            <Button title="Add Blog" onPress={addBlogPost}/>
            <FlatList
                data={state}
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