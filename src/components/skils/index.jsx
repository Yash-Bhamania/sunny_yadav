import React from "react";
import "./style.scss";
import skill from "../../images/Skils.png";
import Section from "../Shared/section";
import CallToAction from "../Shared/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skill-content-wrapper">
                <div className="left-col">
                    <img
                        src={skill}
                        alt="skill"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                      Experienced in using 3ds Max, AutoCAD, and Photoshop. Strong knowledge of lighting, materials, textures, and composition to ensure accuracy and realism. Able to work closely with architects and designers to improve design quality and meet project requirements.
Focused on delivering projects on time with attention to detail and consistency.

                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        // action={() => {
                        //     console.log("Button is triggered");
                        //     window.open("/Yash_Resume.pdf", "_blank");
                        //     const link = document.createElement("a");
                        //     link.href = "/Yash_Resume.pdf";
                        //     link.download = "Yash_Resume.pdf";
                        //     link.click();
                        // }}
                        action={() => {
                            console.log("Button is triggered");

                            const resumeUrl = `${process.env.PUBLIC_URL}/3D_interior_resume.pdf`;

                            window.open(resumeUrl, "_blank");

                            const link = document.createElement("a");
                            link.href = resumeUrl;
                            link.download = "3D_interior_resume.pdf";

                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    />
                </div>
            </div>{" "}
        </Section>
    );
};

export default Skills;
