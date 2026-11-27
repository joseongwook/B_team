import React from 'react'
// src/layout/Footer.jsx
import "../assets/styles/common.css";
import "../assets/styles/reset.css";
import Blog from "../assets/images/footer_icon_blog.svg";
import Facebook from "../assets/images/footer_icon_facebook.svg";
import Insta from "../assets/images/footer_icon_insta.svg";
import Footerlogo from "../assets/images/footer_logo.svg";
function Footer() {
  return (
    /* 공통 헤더 영역 */
    <footer className="footer">
      <div className="footer_area top">
        <div className="footer_info">
          <nav className="info_area">
            <p className="txt_p">회사 &amp; 서비스</p>
            <ul className="info_list">
              <li>회사소개</li>
              <li>Investor Relations</li>
              <li>인재채요</li>
              <li>공지사항</li>
              <li>고객의 소리</li>
              <li>판매자/제휴 문의</li>
              <li>제휴마케팅 / 광고안내</li>
            </ul>
          </nav>
          <nav className="info_area">
            <p className="txt_p">고객지원 &amp; 센터</p>
            <ul className="info_list">
              <li>고객센터</li>
              <li>1577-7011(유료)</li>
              <li>FAQ</li>
              <li>전자금융거래분쟁처리담당</li>
              <li>재무지급보증 안내</li>
              <li>안전거래센터</li>
              <li>사이트맵</li>
            </ul>
          </nav>
          <nav className="info_area">
            <p className="txt_p">약관 &amp; 보안</p>
            <ul className="info_list">
              <li>개인정보 처리방침</li>
              <li>이용약관</li>
              <li>전자금융거래이용약관</li>
              <li>정보보호/개인정보보호 인증</li>
              <li>쿠팡페이 이용약관</li>
              <li>신뢰관리센터</li>
            </ul>
          </nav>
          <nav className="info_area">
            <p className="txt_p">사업자 &amp; 법적 정보</p>
            <ul className="info_list">
              <li>상호명 및 호스팅 정보 제공 : 00(주)</li>
              <li>대표이사 : 000</li>
              <li>(000000)서울시 광진구 아차산로 000</li>
              <li>사업자 등록번호 : 000 - 00 - 00000</li>
              <li>통신판매업신고 : 0000-0000-0000</li>
              <li>사업자정보확인</li>
              <div className="site_select">
                <select aria-label="사이트 언어 또는 지역 선택" defaultValue="G">
                  <option value="Global Site">Global Site</option>
                </select>
              </div>
            </ul>
          </nav>
        </div>
        <div className="footer_sns">
          <ul className="sns_list">
            <li><img src={Blog} alt="블로그 아이콘"/></li>
            <li><img src={Facebook} alt="페이스북 아이콘"/></li>
            <li><img src={Insta} alt="인스타 아이콘"/></li>
          </ul>
        </div>
      </div>
      <div className="footer_area bottom">
        <div className="footer_logo_area">
          <img src={Footerlogo} alt="푸터로고"/>
        </div>
        <div className="footer_copy_area">
          <p className="footer_desc">
            사이버몰 내 판매되는 상품 중에는 쿠팡에 등록한 개별 판매자가 판매하는<br/>
            마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.<br/>
            마켓플레이스(오픈마켓) 상품의 경우 쿠팡은 통신판매중개자이며 통신판매의 당사자가 아닙니다.<br/>
            쿠팡은 상품, 거래정보 및 거래 등에 대하여 책임을 지지 않습니다.<br/>
            쿠팡은 소비자 보호와 안전거래를 위해 신뢰성상생센터(help@coupang.com)를 운영하고 있으며,<br/>
            관련 분쟁이 발생할 경우 별도의 분쟁 처리절차에 따라 분쟁이 처리됩니다.
          </p>
          <p className="footer_copy">
            Copyright &copy; Coupang Corp. 2010-2025 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;