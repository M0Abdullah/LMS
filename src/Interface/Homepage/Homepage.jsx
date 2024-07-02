import React, { useState } from 'react';
import './Homepage.css';
import { Input, Space, Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Dashboard/Header/Header';

const { Search } = Input;

export default function Home({ handlecourses }) {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function searchsomething(value) {
    setLoading(true);
    let path;
    const searchValue = value.toLowerCase();

    switch (searchValue) {
      case 'frontend':
      case 'html':
      case 'css':
      case 'javascript':
      case 'react':
        path = '/frontneddata';
        break;
      case 'backend':
        case  'python':
          case 'Django':
        path = '/backend';
        break;
      case 'graphicdesign':
        case 'figma':
          case 'flutter':
        path = '/graphicdesign';
        break;
      case 'programmingfundamental':
        path = '/programmingfundamental';
        break;
      case 'softwarequalityassurance':
        path = '/softwarequalityassurance';
        break;
      default:
        path = null;
    }

    setLoading(false);
    if (path) {
      navigate(path);
    } else {
      setMessage('No Matching Course Found');
    }
  }

  return (
    <div>
      <Header />
      <div className="link">
        <Link onClick={handlecourses} to="/courses">Courses</Link>
        /
        <Link to="/search">Search</Link>
        /
        {value}
      </div>
      <div className="mainhomepage">
        <div className="homepage">
          <h1>Learning Object</h1>
        </div>
        <div className="Homepage2">
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setMessage('');  // Clear message on input change
              }}
              onSearch={searchsomething}
            />
          </Space>
        </div>
      </div>
      {loading && (
        <div className="homepage3">
          <Spin size="large" />
        </div>
      )}
      {message && (
        <div className="course">
          {message}
        </div>
      )}
    </div>
  );
}
