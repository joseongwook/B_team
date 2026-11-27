import React from 'react'
// src/layout/Header.jsx
import "../assets/styles/common.css";
import "../assets/styles/reset.css";
import logoImg from "../assets/images/logo.svg";
import allMenu from "../assets/images/all_menu.svg"
import searCh from "../assets/images/search_icon.svg";
function Header() {
  return (
    /* 공통 헤더 영역 */
    <header className="header">
      <nav className="lnb_area">
        <ul className="lnb_list">
          <li>LOGIN</li>
          <li>JOIN</li>
          <li>BUSINESS</li>
          <li>HELP</li>
        </ul>
      </nav>
      <div className="logo_area">
        <h1>
          <img src={logoImg}  alt="사이트로고"/>
        </h1>
      </div>
      <nav className="all_menu_wrap"> 
        <div className="all_menu_area">
          <div className="all_menu"><img src={allMenu} alt="전체메뉴"/>전체보기</div>
          <div className="gnb_list_wrap">
            <ul className="gnb_list">
              <li>패션</li>
              <li>리빙</li>
              <li>식품</li>
              <li>디지털</li>
              <li>모빌리티</li>
              <li>취미</li>
              <li>패밀리</li>
              <li>쿠팡로켓</li>
            </ul>
          </div>
        </div>
        <div className="search_area">
          <form className="search_box">
              <input className="search_input" type="text" name="" id="" placeholder="검색어를 입력해주세요" />
              <button type="submit" className="search_btn" aria-label="검색"><img src={searCh} alt="" /></button>
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Header;