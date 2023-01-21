import styled from 'styled-components';
import React from 'react';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div`

`;

const Wrapper = styled.div`
   padding: 50px;
   display: flex;
`;

const ImageContainer = styled.div`
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
   margin: 30px 0px;
   width: 50%;
   display: flex;
   justify-content: space-between;
`;

const Filter = styled.div`
   display: flex;
   align-items: center;
`;

const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;
`;

const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => props.color};
   margin: 0px 5px;
   cursor: pointer;
`;

const FilterSize = styled.select`
   margin-left: 10px;
   padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
   width: 50%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   cursor: pointer;
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
   border: 3px solid teal;
   background-color: white;
   cursor: pointer;
   font-weight: 500;

   &:hover{
      background-color: #f8f4f4;
   }
`;

const Product = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <ImageContainer>
                <Image src="https://static-01.daraz.com.bd/p/62dcf6e343df06a035d6b7327fe3fc56.jpg" />
            </ImageContainer>
            <InfoContainer>
                <Title>Dinner suit jacket</Title>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga adipisci omnis eos quasi quos eius, 
                    sed sequi ullam accusamus voluptates sapiente praesentium illo molestiae perspiciatis veniam, 
                    inventore quod sunt consequatur!
                </Desc>
                <Price>$ 60</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="Black"></FilterColor>
                        <FilterColor color="Blue"></FilterColor>
                        <FilterColor color="Purple"></FilterColor>
                        <FilterColor color="Gray"></FilterColor>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                            <FilterSizeOption>XXXL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
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
  )
}

export default Product
