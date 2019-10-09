import React from "react";
import styled from "styled-components";
import Card from "../../native/Card";

const products = [
  "Popular 1",
  "Popular 2",
  "Popular 3",
  "Popular 4",
  "Popular 5",
  "Popular 6",
  "Popular 7",
  "Popular 8"
];

//functional component
const PopularList = () => {
  const popular_list = products.map(item => {
    return <PopularItem key={item} name={item} />;
  });
  return (
    <Container>
      <MostPopularItem name={"Most Popular"} />
      <SubContainer>{popular_list}</SubContainer>
    </Container>
  );
};

export default PopularList;

// styled components

const Container = styled.section`
  display: flex;
  margin-top: 10px;
`;
const PopularItem = styled(Card)`
  height: 100px;
  margin-top: 2px;
  margin-left: 2px;
`;

const MostPopularItem = styled(Card)`
  height: 200px;
  flex: 1 1 220px;
  margin-top: 2px;
`;

const SubContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  width: 100%;
`;
