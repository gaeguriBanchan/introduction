export default function Project({
  projectUrl,
  gitHubUrl,
  OriginalUrl,
  imgName,
  title,
  skill,
}) {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="portfolio-team">
      <div className="portfolio-left">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          alt="portfolio"
        >
          <img src={`${path}/images/${imgName}`} alt="project" />
        </a>
        (이미지 클릭시 프로젝트 페이지로 이동합니다.)
      </div>
      <div className="portfolio-right">
        <div className="right-main">
          <span className="team-title">${title}</span>
          {/* <span className="day">2023.02.08 ~ 2023.03.03</span> */}
          {skill ? <span className="skill">${skill} </span> : null}
          <div className="portfolio-btnBox">
            <a
              href={gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-github"
            >
              GitHub
            </a>
            <a
              href={OriginalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-github"
            >
              Original Site
            </a>
          </div>
        </div>
        <ul className="portfolio-team-list">
          <li className="info-main">
            식단관리를 통한 건강관리 프로그램을 만들었습니다. 자신이 섭취하는
            음식, 복용 중인 약물들을 기록하여 올바른 식습관을 가지도록 합니다.
          </li>
          <li className="info-sub">
            - 섭취한 음식들을 입력하고 기록하며, 하루에 섭취한 칼로리를 계산하고
            목표를 달성했는지 확인 가능합니다.
            <br />- 섭취중인 보충제, 건강보조식품, 약물 등을 입력하고 당일 목표
            섭취량을 섭취했는지 확인합니다.
          </li>
        </ul>
      </div>
    </div>
  );
}
