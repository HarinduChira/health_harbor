import React, {useState } from "react";
import emailimg from "./AccessStyle/email.png";
import passwordimg from "./AccessStyle/password.png";
import nameimg from "./AccessStyle/user.png";
import "./AccessStyle/Login.css";

function SignUp() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
  
        setUser({
            ...user,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (user.name === "" || user.email === "" || user.password === "") {
            alert("All fields are mandatory");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/CusLogin/AddCus", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error("An error occurred");
            }

            const data = await response.json();
            console.log("Data sent successfully:", data);

            setUser({
                name: "",
                email: "",
                password: "",
            });

            alert("SignUp Successful!");

            
        }
        catch (error) {
            console.error("Error sending data:", error);
        }

    };
  
    return (
    <div className="container">
        <div className="header">
            <div className="text">SignUp</div>
            <div className="underline"></div>
        </div>

        <form action="" onSubmit={handleSubmit}>
            <div className="inputs">
                <div className="input">
                    <img src={nameimg} alt="" />
                    <input type="text" placeholder="Name" id="name" 
                    value={user.name}
                    onChange={handleChange} />
                </div>

                <div className="input">
                <img src={emailimg} alt="" />
                    <input type="email" placeholder="Email Id" id="email"
                    value={user.email}
                    onChange={handleChange} />
                </div>

                <div className="input">
                    <img src={passwordimg} alt="" />
                    <input type="password" placeholder="Password" id="password"
                    value={user.password}
                    onChange={handleChange} />
                </div>
            </div>

            <div className="submit-container">
                <input className="submit" type="submit" value="SignUp" />
            </div>
        </form>
    </div>
    );
    
}

export default SignUp;
