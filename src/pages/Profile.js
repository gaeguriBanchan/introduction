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
                  저는 호기심이 많고 창의적으로 생각합니다.
                  <br /> 항상 긍정적으로 생각하고 어려운 상황에서도 두려움보다 해결책을 생각합니다.
                  <br /> 풍부한 상상력과 창의력을 바탕으로 열정적으로 일하며 어떠한 일도 즐겁게 받아들입니다. 
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
                    <span>ENFP-T</span>
                  </div>
                  <span><b>호기심</b>: 상상력이 풍부하고 열린 마음을 가진 이 사람들은 새로운 아이디어, 경험 및 모험을 찾기 위한 모험을 두려워하지 않습니다.</span>
                  <span><b>훌륭한 커뮤니케이터</b>: 모든 종류의 사람들과 긍정적이고 즐거운 대화를 나눌 수 있는 능력을 제공합니다.</span>
                  <span><b>선량함</b>: 거의 모든 사람과 잘 지내려고 노력하며 그들의 지인과 친구들의 범위는 종종 광범위하게 확장됩니다.</span>
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
