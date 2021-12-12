import { Button, Input } from 'antd';
import styled from 'styled-components';
import SearchResult from './SearchResult';
import useInput from '../../hooks/useInput';
import useSearch from '../../hooks/useSearch';

function Search() {
  const { value, onChange } = useInput();
  const { result, onSearch } = useSearch();
  return (
    <Block>
      <InputBlock>
        <Input
          value={value}
          onChange={onChange}
          placeholder="조회할 값을 입력하세요."
        />
        <Button
          type="primary"
          onClick={() => onSearch(encodeURIComponent(value))}
        >
          조회하기
        </Button>
      </InputBlock>
      <SearchResultBlock>
        {result && <SearchResult results={result} />}
      </SearchResultBlock>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBlock = styled.div`
  display: flex;
  width: 100%;
  input {
    height: 3rem;
  }
  button {
    height: 3rem;
  }
`;

const SearchResultBlock = styled.div``;

export default Search;
