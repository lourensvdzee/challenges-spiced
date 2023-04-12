import React, { StrictMode } from "react";

export default function Link({ href, children }) {
    return (
        <a href={href}>
            {children}
            <img className="round-image" src="logo" alt="logo" />
        </a>
    );
}