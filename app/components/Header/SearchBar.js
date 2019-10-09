import React from "react";
import styled from "styled-components";

const SearchBar = React.memo(function SearchBar(props) {
  return (
    <Container>
      <Form>
        {console.log("Search Bar rerenders")}
        <SearchInput type="text" placeholder="Search my Store" />
        <button>Search</button>
      </Form>
    </Container>
  );
});

export default SearchBar;

const Container = styled.div`
  margin-left: 50px;
`;

const Form = styled.form`
  display: flex;
  width: 700px;
  height: 36px;
`;

const SearchInput = styled.input`
  flex: 1 1 300px;
  font-size: 13px;
  padding-left: 10px;
`;
