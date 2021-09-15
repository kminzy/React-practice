import React from "react";
import styled from "styled-components";
import oc from "open-color";

const Wrapper = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    bottom: 0px;
    z-index: 5;

    color: ${oc.gray[6]};

    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
`;

//푸터
const Footer = () => (
    <Wrapper>
        @ This is Footer.
    </Wrapper>
);

export default Footer;