import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge"; 
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";


const Container = styled.div`
  height: 80px;
  background-color: pink;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex; // horizontal layout
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  height: 30px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  padding: 5px;
  
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 35 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>KWAII-KART ^ ^</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
