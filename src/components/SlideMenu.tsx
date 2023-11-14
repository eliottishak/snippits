import { useRef, useState } from "react";

interface buttonAction {
  label: string;
  action: (idx: string | number) => void;
}

interface Props {
  buttons: buttonAction[];
}

export function SliderMenu() {
  const coverBox = useRef("cover-box");
  const [activeButton, setActiveButton] = useState(0);
  const buttons = ["index", "homedffdfd", "profile", "hello"];
  const [x, setX] = useState("0");
  const [width, setWidth] = useState("0");
  const [oppacity, setOpacity] = useState("0");
  const [transition, setTransition] = useState("0");
  const cover = document.getElementById("cover");

  const enter = (e: string) => {
    if (oppacity == "0") setOpacity("1");
    if (transition == "0" && oppacity == "1") setTransition("150");
    const box = document.getElementById(e);
    setX(box?.getBoundingClientRect()?.x.toString() || "100");
    setWidth(box?.getBoundingClientRect()?.width.toString() || "100");
  };
  const exist = () => {
    setOpacity("0");
    setTransition("0");
  };

  return (
    <div style={{ position: "relative" }} onMouseLeave={() => exist()}>
      <div
        className='sb-hover'
        id='cover'
        ref={"cover-box"}
        style={{
          width: `${width}px`,
          transform: `translateX(${x}px)`,
          transitionDuration: `${transition}ms`,
          opacity: `${oppacity}`,
        }}
      ></div>
      {buttons.map((item, index) => (
        <a
          key={index}
          id={item}
          className='sb-tab'
          onMouseEnter={() => enter(item)}
        >
          {item}
        </a>
      ))}
    </div>
  );
}
