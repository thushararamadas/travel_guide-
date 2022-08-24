import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <>
            <Container>
                <Left>
                    <Logo
                        src={require("../../../assets/images/logo.svg").default}
                        alt="Logo"
                    />
                </Left>
                <Right>
                    <Login>Login</Login>
                </Right>
            </Container>
        </>
    );
}
const Container = styled.div`
    margin-top: 10px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    width: 10%;
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const Right = styled.div``;
const Login = styled.button`
    padding: 13px;
    color: #fff;
    background-color: #046bf6;
    width: 130px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 5px;
`;
export default Header;
