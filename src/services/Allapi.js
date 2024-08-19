import { serverURL } from "./serverURL";
import { commonApi } from "./commonApi";

//upload video

export const uploadVideo = async (reqBody) => {
    return await commonApi('POST', `${serverURL}/videos`, reqBody)
}

//get all videos

export const getAllvideos = async () => {
    return await commonApi('GET', `${serverURL}/videos`, '')
}

// delete video
export const deleteVideo = async (id) => {
    console.log('all api ', id);

    return await commonApi('DELETE', `${serverURL}/videos/${id}`, {})
}
// Add to watch history

export const addToHistory = async (reqBody) => {
    return await commonApi('POST', `${serverURL}/history`, reqBody)
}

//get all history

export const getHistory = async () => {
    return await commonApi('GET', `${serverURL}/history`, {})

}

//delete watch history
export const deleteWatchhistory = async (id) => {
    return await commonApi('DELETE', `${serverURL}/history/${id}`, {})
}

//add category

export const addCategory = async (reqBody) => {
    return await commonApi('POST', `${serverURL}/category`, reqBody)
}

//get all category

export const getAllCategory = async () => {
    return await commonApi('GET', `${serverURL}/category`, "")
}

//delete category
export const deleteCategory = async (id) => {
    return await commonApi('DELETE', `${serverURL}/category/${id}`, {})
}


// getAllVideosByID
export const getAllVideosByID = async (id) => {
    return await commonApi('GET', `${serverURL}/videos/${id}`, '')
}


//update category with video details

export const updateCategory = async (data, id) => {
    return await commonApi('PUT', `${serverURL}/category/${id}`, data)
}

