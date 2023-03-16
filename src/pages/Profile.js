import React from 'react';
import { FaBirthdayCake } from 'react-icons/fa';
import { FaFrog } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { MdAlternateEmail } from 'react-icons/md';
import { IoIosSchool } from 'react-icons/io';
import { IoBodyOutline } from 'react-icons/io5';

const Profile = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="profile scroll">
      <div className="inner">
        {/* 자기소개(인사팀) : 약력, 학력, 업무, 교육, 성격, MBTI */}
        <h2
          className="profile-title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          About me
        </h2>
        <div className="contents" data-aos="fade-up">
          <div className="profile-box">
            <div className="profile-box-me">
              <div className="profile-imgBox">
                <img
                  className="jaejinImg"
                  src={`${path}/images/jaejin2.jpg`}
                  alt="profile"
                />
              </div>
              <div className="nameBox">
                <FaFrog className="icon" type="img" />
                <p>김재진</p>
              </div>
              <div className="birthBox">
                <FaBirthdayCake className="icon" />
                <p>1993.09.03</p>
              </div>
              <div className="mapBox">
                <GrMapLocation className="icon" />
                <p>Korea, Daegu</p>
              </div>
              <div className="emailBox">
                <MdAlternateEmail />
                <p>rlawowls93@gmail.com</p>
              </div>
            </div>
            <div className="profile-box-intro">
              <div className="introTop">
                <h2 className="intro-title">FRONT-END</h2>
                <h1 className="intro-name">KIM JAE JIN</h1>
                <span className="intro-mainText">
                  매일매일 발전하는 <b>프론트엔드</b> 개발자 <b>김재진</b>입니다.
                </span>
                <br />
                <span className="intro-subText">
                  저는 세심하고 꼼꼼하며안정성을 중요시합니다.
                  <br /> 항상 행동하기 전에 계획을 짜고 실행합니다.
                  <br /> 그 후, 빠진 것은 없는지 두 번 이상 확인하고 문제가 생길
                  요소가 있는지 시뮬레이션합니다.
                  <br /> 같은 실수를 반복하는 일은 없도록 새겨두고 나 자신을
                  계속 되돌아보며 발전합니다.
                </span>
              </div>
              <div className="introBottom">
                <div className="education">
                  <div>
                    <IoIosSchool />
                    <span>Education</span>
                  </div>
                  <span className='className'>기업 요구를 반영한 프로젝트 중심 프론트엔드 React(리액트) 개발자 양성</span>
                  <span>2022.10 ~ 2023.4 그린 컴퓨터 아트 학원</span>
                  <span>2012.03 ~ 2016.02 계명대학교 경제금융학</span>
                </div>
                <div className="mbti">
                  <div>
                    <IoBodyOutline />
                    <span>mbti 뭔지</span>
                  </div>
                  <span>상세내용</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
