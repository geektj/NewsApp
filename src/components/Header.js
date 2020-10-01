import React from "react";
import "../assets/sass/style.scss";
// import { Link } from "react-router-dom";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                {/* navigation-bar */}
                <div className="nav-bar">
                    <div className="nav-row">
                        {/* product-title-name */}
                        <div className="right-side">
                            <div className="title">
                                <a href="/"><div className="title-name">News</div></a>
                            </div>
                        </div>
                        {/* nav-bar-items */}
                        <div className="centered-items">
                            <ul>
                                <a href="/"><li className="nav-items active-class">Home</li></a>
                                <a><li className="nav-items">Business</li></a>
                                <a><li className="nav-items">Tech</li></a>
                                <a><li className="nav-items">Sports</li></a>
                                <a><li className="nav-items">Entertainment</li></a>
                            </ul>
                        </div>
                        {/* login/signup */}
                        <div className="left-side">
                            <div className="login-signup">
                                <a>Login/Signup</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Header;
