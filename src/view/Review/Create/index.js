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

export default function ReviewCreateView() {
    const onFinish = (values) => {

        const user = {
            "bistroName": values.user.bistroName
        };

        axios.get('http://localhost:4000/bistro/find', {
            params: {
                bistroName: values.user.bistroName // => 나중에 bistro name이 아니라 카카오맵에서 가져온 placeID로 검색하도록 해야함.
            }
        })
        .then(res => {
            alert(JSON.stringify(res));
            if (res.data == '') { // 새로운 이름의 bistro 일 때 res의 data가 ''로 비어있다.
                axios.post('http://localhost:4000/bistro/create', user)
                    .then(res => { alert(JSON.stringify(res)) });
            }
            //res.dataValues 에 들어있음
        });
        
        
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

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
    );
};
// class ReviewCreateView extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             file: null,
//             wtmX: null,
//             wtmY: null,
//             imagePreView: null,

//             selectedFiles: null,
//             rating: 4,
//         }
//     }
//     componentDidUpdate = prevState => {
//         console.log("컴포넌트가 업데이트 되었습니다!");
//         if (prevState.selectedFiles !== this.state.selectedFiles) {
//             this.renderPreviews();
//         }
//     };

//     renderPreviews = () => {
//         const selectedFiles = this.state.selectedFiles;
//         console.log(selectedFiles);
//         if (selectedFiles) {
//             const previewContainer = document.getElementById("preview-container");

//             // 이미 보이는 미리보기 이미지 모두 삭제
//             while (previewContainer.hasChildNodes()) {
//                 previewContainer.removeChild(previewContainer.firstChild);
//             }

//             for (let i = 0; i < selectedFiles.length; i++) {
//                 const preview = document.createElement("img");
//                 preview.id = `preview_${i}`;
//                 preview.style.height = "200px";
//                 preview.style.padding = "10px";
//                 preview.style.margin = "10px";
//                 preview.style.backgroundColor = "#ffed00";
//                 preview.style.color = "#333";
//                 preview.style.display = "inline-block";
//                 preview.style.textAlign = "center";
//                 previewContainer.appendChild(preview);
//                 const reader = new FileReader();
//                 reader.onload = function (e) {
//                     preview.src = reader.result;
//                 };
//                 reader.readAsDataURL(selectedFiles[i]);
//             }
//         }
//     };

//     fileChangedHandler(e) {
//         const files = e.target.files;

//         console.log("fileChangedHandler에 진입! e.target.files는", files);

//         this.setState({
//             selectedFiles: files
//         });
//     };

//     getEXIF(imageFile) {
//         this.setState({
//             file: imageFile,
//         })

//         var tags = null;
//         var _wtmX = null;
//         var _wtmY = null;

//         EXIF.getData(imageFile, () => {

//             tags = EXIF.getAllTags(imageFile);

//             var exifLong = tags.GPSLongitude;
//             var exifLat = tags.GPSLatitude;
//             var exifLongRef = tags.GPSLongitudeRef;
//             var exifLatRef = tags.GPSLatitudeRef;

//             var latitude = null;
//             var longitude = null;


//             if (exifLat != null && exifLong != null) {
//                 if (exifLatRef === "S") {
//                     latitude = (exifLat[0] * -1) + (((exifLat[1] * -60) + (exifLat[2] * -1)) / 3600);
//                 } else {
//                     latitude = exifLat[0] + (((exifLat[1] * 60) + exifLat[2]) / 3600);
//                 }

//                 if (exifLongRef === "W") {
//                     longitude = (exifLong[0] * -1) + (((exifLong[1] * -60) + (exifLong[2] * -1)) / 3600);
//                 } else {
//                     longitude = exifLong[0] + (((exifLong[1] * 60) + exifLong[2]) / 3600);
//                 }
//             } else {
//                 // getMarkerMap();
//                 console.log("exif에서 위도 경도 얻을 수 없음");
//             }


//             if (latitude != null && longitude != null) {
//                 _wtmX = latitude;
//                 _wtmY = longitude;
//                 // makingMap(_wtmX, _wtmY, imageFile); // map 만드는 함수 호춤
//             }




//         });
//     }

//     onStarClick(nextValue, prevValue, name) {
//         this.setState({ rating: nextValue });
//     }

//     render() {

//         const { rating } = this.state;

//         return (
//             <div id="allContainer" >
//                 {/* 아래는 사진 EXIF 가져오기 위한 코드 두줄 */}
//                 <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/exif-js"></script>
//                 <script src="vendors/exif-js/exif-js"></script>
//                 <form onSubmit={function (e) {
//                     e.preventDefault(); // 기존 onSubmit 기능 prevent => 새로고침 안되도록!

//                     // var date = new Date();
//                     // var curDate = date.toLocaleString();
//                     // var postData = {
//                     //     title: e.target.title.value,
//                     //     content: e.target.content.value,
//                     //     image: this.state.file,
//                     //     id: this.props.user.userId,
//                     //     posted_date: curDate,
//                     //     pw: this.props.user.userPw,
//                     //     lat: this.state.wtmX,
//                     //     lng: this.state.wtmY,
//                     // }

//                     // console.log("this image's lat and lng is", this.state.wtmX, this.state.wtmY);


//                     // if (postData.title === "") {
//                     //     alert('제목을 입력하세요.')
//                     // } else if (postData.content === "") {
//                     //     alert('내용을 입력해주세요.') // 나중에 내용 비어도 괜찮냐고 물어보는 confirm 띄우기
//                     //     // if(confirm){
//                     //     //     postDate.content="";
//                     //     // }
//                     // } else if (postData.image === "") {
//                     //     alert('사진이 없습니다.')
//                     // } else {
//                     //     this.props.onSubmit(postData);
//                     //     alert('Posted');
//                     // }
//                 }.bind(this)}>
//                     <div className="item">
//                         <label for="images">사진</label>
//                         <div id="preview-container" style={{ padding: "50px", overflowX: "auto", whiteSpace: "nowrap", textAlign: "center" }} />
//                         <input type="file" id="image" name="image" accept="image/*" multiple onChange={function (e) {
//                             if (e.target.files) {
//                                 this.fileChangedHandler(e);
//                                 this.getEXIF(e.target.files[0]); // 첫번째 사진의 위치 정보 가져옴.
//                             }
//                         }.bind(this)}></input>
//                     </div>
//                     <div className="item">
//                         <label for="title">제목</label>
//                         <input type="text" name="title" placeholder="제목"></input>
//                     </div>
//                     {/* <p>
//                         작성자 : <input type="text" name="id" placeholder="작성자명"></input>

//                         &nbsp; &nbsp; &nbsp; 비밀번호 : <input type="password" name="pw" placeholder="비밀번호"></input>
//                     </p> */}
//                     <div className="item">
//                         <label for="content">내용</label>
//                         <textarea style={{ width: '500px', height: '200px' }}
//                             name="content" placeholder="내용을 입력해주세요"></textarea>
//                     </div>
//                     <div className="item">
//                         <StarRatingComponent
//                             name="rate1"
//                             starCount={5}
//                             value={rating}
//                             onStarClick={this.onStarClick.bind(this)}
//                         />
//                     </div>
//                     <div className="item">
//                         <input type="submit" value="Post"></input>
//                     </div>
//                 </form>
//             </div>
//         );
//     }


// }

// export default ReviewCreateView;