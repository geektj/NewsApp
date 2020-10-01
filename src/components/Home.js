import React, { Component } from "react";
import "../assets/sass/style.scss";
import Card from "./Card.js";
import Newsdesc from "./Newsdesc.js"
import {
    Link
} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const API_KEY = "b4ab4df9953f47378f7608f42936b608"
        const URL = 'http://newsapi.org/v2/everything?' +
            'q=Apple&' +
            'from=2020-09-30&' +
            'sortBy=popularity&' +
            `apiKey=${API_KEY}`;
        fetch(URL)
            .then((response) => {
                console.log("Response", response);
                if (response.status === 200) {
                    response.json().then((res) => {
                        console.log("res", res);
                        // if(res.status)
                        let data = res ? res.articles.length > 0 ? res.articles : [] : []
                        this.setState({ data: data })
                    })
                }

            })
            .catch((err) => {
                console.log("error", err)
            })
    }

    redirect = (element) => {
        localStorage.setItem("data", JSON.stringify(element));
        window.location.href = "/desc";
    }



    render() {
        console.log("Data", this.state.data)
        const { data } = this.state
        return (
            <>
                {/* <Body data={this.state.data} /> */}
                <div className="card-box">
                    {data.map((element, i) => {
                        return (
                            <Link onClick={() => this.redirect(element)} className="card-box-div"> <Card info={element} key={i} /></Link>
                        )
                    })}

                </div>
            </>
        )
    }
}

export default Home;