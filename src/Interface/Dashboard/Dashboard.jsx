import React, { useState } from 'react';
import Header from './Header/Header';
import './Dashboard.css';
import { Select, Space } from 'antd';
import { Calendar } from 'antd';

const { Option } = Select;

export default function Dashboard() {
    const [message, setMessage] = useState('');
    const [selectedOption, setSelectedOption] = useState('Next 7 Days');
    const [selectedOption1, setSelectedOption1] = useState('Sort by courses');
    const [selectedOption2, setSelectedOption2] = useState('Search by activity or name');

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const handleSelectChange = (value) => {
        setSelectedOption(value);
        if (value === 'Next 7 Days' || value === 'Sort by courses' || value === 'Search by activity or name') {
            setMessage('No data Activity');
        } else {
            setMessage('This data is not Find');
        }
    };

    const handleSelectChange1 = (value) => {
        setSelectedOption1(value);
        if (value === 'Next 7 Days' || value === 'Sort by courses' || value === 'Search by activity or name') {
            setMessage('No data Activity');
        } else {
            setMessage('This data is not Find');
        }
    };

    const handleSelectChange2 = (value) => {
        setSelectedOption2(value);
        if (value === 'Next 7 Days' || value === 'Sort by courses' || value === 'Search by activity or name') {
            setMessage('No data Activity');
        } else {
            setMessage('This data is not Find');
        }
    };

    return (
        <div>
            <Header />
            <div className="dashboard1">
                <h1>Welcome Back, Abdullah</h1>
            </div>
            <div className="dashboard2">
                <div className="Mainobject">
                    <div className="mainobject1">
                        <Space wrap>
                            <Select
                                defaultValue="Next 7 days"
                                style={{ width: 120 }}
                                onChange={handleSelectChange}
                                value={selectedOption}
                            >
                                <Option value="All">All</Option>
                                <Option value="Overdue">Overdue</Option>
                                <Option value="Duedate" disabled>
                                    Duedate
                                </Option>
                                <Option value="Next 7 days">Next 7 days</Option>
                                <Option value="Next 30 days">Next 30 days</Option>
                                <Option value="Next 3 month">Next 3 months</Option>
                                <Option value="Next 7 month">Next 7 months</Option>
                            </Select>
                        </Space>
                    </div>

                    <div className="mainobject2">
                        <Space wrap>
                            <Select
                                defaultValue="Sort by courses"
                                style={{ width: 160 }}
                                onChange={handleSelectChange1}
                                value={selectedOption1}
                            >
                                <Option value="Sort by dates">Sort by dates</Option>
                                <Option value="Sort by courses">Sort by courses</Option>
                            </Select>
                        </Space>
                    </div>

                    <div className="mainobject3">
                        <Space wrap>
                            <Select
                                defaultValue="Search by activity or name"
                                style={{ width: 200 }}
                                onChange={handleSelectChange2}
                                value={selectedOption2}
                            >
                                <Option value="Search by activity">Search by activity</Option>
                                <Option value="Search by name">Search by name</Option>
                            </Select>
                        </Space>
                    </div>
                    <br />
                    <div className="mainobject4">
                        { message}
                    </div>
                </div>
            </div>
            <div className="dashboard4">
                <Calendar style={{ width: '67%', height: '50%' }} onPanelChange={onPanelChange} />
            </div>
        </div>
    );
}
