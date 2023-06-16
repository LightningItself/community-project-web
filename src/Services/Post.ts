import { makeRequest } from "./makeRequest"

export const getAllPosts = async()=>{
    return makeRequest("/posts",{method: "GET"});
}

export const getPost = async(id:string)=>{
    return makeRequest(`/posts/${id}`,{method: "GET"});
}

export const createPost = async(data:any)=>{
    return makeRequest(`/posts`,{method: "POST",data});
}