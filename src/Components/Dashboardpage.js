
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import React from "react";


function Dashboardpage() {
    let history = useHistory();

    function handleClick() {
        history.push("./login_component");
    }


    return (
        <div>
            <div className="container">
                <blockquote className="blockquote text-justify text-secondary">
                    <center><h2> Dashboard</h2></center>
                </blockquote>
                <br/>

            <div className="col-md-7">
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.8976873782885!2d55.39910401448728!3d25.3412140320624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bd8f3a1e367%3A0x7e36f7c285843e03!2sAl%20Jazeera%20Tower%20-%20My%20Home%20Sharjah!5e0!3m2!1sen!2sae!4v1632656636523!5m2!1sen!2sae" style={{ border:'0',width:'100%', height:'315px', frameborder:'0'}} allowFullScreen/>
            </div>
                <br/>
               <br/>
            <Button block size="lg" type="submit" onClick={handleClick}>
                Logout
            </Button>
            </div>

        </div>
    );
}
export default Dashboardpage;