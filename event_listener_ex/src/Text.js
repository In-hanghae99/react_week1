import React from "react";

const Text = (props) => {
  const text = React.useRef(null);

  const hoverEvent = (e) => {
    // 콘솔로 이 이벤트가 누구에게서 일어났는 지 확인할 수 있습니다.
    console.log(e.target);
    // ref랑 같은 녀석인 지 확인해봐요!
    console.log(text.current);

    text.current.style.background = "yellow";
  };

  // 첫번째 인자는 익숙하죠! 화살표 함수! 넵, 렌더링 시 실행할 함수가 여기에 들어갑니다.
  // 두번째 인자의 []! 디펜던시 어레이라고 불러요. 여기 넣어준 값이 변하면 첫번째 인자인 콜백함수를 실행합니다.
  React.useEffect(() => {
    // 여기가 rendering 때 실행될 구문이 들어가는 부분입니다.
    // componentDidMount, componentDidUpdate일 때 동작하는 부분이 여기예요.
    text.current.addEventListener("mouseover", hoverEvent);

    return () => {
      // 여기가 clean up 부분입니다.
      // componentWillUnmount 때 동작하는 부분이 여기예요.
      text.current.removeEventListener("mouseover", hoverEvent);
    };
  }, [text]);

  return <h1 ref={text}>텍스트입니다!</h1>;
};

export default Text;
