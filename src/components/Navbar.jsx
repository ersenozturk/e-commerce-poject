import styled from "@emotion/styled";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCart } from "@material-ui/icons";
import React from "react";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  /* justify-content: space-between; */


`;

// navbar-left
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  /* border: 0.5px solid lightgray; */
  margin-left: 25px;
  padding: 5px;
`;
const Language = styled.span`
  color: white;
  font-style: 14px;
`;

const Input = styled.input`
  border: none;
`;

// navbar-center
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h2`
    font-weight: bold;
`

// navbar-right
const Right = styled.div`
  flex: 1;

  display: flex;
  justify-content:flex-end;
  align-items: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search.." />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>
            ersenozturk.com
          </Logo>
        </Center>

        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
