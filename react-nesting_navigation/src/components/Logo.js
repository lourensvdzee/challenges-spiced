import React, { StrictMode } from "react";
import Image from "./Image";
import logo from "../img/logo.jpg";

export default function Logo() {
    return (
        <a href="#home">
            <Image src={logo} alt="logo" />
        </a>
    );
}