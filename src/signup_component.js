import React, { useState } from "react";

export default function SignUp(){
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="container">
            <div className="card-body text-dark">
                <h3>Sign Up</h3>
                <div className="Login">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">

                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name"
                                   value={firstname}
                                   onChange={(e) => setfirstname(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name"
                                   value={lastname}
                                   onChange={(e) => setlastname(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-success btn-lg btn-block">SignUp</button>

                    </form>
                </div>
            </div>

        </div>


                );

}