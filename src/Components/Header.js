import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../firebase";

function Header() {

    const [user]= useAuthState(auth);
    console.log("user is",user);
    return (
        <HeaderContainer>
            { /*Headerleft */}
            <HeaderLeft>
              <HeaderAvatar 
                onClick={() => auth.signOut()}
                alt={user?.displayName} 
                src={user?.photoURL}

              />
              <AccessTimeIcon />
            </HeaderLeft>


            {/* Header Search*/}
            <HeaderSearch>
                <SearchIcon />
                <input placeholder= "Search CMRU" />
            </HeaderSearch>

            {/* Header Right*/}
            <HeaderRight>
                <HelpOutlineIcon/>

            </HeaderRight>

        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--vibez-color);
    color: white;
    
`;
const HeaderRight = styled.div`
    flex:0.3;
    display:flex;
    align-items:flex-end;
    align-items: center;
    >  .MuiSvgIcon-root{
        margin-left:auto;
        margin-right: 20px;
        
    }


`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left:20px;


    > .MuiSvgIcon-root {
        margin-left:auto;
        margin-right:30px;

    }
`;

const HeaderSearch = styled.div`
    flex:0.4;
    display:flex;
    opacity: 1;
    border-radius:6px;
    background-color: #421f44;
    text-align: center;
    padding:0 50px;
    color: grey;
    border: 1px grey solid;
    align-items: center;

    > input {
        background-color:transparent;
        border:none;
        text-align: center;
        min-width: 30 vw;
        outline:0;
        color: white;
    }

`;
const HeaderAvatar = styled(Avatar)`
    cursor : pointer;

    :hover {
        opacity: 0.8;
    }
`;


