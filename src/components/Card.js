import React,{Component} from "react";
import "../assets/sass/style.scss";


class Card extends Component{
    constructor(props){
        super(props);
        this.state = {

        }    
    }
    render(){
        console.log("card props", this.props.info)
        const { info } = this.props
        return(
            <>
                    <div className="card-box-inner">
                        <div className="card-img">
                            {/* <div className="headlines-img" */}
                            <img src={info.urlToImage} alt="headlines image" />
                        </div>
                        <div className="headlines-box">
                            <div className="margin-box">
                                <div className="headlines">
                                    <div className="headlines-title">{info.title}</div>
                                </div>
                                <div className="short-subheadlines">
                                    <div className="short-desc">{info.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        )
    }
}
export default Card;