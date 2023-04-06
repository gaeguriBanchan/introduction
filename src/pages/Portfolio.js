import React from 'react';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Portfolio = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="portfolio scroll">
      <div className="inner">
        <h2 className="title" data-aos="fade-up">
          Portfolio
        </h2>
        <div className="contents">
          {/* 팀프로젝트 */}
          <div className="portfolio-box">
            <h3 className="teamProject" data-aos="fade-up">
              Team Project
            </h3>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="https://github.com/gaeguriBanchan/bookstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/교보미니.gif`} alt="project" />
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <div className="right-main">
                  <span className="team-title">교보문고 미니프로젝트</span>
                  <span className="day">2022.12.16 ~ 2022.12.23</span>
                  <span className="skill">React Bootstrap</span>
                </div>
                <ul className="portfolio-team-list">
                  <li className="info-main">
                    교보문고 사이트를 참조하여 도서를 검색하고 해당 도서에 대한
                    상세 내용을 조회할 수 있는 웹사이트를 만들었습니다.
                  </li>
                  <li className="info-sub">
                    - 메인 페이지에서 "오늘의 선택" 항목을 통해 사용자에게
                    도서를 추천하는 기능을 제공합니다.
                    <br />- 리스트에서 원하는 책을 검색할 수 있습니다.
                  </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="https://github.com/gaeguriBanchan/burgerwang/tree/master"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/버거왕.gif`} alt="project" />
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <div className="right-main">
                  <span className="team-title">버거킹 미니프로젝트</span>
                  <span className="day">2023.01.11 ~ 2023.02.06</span>
                  <span className="skill">React Tailwind Axios Redux </span>
                </div>
                <ul className="portfolio-team-list">
                  <li className="info-main">
                    버거킹을 참고해서 패스트푸드 주문 프로그램을 만들었습니다.
                    회원가입 후 자신의 주소를 저장하고 음식을 장바구니에 담아
                    주문합니다.
                  </li>
                  <li className="info-sub">
                    - 회원가입, 회원정보 수정, 탈퇴가 가능하고 자신의 이전
                    주문정보 확인이 가능합니다.
                    <br />- 장바구니에 담긴 음식들의 메뉴변경, 추가가 가능하고
                    메뉴의 수량 총 금액 확인이 가능합니다.
                  </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="https://github.com/gaeguriBanchan/dietdiary"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/나의식단일지.gif`} alt="project" />
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <div className="right-main">
                  <span className="team-title">식단일지 미니프로젝트</span>
                  <span className="day">2023.02.08 ~ 2023.03.03</span>
                  <span className="skill">React Tailwind Axios Redux </span>
                </div>
                <ul className="portfolio-team-list">
                  <li className="info-main">
                    식단관리를 통한 건강관리 프로그램을 만들었습니다. 자신이
                    섭취하는 음식, 복용 중인 약물들을 기록하여 올바른 식습관을
                    가지도록 합니다.
                  </li>
                  <li className="info-sub">
                    - 섭취한 음식들을 입력하고 기록하며, 하루에 섭취한 칼로리를
                    계산하고 목표를 달성했는지 확인 가능합니다.
                    <br />- 섭취중인 보충제, 건강보조식품, 약물 등을 입력하고
                    당일 목표 섭취량을 섭취했는지 확인합니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 개인 스터디 프로젝트 */}
          <div className="portfolio-box">
            <h3>Study Project</h3>
            {/* Swiper 배치 */}
            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={0}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   type: 'fraction',
              // }}
              navigation={true}
              breakpoints={{
                860: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                960: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1180: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="portfolio-slide"
            >
              <SwiperSlide>
                <a
                  href="https://gaeguribanchan.github.io/hansalim/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="hansalim"
                >
                  <img src={`${path}/images/hansalim.png`} alt="portfolio" />
                </a>
                <h5 className="projectName">한살림장보기 클론코딩</h5>
                <div className="port-btns">
                  <a
                    href="https://gaeguribanchan.github.io/hansalim/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btn"
                    alt="hansalim"
                  >
                    WORK
                  </a>
                  <a
                    href="https://github.com/gaeguriBanchan/hansalim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btn"
                    alt="hansalim"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://shop.hansalim.or.kr/shopping/spMain.do"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btn"
                    alt="hansalim"
                  >
                    Orign
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://gaeguribanchan.github.io/stx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="hansalim"
                >
                  <img src={`${path}/images/stx건설.png`} alt="portfolio" />
                </a>
                <h5 className="projectName">STX건설 클론코딩</h5>
                <div className="port-btns">
                  <a
                    href="https://gaeguribanchan.github.io/stx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btn"
                    alt="hansalim"
                  >
                    WORK
                  </a>
                  <a
                    href="https://github.com/gaeguriBanchan/stx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btn"
                    alt="hansalim"
                  >
                    GitHub
                  </a>
                  <a
                    href="http://www.stxconst.co.kr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btn"
                    alt="hansalim"
                  >
                    Orign
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://gaeguribanchan.github.io/findWally/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="hansalim"
                >
                  <img src={`${path}/images/findWally.png`} alt="portfolio" />
                </a>
                <h5 className="projectName">월리를 찾아라 미니게임</h5>
                <div className="port-btns">
                  <a
                    href="https://gaeguribanchan.github.io/findWally/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btn"
                    alt="hansalim"
                  >
                    WORK
                  </a>
                  <a
                    href="https://github.com/gaeguriBanchan/findWally"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btn"
                    alt="hansalim"
                  >
                    GitHub
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://gaeguribanchan.github.io/hansalim/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="hansalim"
                >
                  <img src={`${path}/images/hansalim.png`} alt="portfolio" />
                </a>
                <h5 className="projectName">한살림장보기 클론코딩</h5>
                <div className="port-btns">
                  <a
                    href="https://gaeguribanchan.github.io/hansalim/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btn"
                    alt="hansalim"
                  >
                    WORK
                  </a>
                  <a
                    href="https://github.com/gaeguriBanchan/hansalim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btn"
                    alt="hansalim"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://shop.hansalim.or.kr/shopping/spMain.do"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btn"
                    alt="hansalim"
                  >
                    Orign
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://gaeguribanchan.github.io/hansalim/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="hansalim"
                >
                  <img src={`${path}/images/hansalim.png`} alt="portfolio" />
                </a>
                <h5 className="projectName">한살림장보기 클론코딩</h5>
                <div className="port-btns">
                  <a
                    href="https://gaeguribanchan.github.io/hansalim/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btn"
                    alt="hansalim"
                  >
                    WORK
                  </a>
                  <a
                    href="https://github.com/gaeguriBanchan/hansalim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btn"
                    alt="hansalim"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://shop.hansalim.or.kr/shopping/spMain.do"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btn"
                    alt="hansalim"
                  >
                    Orign
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
