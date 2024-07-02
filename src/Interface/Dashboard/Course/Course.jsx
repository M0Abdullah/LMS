import React, { useState } from 'react';
import './Course.css';
import { Select, Space, Input, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Header from '../../Dashboard/Header/Header'
const { Search } = Input;
const { Meta } = Card;

export default function Course() {
  const navigate = useNavigate();
  const [SelectedOption, SetSelectedOption] = useState('All');
  const [message, setMessage] = useState('');

  const handleChange = (value) => {
    SetSelectedOption(value);
    if (value === 'All') {
      navigate('/course');
    } else if (value === 'Future' || value === 'In Progress' || value === 'Stared' || value === 'Remove From View') {
      setMessage('No Data Activity');
    } else {
      setMessage('No Data Activity');
    }
  };
  function handleNavigation(path) {
    navigate(path);
  }

  return (
    <div>
      <Header />
      <div className="coursefull">
        <h1>My Course</h1>
      </div>

      <div className="HR">
        <hr style={{ width: '1050px', margin: '10px' }} />
      </div>
      <div className="coursefull2">
        <Space wrap>
        <Select
            defaultValue="All"
            style={{ width: 120 }}
            onChange={handleChange}
            value={SelectedOption}
            options={[
              { value: 'All', label: 'All' },
              { value: 'Future', label: 'In Future' },
              { value: 'Progress', label: 'Progress' },
              { value: 'Disabled', label: 'Disabled', disabled: true },
              { value: 'Stared', label: 'Stared' },
              { value: 'Remove From View', label: 'Remove From View' },
            ]}
          />
        </Space>
      </div>
      <div className="coursefull3">
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            style={{ width: 200 }}

          />
        </Space>
      </div>
      <div className="coursefull4">
        <Space wrap>
          <Select
            defaultValue="Sort by last access"
            style={{ width: 200 }}
            onChange={handleChange}
            options={[
              { value: 'Search by Course Name' },
              { value: 'Sort by last accessed' },

            ]}
          />
        </Space>
      </div>
      <div className="coursefull5">
        <Space wrap>
          <Select
            defaultValue="Card"
            style={{ width: 150 }}
            onChange={handleChange}
            options={[
              { value: 'Card' },
              { value: 'List' },
              { value: 'Summary' },
            ]}
          />
        </Space>
      </div>
      <div className="coursefull6">
        <div className="coursefull6_1">
          <Card
            onClick={() => handleNavigation('/htmlandcss')}
            style={{ width: 300 }}
            cover={<img alt="example" style={{ height: '200px' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEX////kTSbxZSnr6+sAAADkSR7pdVzrWSjIyMj39/fkRBTr8PDwXRbxYiPnp5r4u6f3sZnyek/pzcfkPwbwVwDj4+NVVVXnnI3lZEn97enAwMB6enq6urqnp6flak7jRhoiIiJqamroVCcWFhYuLi7iOADxXxvuXyjqfGXytar41tDwqJr1xLv65eHmXj398vDtlIP1l3frg27S0tLmWDT0iWTmhnPr39zzvbTpx8H52dL60MPul4b5w7Lmi3norqOSkpJERESUlJRQUFA/Pz9xcXHqURTycz71lnXscEz2oojq19T4tJ/5yLrzgVXs+vx+gb60AAALT0lEQVR4nO2de1vaWBDGgxKVgLY1WHW7Ne22UG+AWqpWLXYvra697Pf/NpsQAwnMDBnynpDy8P6zNg+c5Lfn5OTNzJyDZen0eznS88GxwaHyVuIT43qR/PjbeMsvks1Yzwf//E15jdkEJSx/Hjb8PnZ4jgjLy4NG3s4p4aCRl/Gj80QYXX0lcXCuCMthE6/nmPBzcGgteWy+CPvfeTPXhH9a1l8E9BwRln9fHj1SEMLym0gjl1Z51PAB8GVwjCJ89Xz0SFEICW3FPzokfJFoQmxhQWheC8KYFoTlN2/j3331av4Iy/E3pvLakHd+CONvvc+teezD+N+VOSUcWO6XFk+4liNfnPDtVqQMhNaX8K+/LYHw79dx/ZUfIXHJesLHV99liTCp178YYdjgS2uOCQOSf/p/zC1hJfra3BJaLz+H/51fwkgLwgUhSEPCN8QlM4RfEk1whCPN/DkjwuW1SO8HxwaH1irxj24NDifAYx+3mOP9Zt6v0XpvLbTQQgsttNBCCy200EK/oHb3Voqsvd3MhJ2GXWQ1Otk70SkVWU52QKs7awhRXQDhnj1rCkH2HoBwv9CE+wDCnjdrDEFeD0B4VOSpxjkCEB4UmvAAQHjszhpDkHsMIDwsNOEhgLBVaMIWgLBTaEKAabMsLOEfqxn1R4IQAWhhn4erSxm1Gm/NgxC2oaYGSmi3IYQrBSZcgRBibVtmwvh9CDFtlnUDNTVQQmcbQoi1bZkJ441BTBvatkEJIaYNbduwhAjThrZtWEKEaQuibUUifBdvDBFp81Up1EyTIHQqky8/jZCAmQkTpg0RaQu0gzQ1SEJ7B0QItW1QQoxps6wzpG3LSpgwbWcgwu2iEoJMm2VtICfTrITxtpwNEOFlYQkvQYSCbbMdrb7WtFpnCUGmTbJt9vmGVgdPtPqwzhJiTJtl7bK2zdmoaqU//UMzBpg0bdkTwI9iCb2b6rJSep+V6MMkIQpQIDzPgfAuTrhqhpAD9E1FDoS1JY6wBCNk08B2OwfCOkcISQCH4m2bY56wkyBMmLZzGOEJS9gwT9jiCW9ghHwa2L0wTniVIEwMIEQCOBRv29xvxgl/1FhClGmT4onuR+0wVRM+YQndaxjhFUvoXBonfNpkCa9ghKJtM014zxLiTJuQBna2jRP+ZE0bJgEcigOcwrapCZ+xhDhLY1ld1tSobZuaMD5GTaRHQ/G2bcc0YYW1pUDTJlXvdZWAakLetEGq9iLxts0zTSiYthMgodK2Id/xr3hLgzNtUhqYsm3V221eR091umejNKAEcCidbav2XDbU5n1t6iRE2jAJ4FA621bdFgKs2eKlCUKcaZPiiZRtq97mQthAxRID8Wlgj7Bt1Y9CXjwToYkE8KN4wh5BuJkPIRLQYp/4pG37ZorQUKQtEJsGpqNtQm0DjBCWAA7F2zabIhQSjpkIjZk2qXrPIQCr7RwIQVV7kfgnHGXbqsJKIhghLAEcSmnbzgwRxhuCmja9beNvRBgh1LRJaWDStgkriXCEqARwKJxtwxEiTZs22lYVSlKzEBqLtPmq8C/5VLRNsG0wQg9UtReJvWJ7X2fbshAaNG3Cogsy2nZh5j40FksMxFfvkdE2j11evrquUoIwYdpQVXuRznW2bW+H07/PVFrnCMGmTbJtDV20TXdaPpYINm1iPFGXJNXNgNd8LBFr2sQ0sC5JqiP8xKdHsaZNa9tghEJ6FGvaxHiiLkmqI3zIIwEcSkgD65KkOkKhpg1r2ixltA1GyKdHsZG2QOzzkLRtKELW0pRsOCFv23S1bTrCdY4QbtrERRfmCDt8Ahht2iyLD73okqQqwl0+PYpaajHUDW9MVbVtKsKrPKr2IqFsm4pQMG2opRZDoWybipA3bcCqvUjXINumIvyeR9VeJMG23RojFEwbNtIWaBdU26YivOdr2nBVe5E67H2os20qQr5qz4HbUpRtq6oI+aUWeNMmxRN3NhVq7TKizpm4DY2sAI6LXw1suwrVOVHnzGOpxVCgvfeYeOn6HXFK3rTZeNMm2TYI4U/ilLmaNtjeewxh85Q45XUeSy2GAm3iwhE+EKfM1bTBNnFhCGvfiVPmatok2wYh/EGcMsdIW6AWZosTjpDqlHt+fSzellpWRSCkkkw6wjp1ybxpa4DTo6H4maa7Ny7OIHCElM/kTRtig+RxsVsm23v/jeeYLpjblhulVKckPmHctElbJncJ672lI1wiTthhbakR0ybaNuotgvkoTag1bdiqvUh8oZNH1bYxIWSGkDJtwlILdAI4lG7RBVe9RxM274kTCpE2E6ZNrN7bJAiZQc0QUqZNWB+LTgCHwlTv0YSkaRPWx6ITwKGENDARbeMWXTCEn4gT5mza1NV7zM5EDCFl2k5Z02YglhiIr97zTghCJkhOE5KmjU8Ag6v2BuIJz9IvumAIqUDUHU9oBlCIJyoWXTCE1Pn4SBtmg+Rx6dLAF/S7iIKQj7ThE8Ch+DSwRxBWNYSkLeVNGz4BHIq3bY1xwOWqYqbRmjbk+ti4+Hgibdtch/jCOOF6s16nLI2wqQm6ai+SzrYtVy8ue92GMzK0RwibtfrdwzX5xp67aZtiixP/Rfjb7b7txiljhOu1+tLpDzZNlrtp09q2AeXy5sae63p2gtAfmrUPT0RrkmPVXiSdbUt05fLHm3Z4W64GdLXas6cTreVpngngULq1smOUF5fnpYbz1R+aD9dpXFeeVXuP4rdMTrfFSXBbbvQ+pc1P81V7qA2Sx8UBKrY4UdR5J+bcHCJtgRDVe6n/91f4SBt2fWxcykUX2QhnYNrE6r0tOKFg2kwkgEPpbFtGwhmYNkz1XmrCGZg2TPVeakLetBlJAIdCVO+lJpyBaRNt2+1/KRFTE+ZatReJX3RR6vYuA5MNI7x+SDzwDW2QPCYpDew5jZ3tzcmUKQhb33/Wa02B0BigsKykL9txS2eXF1WRcgJh58fpUn1kk/JR02YqlhhIBIy6sr39UehKgbDjD83RzqMI0SuA40r1y7l+V9r7t1xXcoT+0KzVm2OdR1gaQwngUMJ+F6OUje4J2ZUUoT8014mhyRACN0geF7/3HgHpuc7KxrfRrhwjvHp6xwxNjtBE1V4kbfWeP2C7veOLOGSCcPfThyY/NGOKN2ooARxqml+68Fw3/hgZEFb680oKujFCc6Zt6uq9/mPkce4JCVtPPgjzikxopGovUobqvegxEjwUTpupO48iNJMADiXYthTy5x57/+hZbeK8Mqa8TBvil3Ptr7rOIwhNJYBDZa9mn2rnj9wsjbBlcn6ExtKjobL/BFt2QpOmDbHoYirCHKr2ImlsG44wuXuSqQRwqOyLLrSE75I/xG3YtCEWXagIR+n6hOZiiYGyL7pITfhulW7AWAI4VPZFF6kIx4ZmnNCkaUP8cu5kQq7zHmVkqcVQ2X85VyaUOi8iNGraJkXbshFOpusTmgXMbkwZwglDMy7DhJltG0GYYmgOZTABHGql4WVjHCV8p6Drx/DMJYAfdXjTHqvkmpZQ1Xn9iM/ekdlnxaN2L88cd1rK1Wk7zy2dHBueRhO6OgoquaYlVMwrIZ2zf2D2MUiqc3xS0nflasqHQiR/aLaPzKVEJ6p1sO9OPWAnyp9XSr1chyatw+32dANWpguSArMYmrQ6x+dOphl2FM9pdG8OjVWvTanW0YqD6Mowz2oyJppBneubUrau9NzGTj6PvOm1ezBS9qzovEbpvADzShpdHe0o5x5/XnELNK+kUee4l3rA+p3XvpnhI296tQ6CuUem9OcVr7DzShpVRKPuzys5WWmz8o06MfcECfB8rbRZ+Ua9MZx7fDp3JlbarCrHJ92gKwMrvf1Lzitp5A/Y3Ifm/8v/wOysXxQKAAAAAElFTkSuQmCC"
            />}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
              title="HTML and CSS"
              description="Frontend"
            />
          </Card>
        </div>
        <div className="coursefull6_2">
          <Card
            style={{ width: 300 }}
            onClick={() => handleNavigation('/javascript')}
            cover={<img alt="example" style={{ height: '200px' }} src="data:image/png;base64,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"
            />}

            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
              title="JavaScript"
              description="Frontend"
            />
          </Card>
        </div>
        <div className="coursefull6_3">
          <Card
            style={{ width: 300 }}
            onClick={() => handleNavigation('/reactcase')}
            cover={<img alt="example" style={{ height: '200px' }} src="data:image/png;base64,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"
            />}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
              title="React JS"
              description="Frontend"
            />
          </Card>
        </div>
      </div>
      <div className="coursefull7">
        {message}
      </div>
    </div>
  );
}
