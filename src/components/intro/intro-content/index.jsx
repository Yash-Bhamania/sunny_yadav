import React from "react";
import "./style.scss";
import Hand from "../../../images/hand.png";
import CallToAction from "../../Shared/CallToAction";
import girl from "../../../images/girl.png";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { scrollToSection } from "../../utils/helpers";
const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        {" "}
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img
                                    src={Hand}
                                    alt=""
                                />
                            </span>
                            <span className="text">, I am Sunny!</span>
                        </span>
                        <span className="big-text">3D Architectural Visualizer</span>
                    </h1>
                    <p className="small-text">
                       Creative 3D Architectural Visualizer with 8+ years of experience in creating high-quality and realistic renderings for residential and commercial projects. Skilled in converting architectural designs into clear and effective visual presentations.
                    </p>
                    <CallToAction
                        text="Contect me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt=""
                    />
                    <div className="highlights horizoltal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Design </div>
                    </div>
                    <div className="highlights vertical">
                        <div className="icon">
                            <FaUser />
                        </div>

                        <div className="text">
                            <span></span>
                            Happy Customer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
