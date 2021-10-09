import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import React, { Component } from 'react';
import EXIF from 'exif-js'

class ReviewCreateView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            wtmX: null,
            wtmY: null,
        }
    }

    readMultipleImage(input) {
        var viewMultipleImage = null;

        if (input.files) {
            console.log(input.filse);

            const fileArr = Array.from(input.files);

            // const $colDiv1 = document.createElement("div")
            // const $colDiv2 = document.createElement("div")
            // $colDiv1.classList.add("column")
            // $colDiv2.classList.add("column")


            viewMultipleImage = fileArr.forEach((file, index) => {
                const reader = new FileReader()
                var imgsrc = null;


                reader.onload = e => {
                    imgsrc = e.target.result;

                    // $imgDiv.style.width = ($img.naturalWidth) * 0.2 + "px"
                    // $imgDiv.style.height = ($img.naturalHeight) * 0.2 + "px"
                }

                console.log(file.name);

                reader.readAsDataURL(file)

                return (
                    <div style={{}}>
                        <img className="image" src={imgsrc}></img>
                        <label className="image-label">{file.name}</label>
                    </div>
                );
            })
        }

        return (
            <div id="multipleImageContainer" >
                {viewMultipleImage}
            </div>
        );
    }

    getEXIF(imageFile) {
        this.setState({
            file: imageFile,
        })

        var tags = null;
        var _wtmX = null;
        var _wtmY = null;

        EXIF.getData(imageFile, () => {

            tags = EXIF.getAllTags(imageFile);

            var exifLong = tags.GPSLongitude;
            var exifLat = tags.GPSLatitude;
            var exifLongRef = tags.GPSLongitudeRef;
            var exifLatRef = tags.GPSLatitudeRef;

            var latitude = null;
            var longitude = null;


            if (exifLat != null && exifLong != null) {
                if (exifLatRef === "S") {
                    latitude = (exifLat[0] * -1) + (((exifLat[1] * -60) + (exifLat[2] * -1)) / 3600);
                } else {
                    latitude = exifLat[0] + (((exifLat[1] * 60) + exifLat[2]) / 3600);
                }

                if (exifLongRef === "W") {
                    longitude = (exifLong[0] * -1) + (((exifLong[1] * -60) + (exifLong[2] * -1)) / 3600);
                } else {
                    longitude = exifLong[0] + (((exifLong[1] * 60) + exifLong[2]) / 3600);
                }
            } else {
                // getMarkerMap();
                console.log("exif에서 위도 경도 얻을 수 없음");
            }


            if (latitude != null && longitude != null) {
                _wtmX = latitude;
                _wtmY = longitude;
                // makingMap(_wtmX, _wtmY, imageFile); // map 만드는 함수 호춤
            }




        });
    }

    render() {
        return (
            <div>
                {/* 아래는 사진 EXIF 가져오기 위한 코드 두줄 */}
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/exif-js"></script>
                <script src="vendors/exif-js/exif-js"></script>
                <form onSubmit={function (e) {
                    e.preventDefault(); // 기존 onSubmit 기능 prevent => 새로고침 안되도록!

                    var date = new Date();
                    var curDate = date.toLocaleString();
                    var postData = {
                        title: e.target.title.value,
                        content: e.target.content.value,
                        image: this.state.file,
                        id: this.props.user.userId,
                        posted_date: curDate,
                        pw: this.props.user.userPw,
                        lat: this.state.wtmX,
                        lng: this.state.wtmY,
                    }

                    console.log("this image's lat and lng is", this.state.wtmX, this.state.wtmY);


                    if (postData.title === "") {
                        alert('제목을 입력하세요.')
                    } else if (postData.content === "") {
                        alert('내용을 입력해주세요.') // 나중에 내용 비어도 괜찮냐고 물어보는 confirm 띄우기
                        // if(confirm){
                        //     postDate.content="";
                        // }
                    } else if (postData.image === "") {
                        alert('사진이 없습니다.')
                    } else {
                        this.props.onSubmit(postData);
                        alert('Posted');
                    }
                }.bind(this)}>
                    <p>
                        사진을 선택해주세요 : <input type="file" id="image" name="image" accept="image/*" multiple onChange={function (e) {

                            if (e.target.files) {
                                this.readMultipleImage(e.target);
                                this.getEXIF(e.target.files[0]);
                            }
                        }.bind(this)}></input>
                    </p>
                    <p>
                        제목 : <input type="text" name="title" placeholder="제목"></input>
                    </p>
                    {/* <p>
                        작성자 : <input type="text" name="id" placeholder="작성자명"></input>
                    
                        &nbsp; &nbsp; &nbsp; 비밀번호 : <input type="password" name="pw" placeholder="비밀번호"></input>
                    </p> */}
                    <p>
                        <textarea style={{ width: '500px', height: '200px' }}
                            name="content" placeholder="내용을 입력해주세요"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Post"></input>
                    </p>
                </form>
            </div>
        );
    }


}

export default ReviewCreateView;