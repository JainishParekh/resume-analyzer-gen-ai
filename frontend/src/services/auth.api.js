import { API } from "./api";

export const register = async ({ email, username, password }) => {
    try {
        const response = await API.post("/auth/register", { email, username, password });

        return response.data;
    } catch (err) {
        console.log(err)
    }
}
export const login = async ({ email, password }) => {
    try {
        const response = await API.post("/auth/login", { email, password });

        return response.data;
    } catch (err) {
        console.log(err)
    }
}
export const logout = async () => {
    try {
        const response = await API.get("/auth/logout");

        return response.data;
    } catch (err) {
        console.log(err)
    }
}
export const userProfile = async () => {
    try {
        const response = await API.post("/auth/profile");

        return response.data;
    } catch (err) {
        console.log(err)
    }
}