import React, { Component } from "react";
import "../assets/sass/style.scss";

import ArticleImg from "../assets/images/article-img.jpg"

class Newsdesc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {}
        }


    }
    componentDidMount() {
        let data = localStorage.getItem("data")
        let info = JSON.parse(data)
        this.setState({ info: info })

    }

    render() {
        console.log(this.state.info)
        const { info } = this.state
        return (
            <>
                <div className="card-box">
                    <div className="news-desc-box">
                        <div className="first-row">
                            <div className="date-time">
                                <div className="date-text">{info.publishedAt}</div>
                            </div>
                            <div className="share-platform">

                            </div>
                        </div>
                        <div className="title-section">
                            <div className="article-heading">{info.title}</div>
                        </div>
                        <section className="higlight clearfix" data-highlight="false">
                            <div className="article-image">
                                <img src={info.urlToImage} alt="title-img" />
                            </div>
                        </section>
                        <div className="article-content-para clearfix">

                            <div className="article-content">
                                <div className="desc-para">{info.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Newsdesc;