import { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const Auth = () => {
    const [isUserSignedUp, setIsUserSignedUp] = useState<boolean>(true);

    const toggleAuthForm = () => setIsUserSignedUp(!isUserSignedUp);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(to right, #FFDEE9, #B5FFFC)", width: "100vw" }}>
            <div className="border-0 rounded-4 p-4" style={{ maxWidth: "450px", width: "100%" }}>
                {isUserSignedUp ? <LogIn /> : <SignUp />}
                <p className="text-center mt-4">
                    {isUserSignedUp
                        ? "Don't have an account?"
                        : "Already have an account?"}{" "}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleAuthForm();
                        }}
                        className="text-decoration-none fw-bold"
                        style={{ color: isUserSignedUp ? "#ff5722" : "#03a9f4" }}
                    >
                        {isUserSignedUp ? "Sign up" : "Log in"}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Auth;
