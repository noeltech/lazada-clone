import React from "react";
import HomeWrapper from "../../HomePage/HomeWrapper";

import styled from "styled-components";
import ScrollToTopOnMount from "../../native/ScrollToTopOnMount";

const index = () => {
  return (
    <HomeWrapper>
      <Wrapper>
        <h1>LazMall Page</h1>
      </Wrapper>
    </HomeWrapper>
  );
};

export default index;

const Wrapper = styled.div`
  height: 800px;
`;
