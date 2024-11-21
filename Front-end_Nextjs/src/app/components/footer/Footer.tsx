import React from "react";
import "./footer.css";

const Footer = () => {
    //constante para obtener el año actual de forma dinamica
    const currentYear = new Date().getFullYear(); 

    return(
        <footer className="footer">
            <p>{currentYear} SENA. All rights reserved.</p>
        </footer>
    );
};

export default Footer;