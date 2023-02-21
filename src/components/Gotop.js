import { useEffect, useRef } from "react";
import Anime from "../assets/Anime";

const Gotop = () => {
  const style = {
    position: "fixed",
    right: 50,
    bottom: -200,
    width: 50,
    height: 50,
    background: "hotpink",
    zIndex: 9999999,
    cursor: "pointer",
    fontSize: 0,
    transition: "bottom 0.5s",
  };
  //   스크롤 위치 값 파악하기
  const bt = useRef(null);
  const scrollFN = () => {
    // 스크롤 값 파악하여서 if 문 사용하기
    const scY = window.document.documentElement.scrollTop;
    if (scY > 300) {
      bt.current.classList.add("active");
    } else {
      bt.current.classList.remove("active");
    }
  };
  useEffect(() => {
    scrollFN();

    window.addEventListener("scroll", scrollFN);
    return () => {
      window.removeEventListener("scroll", scrollFN);
    };
  }, []);

  return (
    <div
      ref={bt}
      style={style}
      onClick={() => {
        new Anime(window, {
          prop: "scroll",
          value: 0,
          duration: 500,
        });
      }}
    >
      Gotop
    </div>
  );
};

export default Gotop;
