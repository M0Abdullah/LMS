import React from 'react';
import './Home.css';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import Header from '../../Interface/Dashboard/Header/Header'

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const onSearch = (value, handlesearch) => {
  console.log(value);
  if (handlesearch) {
    handlesearch(value);
  }
};

export default function Home({ handlesearch }) {
  return (

    <div>
      <Header/>
      <div className="mainhome">
        <div className="home">
          <h1>Enigmatix</h1>
        </div>
        <div className="home2">
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              suffix={suffix}
              onSearch={(value) => onSearch(value, handlesearch)}
            />
          </Space>
        </div>
      </div>
    </div>
  );
}
