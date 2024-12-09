import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase-config";

const Footer = () => {
    const [userName, setUserName] = useState("YourName");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserName = async () => {
            if (auth.currentUser) {
                try {
                    const userDocRef = doc(db, "users", auth.currentUser.uid);
                    const docSnap = await getDoc(userDocRef);

                    if (docSnap.exists()) {
                        setUserName(docSnap.data().name);
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error("Error getting user data: ", error);
                }
            }
            setLoading(false);
        };

        fetchUserName();
    }, []);

    return (
        <footer className="bg-dark text-white py-4">
            <div className="container text-center">
                <h4 className="mb-3">{loading ? "Loading..." : userName}</h4>

                <div className="mb-3">
                    <a
                        href="https://web.facebook.com/itz.haryourfeh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white mx-3"
                    >
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a
                        href="https://x.com/alqudusy22"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white mx-3"
                    >
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white mx-3"
                    >
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a
                        href="https://github.com/Alqudusy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white mx-3"
                    >
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>

                <p className="mb-0">
                    &copy; {new Date().getFullYear()} Alqudusy. All Rights Reserved.<br />
                    built with love by Alqudusy
                </p>
            </div>
        </footer>
    );
};

export default Footer;
