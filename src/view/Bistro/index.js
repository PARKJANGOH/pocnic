import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../components/main.css";
import { Image } from "antd";
import Contents from "../../components/contents";
import axios from "axios";

//import { Route, Link, Switch } from "react-router-dom";
//import queryString from "query-string";

//import axios from "axios";

class BistroView extends Component {
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
        const total_list = await axios.get(`http://localhost:4000/review/reviewOf/2`);
        console.log(total_list);
        this.setState({ data: total_list.data })
    }



    //   _changePage = function(el) {
    //     this.setState({ page : el })
    //     sessionStorage.setItem('page', el);

    //     return this._getListData();
    //   }

    //   _setPage = function() {
    //     if(sessionStorage.page) {
    //       this.setState({ page : Number(sessionStorage.page) })
    //       return Number(sessionStorage.page);
    //     }

    //     this.setState({ page : 1 })
    //     return 1;
    //   }
    //   handleLike(num, content) {
    //     const { data } = this.state;

    //     this.setState({
    //       data: data.map(
    //         (info) =>
    //           num === info.id
    //             ? { ...info, like: 1 } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
    //             : info // 기존의 값을 그대로 유지
    //       ),
    //     });
    //   }

    render() {

        const list = this.state.data;
        // const { all_page, page } = this.state;
        const data = this.state.data;
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
                                    {/* <Image.PreviewGroup>
                                        <Image width={400} height={500} src={el.img} />
                                    </Image.PreviewGroup> */}
                                </div>

                                <div>{el.content}</div>
                                <div className="line" />
                            </>
                        );
                    })
                    : null}
            </div>
        );
    }
}

export default BistroView;
