import React from "react";
import "../assets/sass/style.scss";
import { Carousel } from "react-bootstrap";
import CarouselImg1 from "../assets/images/img-1.webp";
import CarouselImg2 from "../assets/images/img-3.webp";
import CarouselImg3 from "../assets/images/img-4.webp";


class Carousels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <div className="carousel-div">
                    <Carousel>

                        <Carousel.Item>
                            <div className="carousel-img">
                                <img src={CarouselImg1} alt="images" />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img">
                                <img src={CarouselImg2} alt="images" />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img">
                                <img src={CarouselImg3} alt="images" />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </>
        )
    }
}
export default Carousels;