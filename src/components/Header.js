import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <>
            {/* navigation-bar */}
                <div className="nav-bar">
                    <div className="nav-row">
                        {/* product-title-name */}
                        <div className="right-side">
                            <div className="title">
                                <div className="title-name">News</div>
                            </div>
                        </div>
                        {/* nav-bar-items */}
                        <div className="centered-items">
                            <ul>
                                <a><li className="nav-items active-class">Home</li></a>
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
