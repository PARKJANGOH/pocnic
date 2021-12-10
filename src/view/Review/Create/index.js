import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import EXIF from 'exif-js'
import './index.css'
import StarRatingComponent from 'react-star-rating-component';
import { Form, Input, Button, Rate, Upload } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import PicturesWall from "../../../../src/components/picturewalls.js"; // 은하가 만든 component 사용
import axios from 'axios';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
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

export default function ReviewCreateView() {
    const onFinish = (values) => {
        console.log(values);
        const review = {
            "title": values.user.title,
            "content": values.user.content,
            "rating": values.rate,
            "bistroID": 1,
            "Reviewer": "jangyj"
        };
        axios.post('http://localhost:4000/review/create', review)
            .then(res => { alert(JSON.stringify(res)) });
    };

    return (
        <div className="wrapper">
            <div className="content">
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
                    <Form.Item name="rate" label="별점">
                        <Rate />
                    </Form.Item>
                    <Form.Item name={['user', 'content']} label="내용">
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};