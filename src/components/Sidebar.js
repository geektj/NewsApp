import React,{Component} from "react";
import "../assets/sass/style.scss";


class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {

        }    
    }
    render(){
        return(
            <>
                <div className="side-bar-div">
                    <div className="sechead">
                        <div className="sectitle">
                            <div className="heading">Latest News</div>
                        </div>
                    </div>
                    <div className="latest-news">
                        <div className="latnews-margin-box">
                            <div className="lates-headlines">
                                <a href="">hello world</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }
}
export default Sidebar;