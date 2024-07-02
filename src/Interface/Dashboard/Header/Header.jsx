import React from 'react';
import './Header.css';
import { Button, Flex } from 'antd';
import { IoIosNotifications } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

export default function Header() {
    const navigate = useNavigate(); 
    const handlehome = () => {
        navigate('/home'); 
    };

    const handlecourse = () => {
        navigate('/course'); // Use absolute path for course navigation
    };
    const handledashboard = () => {
        navigate('/dashboard'); // Use absolute path for course navigation
    };
function handlenotification(){
navigate('/notification')    
}

function hanldemessage(){
    navigate('/message')
}

function handleedit(){
    navigate('/editing')
}

    return (
        <div>
            <Flex gap="small" wrap>
                <div className="header1">
                    <div className="header1_1">
                        <h1>Learn Object</h1>
                    </div>
                    <div className="header1_2">
                        <Button type='primary' onClick={handlehome}>Home</Button>
                    </div>
                    <div className="header1_3">
                        <Button type='primary' onClick={handledashboard} >Dashboard</Button>
                    </div>
                    <div className="header1_4">
                        <Button type='primary' onClick={handlecourse}>My Course</Button>
                    </div>
                </div>
            </Flex>
            <div className="header2">
                <div className="header2_1">
                    <button  onClick={handlenotification} ><IoIosNotifications /></button>
                </div>
                <div className="header2_2">
                    <button onClick={hanldemessage} ><FaMessage /></button>
                </div>
                <div className="header2_3">
                    <button  onClick={handleedit} ><MdModeEdit /></button>
                </div>
            </div>
        </div>
    );
}
