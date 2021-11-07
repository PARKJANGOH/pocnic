import { Input, Space } from 'antd';
import { Button, Tooltip } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
import { List, Avatar } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import KakaoMap from './kakaoMap';
import SampleImage from "../../../src/img/음식사진샘플.jpg";


import './index.css'

const { Search } = Input;

// const [searchWord, setSearchWord] = useState();
const onSearch = value => console.log(value);

const listData = [];
for (let i = 0; i < 2; i++) {
    listData.push({
        href: 'https://postech.ac.kr',
        title: `엄청 맛있는 식당 ${i + 1}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
            '주소: 대한민국 포항시 남구 청암로 77 포항공과대학교',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel hendrerit diam, ac faucibus diam. Vivamus sapien ante, euismod id semper a, lobortis sed nulla.',
    });
}

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);



export default function NearView() {
    const [nearKm, setNearKm] = useState(5);

    const onDownButtonClick = () => {
        if (nearKm > 0)
            setNearKm(nearKm - 1);
    }
    const onUpButtonClick = () => {
        if (nearKm > 0)
            setNearKm(nearKm + 1);
    }


    return (
        <div className="nearContainer">
            <div className="items nearleft">
                <Space direction="vertical">
                    <Search placeholder="검색어를 입력해주세요." allowClear onSearch={onSearch} enterButton />
                    <div className="MapSection">
                        지도 영역
                        <KakaoMap></KakaoMap>
                    </div>
                    <div className="ButtonSection">
                        <Row justify="center">
                            <Space align="center">
                                <Button type="primary" shape="circle" size="large" icon={<DownOutlined />} onClick={onDownButtonClick} >
                                </Button>
                                반경 {nearKm} km
                                <Button type="primary" shape="circle" size="large" icon={<UpOutlined />} onClick={onUpButtonClick}>
                                </Button>
                            </Space>
                        </Row>
                    </div>

                </Space>
            </div >
            <div className="items nearright">



                <Space direction="vertical">
                    <Row justify="center">
                        <span>해당 위치에서 {nearKm} km 이내의 맛집 리뷰</span>
                    </Row>
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 3,
                        }}
                        dataSource={listData}
                        footer={
                            <div>
                                <b>원하는 맛집이 없나요?</b> (footer part)
                            </div>
                        }
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                actions={[
                                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                ]}
                                extra={
                                    <img
                                        width={150}
                                        alt="logo"
                                        src={SampleImage}
                                    />
                                }
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </List.Item>
                        )}
                    />
                </Space>
            </div>
        </div >
    );
}