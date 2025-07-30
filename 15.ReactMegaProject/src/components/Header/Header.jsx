import React from "react";
import {Container,Logo,LogoutBtn} from "../index"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header(){
    return(
        <div>
            <Container>
                <Logo />
                <LogoutBtn />
            </Container>
        </div>
    )
}

export default Header;