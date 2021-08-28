import React from 'react'
import styled from "styled-components";
import { db } from '../firebase';
import { useDispatch } from "react-redux";
import { enterRoom } from '../features/appSlice';

function SidebarOptions( {Icon, title, addChannelOption, id}) {
        const dispatch = useDispatch();
       
        const addchannel = () => {

            const channelname = prompt('Please enter the Channel Name');

            if(channelname){
                db.collection('rooms').add({
                    name:  channelname,
                });
            }
        };


        const selectchannel = () => {
            if(id) {
                dispatch(enterRoom({
                    roomid : id,
                }))
            }

        };


    return (
        <SidebarOptionsContainer 
            onClick={addChannelOption ? addchannel : selectchannel}
        >

            {Icon && <Icon font-size= "small" style={{padding :10}} />}
            {Icon ? (
                <h3>{title}</h3>
            ): (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                        
                </SidebarOptionChannel>

            )}
        </SidebarOptionsContainer>
    );
}

export default SidebarOptions

const SidebarOptionsContainer = styled.div`
    Display:flex;
    font-size:12px;
    align-items: center;
    padding-left:2px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color:#340e36;
    }

    >h3 {
        font-weight: 500;
    }
    >h3 > span {
        padding: 15px;
    }
`;
const SidebarOptionChannel = styled.h3`
    padding:10px 0;
    font-weight:300;

`;