import React, { useState } from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, Select, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './Courses.css';
import Header from '../Dashboard/Header/Header';

const { Search } = Input;

export default function Courses({ handlefrontend, handlebackend, handleprogrammingfundamental, handlegraphicdesign, handlesoftwarequalityassurance }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [message1, setMessage1] = useState('');

  const expandall = () => {
    setExpanded(!expanded);
  };

  const handleChange = (value) => {
    let path;
    switch (value) {
      case 'Frontend':
        path = '/frontneddata';
        break;
      case 'Backend':
        path = '/backend';
        break;
      case 'Programming Fundamental':
        path = '/programmingfundamental';
        break;
      case 'Graphic Design':
        path = '/graphicdesign';
        break;
      case 'Software quality Assurance':
        path = '/softwarequalityassurance';
        break;
      default:
        setMessage('Please use the correct name');
        return;
    }
    navigate(path);
    setMessage('');
  };

  const Searchcourse = (value) => {
    let path;
    switch (value.toLowerCase()) {
      case 'frontend':
      case 'html':
      case 'css':
      case 'javascript':
        path = '/frontneddata';
        break;
      case 'backend':
        path = '/backend';
        break;
      case 'programming fundamental':
        path = '/programmingfundamental';
        break;
      case 'graphic design':
        path = '/graphicdesign';
        break;
      case 'software quality assurance':
        path = '/softwarequalityassurance';
        break;
      default:
        setMessage('Please use the correct name');
        return;
    }
    navigate(path);
    setMessage('');
  };

  const items = [
    {
      label: 'Competency Framework',
      key: '1',
      icon: <UserOutlined />,
    }
  ];

  const handleMenuClick = ({ key }) => {
    setTimeout(() => {
      const foundItem = items.find(item => item.key === key);
      if (!foundItem) {
        setMessage1('This Page is Not Available');
      }
    }, 5000);
  };
  
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div>
      <Header />
      <div className="abd">
        <h1>Training</h1>
      </div>
      <div className="course1">
        <div className="course1_1">
          <Space wrap>
            <Button>
              <Space>Category</Space>
            </Button>
          </Space>
        </div>
        <div className="course1_2">
          <Space wrap>
            <Dropdown menu={menuProps}>
              <a style={{ color: 'black' }}>
                <Space>
                  More
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Space>
        </div>
      </div>
      <div className="line">
        <hr style={{ width: '650px', color: 'gray' }} />
      </div>
      <div className="course2">
        <div className="course2_1">
          <Select
            style={{ width: '25%' }}
            placeholder="Please select"
            onChange={handleChange}
            options={[
              { value: 'Frontend' },
              { value: 'Backend' },
              { value: 'Graphic Design' },
              { value: 'Programming Fundamental' },
              { value: 'Software quality Assurance' },
            ]}
          />
        </div>
        <div className="course2_2">
          <Space direction="vertical">
            <Search
              style={{ width: '250px' }}
              placeholder="Search Courses Here"
              allowClear
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              enterButton="Search"
              size="large"
              onSearch={Searchcourse}
            />
          </Space>
        </div>
      </div>
      <div className="course3">
        <div className="course3_1">
          <Link onClick={handlebackend} id='expand' to={'/backend'}>Backend</Link>
          {expanded && (
            <div className="additionaldetails">
              <Link to={'/backend'}>Python</Link>
              <br />
              <Link to={'/backend'}>Django</Link>
              <br />
              <Link to={'/backend'}>Flask</Link>
            </div>
          )}
        </div>
        <div className="course3_2">
          <Link onClick={handlefrontend} id='expand1' to={'/frontend'}>Frontend</Link>
          {expanded && (
            <div className="additionaldetails">
              <Link to={'/frontend'}>HTML & CSS</Link>
              <br />
              <Link to={'/frontend'}>Javascript</Link>
              <br />
              <Link to={'/frontend'}>React Js</Link>
            </div>
          )}
        </div>
        <div className="course3_3">
          <Link onClick={handleprogrammingfundamental} id='expand2' to={'/programmingfundamental'}>Programming Fundamental</Link>
          {expanded && (
            <div className="additionaldetails">
              <Link to={'/programmingfundamental'}>Algorithm Learning for Beginner</Link>
            </div>
          )}
        </div>
        <div className="course3_4">
          <Link onClick={handlegraphicdesign} id='expand3' to={'/graphicdesign'}>Graphic Design</Link>
          {expanded && (
            <div className="additionaldetails">
              <Link to={'/graphicdesign'}> Figma</Link>
              <br />
              <Link to={'/graphicdesign'}>Flutter</Link>
              <br />
              <Link to={'/graphicdesign'}>Adobe Photoshop</Link>
            </div>
          )}
        </div>
        <div className="course3_5">
          <Link onClick={handlesoftwarequalityassurance} id='expand4' to={'/softwarequalityassurance'}>Software Quality Assurance</Link>
          {expanded && (
            <div className="additionaldetails">
              <Link to={'/softwarequalityassurance'}>QA Essential</Link>
            </div>
          )}
        </div>
      </div>
      <div className="course4">
        <a href="#" onClick={expandall}>
          {expanded ? 'Collapse All' : 'Expand All'}
        </a>
      </div>
      <div className="message">
        {message}
      </div>
      <div className="message1">
        {message1}
      </div>
    </div>
  );
}
