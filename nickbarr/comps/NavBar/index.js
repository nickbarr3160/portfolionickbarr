import styled from "styled-components";
import React from "react";
import Link from 'next/link';
import {BsSunFill} from 'react-icons/bs';

const NavCont = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:15%;
width:100%;
border:2px solid red;
padding-left:1em;
padding-right:1em;
`;

const Logo = styled.div`
font-size:2em;
`;

const LinkCont = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
border:2px solid green;
width:30%;
height:100%;
`;

const NavBar = ({
    logoText="NB."
}) => {
    return <NavCont>
        <Logo>{logoText}</Logo>
        <LinkCont>
            <Link href='/nick'>Projects</Link>
            <Link href='/nick'>Skills</Link>
            <Link href='/nick'>Contact</Link>
            <div>
                <BsSunFill size='1.7em'/>
            </div>
        </LinkCont>
    </NavCont>
}

export default NavBar;