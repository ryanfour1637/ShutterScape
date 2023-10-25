import React from "react";
import { NavLink, useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "../CSS/john.css";

function Footer() {

    const teamMembers = [
        { name: "John Dorsey", github: "https://github.com/JohnDoe4991" },
        { name: "Ryan Fournier", github: "https://github.com/ryanfour1637" },
        { name: "Lan Oribello", github: "https://github.com/iitalix" },
        { name: "Steven Nielson", github: "https://github.com/Snielson222" },
    ];

    return (
        <>
            <div className="footer-container">
                <div className="group2">
                    Developers
                </div>
                {teamMembers.map((member, index) => (
                    <div key={index}>
                        {member.name} {" "}
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Footer;
