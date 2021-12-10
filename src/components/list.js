import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./main.css";
import { Image } from "antd";
import img1 from "../../src/img/1.jpg";
import img2 from "../../src/img/2.jpg";
import img3 from "../../src/img/3.jpg";
import Contents from "../../src/components/contents.js";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import axios from "axios";

//import { Route, Link, Switch } from "react-router-dom";
//import queryString from "query-string";

//import axios from "axios";

/*<span
onClick={() => {
  this.setState({
    data: list.map(
      (info) =>
        el.id === info.id
          ? { ...info, like: info.like === 1 ? 0 : 1 } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 유지
    ),
  });
}}
>
{el.like ? <HeartFilled /> : <HeartOutlined />}

 <Image.PreviewGroup>
                      <Image width={400} height={500} src={el.img} />
                    </Image.PreviewGroup>
*/
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      //   page: 1,
      //   limit: 10,
      //   all_page: [],
    };
  }

  componentWillMount() {
    this._getListData();
    //this._setPage();
  }

  _getListData = async function () {
    //데이터 가져오기
    const total_list = await axios.get(`http://localhost:4000/review/mypage`);
    console.log(total_list);
    this.setState({ data: total_list.data });
  };

  /* componentWillMount() {
    this._getListData();
    this._setPage();
  }*/

  /*_getListData = async function() {
    const { limit } = this.state;
    const page = this._setPage();


    // Board 테이블 데이터 전체 수
    const total_cnt = await axios('/get/board_cnt');

    // 데이터 가져오기
    const total_list = await axios('/get/board', {
      method : 'POST',
      headers: new Headers(),
      data : { limit : limit, page : page }
    })

    // 전체 페이지 수 구하기
    let page_arr = [];

    for(let i = 1; i <= Math.ceil(total_cnt.data.cnt / limit); i++) {
      page_arr.push(i);
    }

    this.setState({ data : total_list, all_page : page_arr })
  }
  */

  /*_changePage = function(el) {
    this.setState({ page : el })
    sessionStorage.setItem('page', el);

    return this._getListData();
  }

  _setPage = function() {
    if(sessionStorage.page) {
      this.setState({ page : Number(sessionStorage.page) })
      return Number(sessionStorage.page);
    }

    this.setState({ page : 1 })
    return 1;
  }*/
  handleLike(num, content) {
    const { data } = this.state;

    this.setState({
      data: data.map(
        (info) =>
          num === info.id
            ? { ...info, like: 1 } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
            : info // 기존의 값을 그대로 유지
      ),
    });
  }

  render() {
    const list = this.state.data;
    // const { all_page, page } = this.state;

    return (
      <div className="List">
        <div className="list_grid list_tit">
          <div> 제목 </div>
          <div> 조회수 </div>
          <div className="acenter"> 날짜 </div>
        </div>
        {list
          ? list.map((el, key) => {
              const view_url = "/view/" + el.id;
              return (
                <>
                  <div className="list_grid list_data" key={key}>
                    <div>
                      {" "}
                      <Link to={view_url}> {el.title} </Link>{" "}
                    </div>
                    <div> </div>
                    <div className="acenter"> {el.rating} </div>
                  </div>

                  <Contents txt={el.content} />
                  <div className="line" />
                </>
              );
            })
          : null}
      </div>
    );
  }
}

export default List;
