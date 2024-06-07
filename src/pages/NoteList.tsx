import styled from 'styled-components';

import Button from '../components/Button';
import NoteItemList from '../components/NoteListItem';

const NoteList = () => {
  return (
    <>
      <FilterSection>
        <InputBar placeholder="검색"></InputBar>
        <FilterDropDown>최근 생성순</FilterDropDown>
      </FilterSection>
      <NoteItemList />
      <NewNoteBtn color="blue">새 노트</NewNoteBtn>
    </>
  );
};

export default NoteList;

const FilterSection = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const InputBar = styled.input`
  width: 25rem;
  padding: 1rem;

  border: none;
  border-radius: 20px;
`;

const FilterDropDown = styled.button`
  width: 13.5rem;
  padding: 1.1rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
`;

const NewNoteBtn = styled(Button)`
  position: absolute;
  right: 3rem;
  bottom: 5rem;
`;
