import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// 홈 함수형 컴퍼넌트 선언
const Home = (props) => {
  //페이지 전환을 위한 useHistory 사용
  const history = useHistory();

  //요일
  const days = ["월", "화", "수", "목", "금", "토", "일"];

  const random_stars = days.map((w, idx) => {
    // day는 요일, rate는 랜덤 숫자 1~5이 들어가요!
    return {
      day: w,
      rate:
        //   Math.floor(Math.random() * (max - min) + min);
        Math.floor(Math.random() * (5 - 0) + 0),
    };
  });
  console.log(random_stars);
  // 화면 출력!
  return (
    <Container>
      <Title>내 일주일은?</Title>
      {random_stars.map((w, idx) => {
        return (
          <Week key={`day_${idx}`}>
            <Day>{w.day}</Day>
            {/* 원 5개 반복 (Array.from사용) */}
            {Array.from({ length: 5 }, (v, idx) => {
              return (
                <Circle
                  key={`circle_${idx}`}
                  style={{
                    backgroundColor:
                      w.rate < idx ? "rgb(221,221,221)" : "rgb(255, 235, 59)",
                  }}
                ></Circle>
              );
            })}

            {/* 삼각형 버튼 */}
            <Triangle
              onClick={() => {
                // 요일 별 페이지로 이동
                history.push(`/detail/${w.day}`);
              }}
            ></Triangle>
          </Week>
        );
      })}
    </Container>
  );
};
const Container = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 0;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;
`;

const Title = styled.h3`
  text-align: center;
`;

const Week = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  width: 100%;
`;

const Day = styled.p`
  margin: 0 0.5rem 0 0;
  font-weight: bold;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
`;

const Triangle = styled.div`
  appearance: none;
  background-color: transparent;
  border-collapse: purple;
  width: 0;
  height: 0;
  border-top: 1rem solid;
  border-bottom: 1rem solid;
  border-left: 1.6rem solid purple;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export default Home;
