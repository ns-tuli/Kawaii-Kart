import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: rgb(255, 218, 185) ;
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
