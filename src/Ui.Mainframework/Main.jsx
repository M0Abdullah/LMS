import React from 'react';
import { Button, Flex } from 'antd';
import './Main.css';
import { useNavigate } from 'react-router-dom';

export default function Main({ handlelogin,hanldehistory }) {
    const navigate= useNavigate();

function hanldeprimary(){
    navigate('./primarypage')
}

function handleadminlogin(){
    navigate('/adminportal')
}

    return (
        <div className="back">
            <div className="object">
                <div className="object_1">
                    <h1>Learn Upon</h1>
                    <Button onClick={handleadminlogin} >AdminLogin</Button>
                </div>
           
                <div className="object_2">
                    <Flex gap="small" wrap>
                        <Button type="primary"  onClick={hanldeprimary} >Primary Button</Button>
                        <Button onClick={hanldehistory} >History Check</Button>
                    </Flex>
                </div>
            </div>
            <div className="object3">
                <h1>Learning As it Should Be</h1>
            </div>
            <div className="object4">
                <p>"Unlock your team's potential with our Learning Management System, designed to streamline training and foster continuous growth. Empower learners, track progress, and achieve excellence effortlessly."</p>
            </div>
            <div className="object5">
                <Button onClick={handlelogin} type='primary' style={{ width: '150px', height: '40px', fontSize: '1em' }}>Get Started</Button>
            </div>
        </div>
    );
}
