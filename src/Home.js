
import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class Home extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
                <Link className="navbar-brand" to={"/sign-in"}><h4>Ramya</h4></Link>
                <div className="collapse navbar-collapse" id="navbarDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sign-in"}><h4>Log in</h4></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sign-up"}><h4>Sign Up</h4></Link>
                        </li>
                    </ul>
                </div>

    </nav>
<br/>
                <br/>
                <br/>
                <br/>
                <br/>


            </div>
        );
    }
}

export default Home;