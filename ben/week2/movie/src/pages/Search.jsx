import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  padding: 20px;
  color: white;
  background-color: #141414;
  min-height: 100vh;
`;

const SearchHeader = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin: 20px 0;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: white;
  font-size: 16px;
`;

const Search = () => {
  return (
    <SearchContainer>
      <SearchHeader>검색페이지 아호~!</SearchHeader>
      <SearchInput 
        type="text" 
        placeholder="영화를 검색해 보세요"
        autoFocus
      />
    </SearchContainer>
  );
};

export default Search; 