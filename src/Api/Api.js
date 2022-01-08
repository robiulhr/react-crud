import axios from "axios";


export const GetUsers = async (url) => {
    return await axios.get(`${url}`);
}
export const AddUsers = async (url, user) => {
    return await axios.post(`${url}`, user)
}

export const GetSingelUser = async (url) => {
    return await axios.get(`${url}`)
}
export const Edituser = async (url, user) => {
    return await axios.put(`${url}`, user)
}
export const Deleteuser = async (url) => {
    return await axios.delete(`${url}`)
}