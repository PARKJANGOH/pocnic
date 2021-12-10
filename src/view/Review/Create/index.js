import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, Component } from 'react';
import EXIF from 'exif-js'
import './index.css'
import StarRatingComponent from 'react-star-rating-component';
import { Form, Input, Button, Rate, Upload } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import PicturesWall from "../../../../src/components/picturewalls.js"; // 은하가 만든 component 사용
import axios from 'axios';
import KakaoMapSearch from './kakaoMapSearch';
import KakaoMap from './kakaomap';

const { Search } = Input;


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 21,
    },
};

const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

let curBistroID = -1;
const review = {};

export default function ReviewCreateView() {
    const [searchValue, setSearchValue] = useState("");

    const onSearch = (value) => {
        console.log("search value is ", value);
        setSearchValue("포항 " + value); // 일단 포항에서만 검색 되도록 앞에 포항을 넣는다.
    }

    const onFinish = async (values) => {

        console.log("user is : ", values.user);

        const user = {
            "bistroName": values.user.bistroName
        };
        let getBistroID = async (values) => {
            const res = await axios.get('http://localhost:4000/bistro/find', {
                params: {
                    bistroName: values.user.bistroName // => 나중에 bistro name이 아니라 카카오맵에서 가져온 placeID로 검색하도록 해야함.
                }
            })
            if (res.data == '') { // 새로운 이름의 bistro 일 때 res의 data가 ''로 비어있다.
                await axios.post('http://localhost:4000/bistro/create', user)
                    .then(res2 => {
                        alert(`${res2.data.bistroName} 식당을 bistro 테이블 ID:${res2.data.id} 에 저장하였습니다.`)
                        curBistroID = res2.data.id;
                    });
            }
            else {
                alert(`${res.data.bistroName} 식당이 bistro 테이블에 존재합니다.`);
                curBistroID = res.data.id;
            }
            //res.data 에 들어있음
        }
        await getBistroID(values);


        const review = {
            "title": values.user.title,
            "content": values.user.content,
            "rating": values.user.rate,
            "bistroID": curBistroID,
            "Reviewer": "yoon55s"
        }

        await axios.post('http://localhost:4000/review/create', review)
            .then(res => {
                console.log("결과:", res.data);
                alert("게시물이 등록되었습니다!");
                document.location.href = "/main"
            })


    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Form {...layout} name="nest-messages" layout="vertical" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name="upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                // extra="longgggggggggggggggggggggggggggggggggg"
                >
                    {/* <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>사진 업로드</Button>
            </Upload> */}
                    <PicturesWall />
                </Form.Item>
                <Form.Item
                    name={['user', 'bistroName']}
                    label="식당 이름"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'place']} lable="장소">
                    {/* <KakaoMapSearch/> */}
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                    <br />
                    <KakaoMap search={searchValue} />
                </Form.Item>
                <Form.Item
                    name={['user', 'title']}
                    label="제목"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'rate']} label="별점">
                    <Rate />
                </Form.Item>
                <Form.Item name={['user', 'content']} label="내용">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};