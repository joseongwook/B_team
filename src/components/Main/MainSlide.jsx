import React from 'react'
import '../styles/main.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation, Autoplay, Scrollbar} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Mainslideimg01 from '../images/main/main_slide_img01.jpg';
import Mainslideimg02 from '../images/main/main_slide_img02.jpg';
import Mainslideimg03 from '../images/main/main_slide_img03.jpg';
import Mainslideimg04 from '../images/main/main_slide_img04.jpg';
import Mainslideimg05 from '../images/main/main_slide_img05.jpg';
function MainSlide() {
  return (
    <section className="section_wrap main_slide">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={16} //슬라이드간격
          slidesPerView={3.9} //보여지는 슬라이드 개수
          centeredSlides={true}//
          loop={true}
          navigation //네비게이션메뉴
          autoplay={{ delay: 3000 }} //자동슬라이드시간
          pagination={{ type: 'fraction' }}
          scrollbar={{ draggable: true }} //터치스크롤 가능 여부
          className='main_slide' //슬라이드서식 적용하고 싶으면 작성하기
        >
          <SwiperSlide>
            <img src={Mainslideimg01} alt="슬라이드01"/>
            <div className='text_box'>
              <p className='txt_p'>
                <span className=''>산지직송 신선 과일</span><br/>
                이번 주 최저가 도전! 월간특가
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Mainslideimg02} alt="슬라이드02"/>
            <div className='text_box'>
              <p className='txt_p'>
                <span className=''>엄선된 프리미엄 정육</span><br/>
                한우·수입육 최대 50% 할인
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Mainslideimg03} alt="슬라이드03"/>
             <div className='text_box'>
              <p className='txt_p'>
                <span className=''>시원하게 즐기는 음료·간식</span><br/>
                인기 브랜드 타임세일 워크
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Mainslideimg04} alt="슬라이드04"/>
            <div className='text_box'>
              <p className='txt_p'>
                <span className=''>꼭 필요한 생필품 모음</span><br/>
                쟁여두기 좋은 파격 특가전
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Mainslideimg05} alt="슬라이드05"/>
            <div className='text_box'>
              <p className='txt_p'>
                <span className=''>우리 아이를 위한 특별 선물</span><br/>
                완구·유아동 기획전 오픈
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Mainslideimg01} alt="슬라이드01"/>
            <div className='text_box'>
              <p className='txt_p'>
                <span className=''>산지직송 신선 과일</span><br/>
                이번 주 최저가 도전! 월간특가
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Mainslideimg02} alt="슬라이드02"/>
            <div className='text_box'>
              <p className='txt_p'>
                <span className=''>산지직송 신선 과일</span><br/>
                이번 주 최저가 도전! 월간특가
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Mainslideimg03} alt="슬라이드03"/>
            <div className='text_box'>
              <p className='txt_p'>
                <span className=''>산지직송 신선 과일</span><br/>
                이번 주 최저가 도전! 월간특가
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Mainslideimg04} alt="슬라이드04"/>
            <div className='text_box'>
              <p className='txt_p'>
                <span className=''>산지직송 신선 과일</span><br/>
                이번 주 최저가 도전! 월간특가
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Mainslideimg05} alt="슬라이드05"/>
            <div className='text_box'>
              <p className='txt_p'>
                <span className=''>산지직송 신선 과일</span><br/>
                이번 주 최저가 도전! 월간특가
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
    </section>
  );
}

export default MainSlide;