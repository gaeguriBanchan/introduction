import React from 'react';

const Skills = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="skills scroll">
      <div className="inner">
        {/* 기술적 역량: 기술적 내용설명,자격증,운전면허 등..  */}
        <h2>Skills</h2>
        <div className="contents">
          <ul className="skills-list">
            <li data-aos="fade-up" data-aos-duration="300" data-aos-delay="300">
              <img src={`${path}/images/skill-html.png`} alt="skill" />
              <div className="skill">
                <div className="skill-description">
                  <span>HTML</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-value" style={{ width: '85%' }}></div>
                </div>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-duration="300" data-aos-delay="400">
              <img src={`${path}/images/skill-css.png`} alt="skill" />
              <div className="skill">
                <div className="skill-description">
                  <span>CSS</span>
                  <span>91%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-value" style={{ width: '91%' }}></div>
                </div>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-duration="300" data-aos-delay="500">
              <img src={`${path}/images/skill-js.png`} alt="skill" />
              <div className="skill">
                <div className="skill-description">
                  <span>Javascript</span>
                  <span>83%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-value" style={{ width: '83%' }}></div>
                </div>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-duration="300" data-aos-delay="600">
              <img
                src={`${path}/images/skill-react.png`}
                alt="skill"
                // data-aos="fade-up"
                // data-aos-duration="300"
                // data-aos-delay="600"
              />
              <div className="skill">
                <div className="skill-description">
                  <span>React</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-value" style={{ width: '80%' }}></div>
                </div>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-duration="300" data-aos-delay="700">
              <img src={`${path}/images/skill-git.png`} alt="skill" />
              <div className="skill">
                <div className="skill-description">
                  <span>git</span>
                  <span>76%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-value" style={{ width: '76%' }}></div>
                </div>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-duration="300" data-aos-delay="800">
              <img src={`${path}/images/skill-redux.png`} alt="skill" />
              <div className="skill">
                <div className="skill-description">
                  <span>redux</span>
                  <span>70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-value" style={{ width: '70%' }}></div>
                </div>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-duration="300" data-aos-delay="900">
              <img src={`${path}/images/skill-figma.png`} alt="skill" />
              <div className="skill">
                <div className="skill-description">
                  <span>figma</span>
                  <span>70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-value" style={{ width: '70%' }}></div>
                </div>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="1000"
            >
              <img src={`${path}/images/skill-type.png`} alt="skill" />
              <div className="skill">
                <div className="skill-description">
                  <span>Typescript</span>
                  <span>71%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-value" style={{ width: '71%' }}></div>
                </div>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="1100"
            >
              <img src={`${path}/images/skill-sass.png`} alt="skill" />
              <div className="skill">
                <div className="skill-description">
                  <span>scss</span>
                  <span>87%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-value" style={{ width: '87%' }}></div>
                </div>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="1200"
            >
              <img src={`${path}/images/jQuery.png`} alt="skill" />
              <div className="skill">
                <div className="skill-description">
                  <span>jQuery</span>
                  <span>67%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-value" style={{ width: '67%' }}></div>
                </div>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="1300"
            >
              <img src={`${path}/images/dart.png`} alt="skill" />
              <div className="skill">
                <div className="skill-description">
                  <span>dart</span>
                  <span>77%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-value" style={{ width: '77%' }}></div>
                </div>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="1400"
            >
              <img src={`${path}/images/flutter.png`} alt="skill" />
              <div className="skill">
                <div className="skill-description">
                  <span>flutter</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-value" style={{ width: '80%' }}></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
