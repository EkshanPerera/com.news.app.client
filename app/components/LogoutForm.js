"use client";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LogoutForm = () => {
    const router = useRouter();
    const logout = () => {
        localStorage.removeItem("accessToken");
        Cookies.remove("loggedin");
        router.push("/login");
    }
    return (
        <Button variant="primary" onClick={logout}> Logout </Button>
    )
} 
export default LogoutForm;