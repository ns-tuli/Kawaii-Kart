import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter1 = styled.div`
  display: flex;
  align-items: center;
`;

const Filter2 = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

// Filter1 handles the color selection for the product
const Filter1Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

// filter 2 selects the category of the product
const Filter2Category = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const Filter2Option = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://www.tower28beauty.com/cdn/shop/files/ShineOn_20Spicy_c8767abe-07e7-42a6-acd5-532a2305f5e6.webp?v=1726680083&width=990" />
        </ImgContainer>
        <InfoContainer>
          <Title>Tower 28 </Title>
          <Desc>
            The shine of a gloss, the comfort of a balm + a touch of color. This
            non-sticky, moisturizing gloss is everything you want in a lip gloss
            with none of the hangups.
          </Desc>
          <Price>$ 2000 </Price>
          <FilterContainer>
            <Filter1>
            <FilterTitle>Color</FilterTitle>
              <Filter1Color color="red" />
              <Filter1Color color="peachpuff" />
              <Filter1Color color="pink" />
            </Filter1>
            <Filter2>
              <FilterTitle>Category</FilterTitle>
              <Filter2Category>
                <Filter2Option>Glossy</Filter2Option>
                <Filter2Option>Milky</Filter2Option>
                <Filter2Option>Hydrating</Filter2Option>
              </Filter2Category>
            </Filter2>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
