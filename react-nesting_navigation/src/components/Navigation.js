import React, { StrictMode } from "react";

export default function Nav() {
    return (
        <nav>
            <a className="navigation__link" href="#home">
                Home
            </a>
            <a className="navigation__link" href="#about">
                About
            </a>
            <a className="navigation__link" href="#impressum">
                Impressum
            </a>
        </nav>
    );
}