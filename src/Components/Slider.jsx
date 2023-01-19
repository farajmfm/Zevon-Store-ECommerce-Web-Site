import styled from "styled-components";
import { ArrowLeftOutlined } from "@material-ui/icons";
import { ArrowRightOutlined } from "@material-ui/icons";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative; 
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.75;
`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 120%;
    width: 100%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1``
const Desc = styled.p``
const Button = styled.button``

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
            <Slide>
            <ImageContainer>
                <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" />
            </ImageContainer>
            <InfoContainer>
                <Title>SUMMER SAL</Title>
                <Desc>DON'T COMPROMISE ON STYLE!!! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                <Button>SHOW NOW</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider