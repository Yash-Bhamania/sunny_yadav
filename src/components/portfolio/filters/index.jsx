import React, { useState } from "react";
import "./style.scss";
const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Living Area",
        id: "Living-Area",
    },
    {
        name: "Kitchen 360",
        id: "Kitchen",
    },
    {
        name: "Bedroom 360",
        id: "Bedroom",
    },
    
   
];

const Filters = ({ filterProjects }) => {
    const [active, setactive] = useState("");
    const clickHandler = (id) => {
        setactive(id);
        filterProjects(id);
    };

    return (
        <div className="filter-menu-items">
            {filtersData.map((item, index) => {
                return (
                    <div
                        key={item.id}
                        className={`filter-menu-item ${
                            active === item.id ? "active" : ""
                        }`}
                        onClick={() => clickHandler(item.id)}
                    >
                        {item.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Filters;
