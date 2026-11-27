import { useState } from "react";
import logo from '../../assets/images/logo.svg';
import '../styles/login.css';

function Login() {

  // 현재 선택된 로그인 탭 관리
  const [loginTab, setLoginTab] = useState(1);

  return (
    <>
      <section className="login">

        {/* 공통 영역 : 쿠팡 로고 */}
        <img src={logo} alt="쿠팡 로고" />


        {/* 공통 영역 : 로그인 탭 버튼 */}
        <div className="login_tab">

          <button
            className="login_btn"
            onClick={() => setLoginTab(1)}
          >
            이메일 로그인
          </button>

          <button
            className="login_btn"
            onClick={() => setLoginTab(2)}
          >
            휴대폰번호 로그인
          </button>

          <button
            className="login_btn"
            onClick={() => setLoginTab(3)}
          >
            QR코드 로그인
          </button>

        </div>


        {/* =========================
            TAB 1. 이메일 로그인
        ========================= */}

        {loginTab === 1 && (
          <div id="tab1" className="email">

            {/* 아이디 입력창 */}
            <div className="input_box">
              <input
                type="text"
                id="user_id"
                name="user_id"
                placeholder="쿠팡 아이디(이메일)를 입력해주세요"
              />

              <button
                type="button"
                className="clear_btn"
                aria-label="아이디 지우기"
              >
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            </div>


            {/* 비밀번호 입력창 */}
            <div className="input_box">
              <input
                type="password"
                id="user_pw"
                name="user_pw"
                placeholder="비밀번호를 입력해주세요"
              />

              <button
                type="button"
                className="pw_btn"
                aria-label="비밀번호 보기"
              >
                <i className="fa-regular fa-eye"></i>
              </button>
            </div>


            {/* 로그인 옵션 */}
            <div className="login_option">

              <label className="auto_login">
                <input type="checkbox" id="auto_login" />
                <span>자동 로그인</span>
              </label>

              <p>아이디ㆍ비밀번호 찾기</p>

            </div>


            {/* 로그인 및 회원가입 버튼 */}
            <div className="btn">
              <button>로그인</button>
              <button>회원가입</button>
            </div>

          </div>
        )}


        {/* =========================
            TAB 2. 휴대폰번호 로그인
        ========================= */}

        {loginTab === 2 && (
          <div id="tab2" className="phone">
            <p>쿠팡 계정에 등록된 휴대폰번호를 입력해주세요.</p>

            {/* 휴대폰 번호 입력창 */}
            <div className="input_box">
              <input
                type="tel"
                id="user_phone"
                name="user_phone"
                placeholder="휴대폰 번호"
              />

              <button
                type="button"
                className="clear_btn"
                aria-label="휴대폰 번호 지우기"
              >
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            </div>

            <div className="btn">
              <button>인증번호 발송</button>
              <button>회원가입</button>
            </div>

          </div>
        )}


        {/* =========================
            TAB 3. QR코드 로그인
        ========================= */}

        {loginTab === 3 && (
          <div id="tab3" className="qr">

            <h2>QR코드</h2>

            {/* 추가할 내용은 여기에 작성 */}

          </div>
        )}


        {/* =========================
            공통 영역 : 패스키 로그인
        ========================= */}

        <fieldset>
          <legend>패스키를 쿠팡에 이미 등록했다면</legend>
          <button>패스키 로그인</button>
        </fieldset>


      </section>
    </>
  );
}

export default Login;