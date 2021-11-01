import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthRegisterView from "./view/Auth/Register";
import AuthLoginView from "./view/Auth/Login";
import MainView from "./view/Main";
import MypageHomeView from "./view/Mypage/Home";
import MypageLikeView from "./view/Mypage/like"
import MypageSettingView from "./view/Mypage/Setting";
import NearView from "./view/Near";
import ReviewCreateView from "./view/Review/Create";
import ReviewReferView from "./view/Review/Refer";
import ReviewUpdateView from "./view/Review/Update";
import SearchView from "./view/Search";


// auth
// -- login
// -- register
// main
// mypage
// -- home
// -- setting
// review
// -- create
// -- ?id : 식당고유번호
// -- ?id/update 
// near
// search

export default function App() {
  return (
    <Router>
      <div>
        <header>
          <span>POCNIC</span>
          <button>review 작성</button>
          <button>마이페이지</button>
          <button>리뷰작성</button>
        </header>
        <Switch>
          <Route path="/auth/register">
            <AuthRegisterView />
          </Route>
          <Route path="/auth/login">
            <AuthLoginView />
          </Route>
          <Route path="/mypage/home">
            <MypageHomeView />
          </Route>
          <Route path="/mypage/like">
           < MypageLikeView/>
          </Route>
          <Route path="/mypage/setting">
            <MypageSettingView />
          </Route>
          <Route path="/review/create">
            <ReviewCreateView />
          </Route>
          <Route path="/review/:id/update">
            <ReviewUpdateView />
          </Route>
          <Route path="/review/:id">
            <ReviewReferView />
          </Route>
          <Route path="/near">
            <NearView />
          </Route>
          <Route path="/search">
            <SearchView />
          </Route>
          <Route path="/">
            <MainView />
          </Route>
        </Switch>
        <footer></footer>
      </div>
    </Router>
  );
}
