import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

const Detail = (props) => {
  const history = useHistory();
  const params = useParams();

  // 평점
  const [rate, setRate] = React.useState(0);
  console.log(rate);
  // 화면
  return (
    <Container>
      <Title>
        <Day>
          {/* App.js에서 파라미터 받아오기! */}
          {params.day}요일
        </Day>
        평점 남기기
      </Title>
      <Stars>
        {/*Array.from으로 동그라미 5개 만들기 */}
        {Array.from({ length: 5 }, (item, idx) => {
          return (
            <Circle
              onClick={() => {
                setRate(idx + 1);
              }}
              style={{
                backgroundColor:
                  rate < idx + 1 ? "rgb(221,221,221)" : "rgb(255,235,59)",
              }}
            ></Circle>
          );
        })}
      </Stars>

      {/* history.goBack함수로 뒤로가기! */}
      <Confirm
        onClick={() => {
          // 뒤로가기!
          history.goBack();
        }}
      >
        평점 남기기
      </Confirm>
    </Container>
  );
};
const Container = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 5vw;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;
`;
const Title = styled.h3`
  text-align: center;
`;

const Day = styled.span`
  color: rgb(255, 255, 255);
  font-weight: 900;
  background: orange;
  padding: 0.2rem;
  border-radius: 5px;
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  width: 100%;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
`;

const Confirm = styled.button`
  width: 100%;
  background-color: purple;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  color: rgb(255, 255, 255);
`;
export default Detail;
