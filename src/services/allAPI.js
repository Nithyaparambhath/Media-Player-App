import { serverURL } from '../services/serverURL'
import { commonAPI } from '../services/commonAPI'
//upload a video
export const uploadVideoAPI = async (reqBody) => {
    // api call - POST http req to http://localhost:4000/videos to add video in json server and return response to add component
    return await commonAPI("POST", `${serverURL}/videos`, reqBody)
}


//view videos
export const getAllVideos = async () => {
    //api call - GET http req from http://localhost:4000/videos to get all videos from json server and return response to view component
    return await commonAPI("GET", `${serverURL}/videos`, "")
}

//get a video from json server
export const getAVideo = async (id) => {
    //api call - GET http req from http://localhost:4000/videos to get all videos from json server and return response to view component
    return await commonAPI("GET", `${serverURL}/videos/${id}`, "")
}

//delete a Video
export const deleteAVideo = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/videos/${id}`, {})
}

//add watchHistory
export const addWatchHistory = async (videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//getWatchHistory
export const getAllWatchHistory = async ()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}

//deleteWatchHistory
export const deleteWatchHistory = async (id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//deleteAllWatchHistory
export const deleteAllWatchHistory = async (id)=>{
    return await commonAPI('PUT',`${serverURL}/history/${id}`,'')
}

//add category
export const addCategoryAPI = async (reqBody) => {
    // api call - POST http req to http://localhost:4000/videos to add video in json server and return response to add component
    return await commonAPI("POST", `${serverURL}/categories`, reqBody)
}

//get all categories
export const getAllCategories = async () => {
    return await commonAPI("GET", `${serverURL}/categories`, "")
}

//delete categories
export const deleteCategoryAPI = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/categories/${id}`, {})
}

//update categories
export const updateCategoryAPI = async (id,body) => {
    return await commonAPI("PUT", `${serverURL}/categories/${id}`, body)
}