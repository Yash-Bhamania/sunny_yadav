import React, { useState } from "react";
import Section from "../Shared/section";
import "./style.scss";
import Filters from "./filters";
import ShowCase from "./showCase";

const projectsData = [
    {
        id: 1,
        name: "Kitchen 360",
        tags: ["Kitchen", "360-view"],
        media: {
            thumbnail: require("../../images/pp/fgjfssrdr.jpeg"),
        },
        link: "https://momento360.com/e/u/bda7fb0771c14ab8a775db60b885859c?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
    },
    {
        id: 2,
        name: "Living Area 360",
        tags: ["Living-Area", "360-view"],
        media: {
            thumbnail: require("../../images/pp/jhrjryfjrtjk.jpeg"),

        },
        link : "https://momento360.com/e/u/e55fe3d695f44718999912614f7fff41?utm_campaign=embed&utm_source=other&heading=305.35&pitch=-3.13&field-of-view=100&size=medium&display-plan=true",

    },
    {
        id: 3,
        name: "Living Area 360",
        tags: ["Living-Area", "360-view"],
        media: {
            thumbnail: require("../../images/pp/81.jpg"),
        },
        link: "https://momento360.com/e/u/c4a918ddc78649f7b66b56928a81fb57?utm_campaign=embed&utm_source=other&heading=167.21&pitch=-1.61&field-of-view=75&size=medium&display-plan=true",
    },
    {
        id: 4,
        name: "Bedroom 360",
        tags: ["Bedroom", "360-view"],
        media: {
            thumbnail: require("../../images/pp/WhatsApp Image 2026-05-04 at 21.06.51.jpeg"),
        },
        link: "https://momento360.com/e/u/18d57e44323a404ca2aeef92b4449404?utm_campaign=embed&utm_source=other&heading=54.6&pitch=0.84&field-of-view=100&size=medium&display-plan=true",
    },
    {
        id: 5,
        name: "Kitchen 360",
        tags: ["Kitchen", "360-view"],
        media: {
            thumbnail: require("../../images/pp/WhatsApp Image 2026-05-04 at 21.06.53.jpeg"),
        },
        link: "https://momento360.com/e/u/f5fb6e29d2504b8ea55d11ecdd948dca?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
    },
    {
        id: 6,
        name: "Living Area",
        tags: ["Living-Area", "360-view"],
        media: {
            thumbnail: require("../../images/pp/ljhgfuyttdjrt.jpeg"),
        },
        link: "https://momento360.com/e/u/4cc473d191d84c118f748e9620994d92?utm_campaign=embed&utm_source=other&heading=222.37&pitch=4.67&field-of-view=100&size=medium&display-plan=true",
    },
    

];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [trasition, setTrasition] = useState(false);

    const filterProjects = (tag) => {
        setTrasition("zoomOut");
        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTrasition("zoomIn");
        }, 200);
        setTimeout(() => {
            setTrasition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            background="light"
            title="Check My Portfolio"
        >
            <div className="portfolio-content-section">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <ShowCase
                    data={projects}
                    trasition={trasition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
