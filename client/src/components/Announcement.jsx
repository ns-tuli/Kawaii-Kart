import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #FF5CCD ;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Get ready to enter the world of cuteness!</Container>;
};

export default Announcement;
