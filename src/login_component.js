import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";



export default function Login_component() {
    let history = useHistory();

    function handleClick() {
        history.push("./Dashboardpage");
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>

            <div className="container">
                <div class="card-body text-dark">
                        <h3>Log In</h3>
                        <div className="Login">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group size="lg" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group size="lg" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <br/>
                                <br/>
                                <Button block size="lg" type="submit" onClick={handleClick}>
                                    Login
                                </Button>
                            </Form>
                        </div>











                </div>

        </div>





</div>
    );
}