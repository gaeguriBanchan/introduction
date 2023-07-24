import React from 'react';

const Vision = () => {
  return (
    <section className="vision scroll">
      <div className="inner">
        {/* 1년 목표, 3년후 목표, 5년후 목표 */}
        <h2>Vision</h2>
        <div className="contetents">
          <ul className="vision-list">
            <li>
              <span>
                <b>트렌드를 따르는 개발자.</b>
              </span>
              <p>
                <strong>1년 후</strong> 저는 선배/동료의 장점과 기술을 제대로
                배워 전문성을 보완하고 회사와 업종의 트렌드를 잘 캐칭하고 일하는
                이해력 높은 개발자가 되겠습니다!
              </p>
            </li>
            <li>
              <span>
                <b>회사의 니즈를 만족시킬 개발자.</b>
              </span>
              <p>
                <strong>3년 후</strong> 저는 고객의 요구사항을 만족시킬 수 있는
                기술과 회사/ 동료들이 기대하는 바를 충족시킬 수 있는 열린
                마인드로 회사에 녹아들겠습니다.
              </p>
            </li>
            <li>
              <span>
                <b>감동을 줄 수 있는 개발자.</b>
              </span>
              <p>
                <strong>5년 후</strong> 저는 고객이 기대한 것 이상의 결과물로
                고객과 회사 모두에게 감동을 줄 수 있는 개발자가 될 수 있도록
                하겠습니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Vision;
