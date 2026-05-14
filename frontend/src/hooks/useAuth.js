import { useContext } from "react";
import { AuthContext } from "../context";
import { register, login, logout } from "../services";


export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context

    const handleRegisterApi = async ({ email, username, password }) => {
        setLoading(true);
        try {
            const res = await register({ email, username, password });
            setUser(res.user);
        } catch (err) {
            console.log("ERROR :: ", err)
        } finally {
            setLoading(false);
        }
    }

    const handleLoginApi = async ({ email, password }) => {
        setLoading(true);
        try {            
            const res = await login({ email, password });
            setUser(res.user);
        } catch (err) {
            console.log("ERROR :: ", err);
        } finally {
            setLoading(false);
        }
    }

    const handleLogoutApi = async () => {
        setLoading(true);
        try {
            const res = await logout();
            setUser(null);
        } catch (err) {
            console.log("ERROR :: ", err);
        } finally {
            setLoading(false);
        }
    }

    return { user, loading, handleRegisterApi, handleLoginApi, handleLogoutApi };
}