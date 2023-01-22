import styled from 'styled-components';
import React from 'react';
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div`
   display: flex;
   ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 20px;  
`;

const Logo = styled.h1``;

const Description = styled.p`
   margin: 20px 0px;
`;

const SocialContainer = styled.div`
   display: flex;
`;

const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color: #${props => props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
   cursor: pointer;
`;

const Center = styled.div`
   flex: 1; 
   padding: 20px;
   ${mobile({ display: "none" })}
`;

const Title = styled.h3`
   margin-bottom: 30px;
`;

const List = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`;

const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`;

const Right = styled.div`
   flex: 1; 
   padding: 20px;
   ${mobile({ backgroundColor: "#ffff8f8" })}
`;

const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
`;

const Payment = styled.img`
   width: 50%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Zevon Store.</Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsum sed non nisi distinctio cumque minima perferendis, dolor delectus culpa. Vitae, dolor atque. 
                Distinctio est accusamus possimus quasi dolor, laboriosam dolorum!
            </Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>
                Useful Links
            </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> 
                <Room style={{marginRight: "10px"}} />
                1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - UAE.
            </ContactItem>
            <ContactItem> 
                <Phone style={{marginRight: "10px"}} />
                +971 4 888 8888
            </ContactItem>
            <ContactItem> 
                <MailOutline style={{marginRight: "10px"}} />
                contact@ZevonStore.com
            </ContactItem>
            <Payment src="https://media.horusrc.com/wysiwyg/pay_by_cards.jpg" />
        </Right>
    </Container>
  )
}

export default Footer
