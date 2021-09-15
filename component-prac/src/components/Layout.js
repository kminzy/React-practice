import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding-top: 60px;
`;

const Layout = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default Layout;