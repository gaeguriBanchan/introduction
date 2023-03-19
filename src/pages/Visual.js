import React, { useRef } from 'react';
import Anime from '../assets/Anime';

const Visual = () => {
  const path = process.env.PUBLIC_URL;
  const style = {
    width: 100,
    height: 100,
    background: 'green',
    position: 'absolute',
    left: 100,
    top: 100,
  };
  const box = useRef(null);
  return (
    <div className="visual scroll">
      <div className="inner">
        <div className="intro">
          <h1 className="intro-title">
            언제나 즐겁고 유쾌한 개발자 <b>김재진</b>입니다.
          </h1>
          <p>
            개발은 고통과 고뇌의 연속입니다. 하지만 저는 포기하지 않고 제 특유의
            재치와 센스로 역경을 헤쳐나가겠습니다.
          </p>
          {/* <h1>Hello,</h1>
          <h1>I'm KimJaeJin</h1> */}
        </div>
        <img
          className="profileImg"
          // src={`${path}/images/profile (5).jpg`}
          src={`${path}/images/profile (6).png`}
          alt="visual"
        />
        {/* <img src="./images/visual.png" alt="visual" /> */}
        {/* Anime 샘플 */}
        {/* <div
          ref={box}
          className="box"
          style={style}
          onClick={(e) => {
            // 애니메이션 대상, 옵션
            // new Anime(e.target, {
            //   prop: "left",
            //   value: 400,
            //   duration: 500,
            // });
            // new Anime(window, {
            //   prop: "scroll",
            //   value: 2000,
            //   duration: 1500,
            // });
            new Anime(box.current, {
              prop: "left",
              value: 400,
              duration: 500,
              callback: () => {
                new Anime(box.current, {
                  prop: "top",
                  value: 400,
                  duration: 500,
                  callback: () => {
                    alert("완료");
                  },
                });
              },
            });
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Visual;
