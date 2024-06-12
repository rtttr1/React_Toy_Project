/* eslint-disable indent */
import { ChangeEvent } from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import DropDown from '../components/DropDown';
import NoteListItem, { NoteItemListProps } from '../components/NoteListItem';
import useDropdown from '../hooks/useDropdown';
import usePageNavigate from '../hooks/usePageNavigate';

const NoteList = () => {
  const { goCreateNotePage } = usePageNavigate();
  const { memoList, setMemoList, dropDownText, setDropDownText } = useDropdown();

  const handleDropDownClick = (event: ChangeEvent<HTMLSelectElement>) => {
    setDropDownText(event.target.value);
  };

  const handleBookMark = (index: number, event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    const tempList = [...memoList];
    tempList[index].bookMark = !tempList[index].bookMark;
    setMemoList(tempList);
    localStorage.setItem('dataList', JSON.stringify(memoList));
  };

  const noteList = memoList.map((data: NoteItemListProps, index: number) => (
    <NoteListItem
      key={index}
      index={index}
      title={data.title}
      bookMark={data.bookMark}
      handleBookMark={handleBookMark}
      fixTime={data.fixTime}
    />
  ));

  return (
    <>
      <FilterSection>
        <InputBar placeholder="검색"></InputBar>
        <DropDown dropDownText={dropDownText} handleDropDownClick={handleDropDownClick} />
      </FilterSection>
      <NoteSection>{noteList}</NoteSection>
      <NewNoteBtn color="blue" onClick={goCreateNotePage}>
        새 노트
      </NewNoteBtn>
    </>
  );
};

export default NoteList;

const FilterSection = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const InputBar = styled.input`
  width: 27rem;
  padding: 1rem;

  background-color: ${({ theme }) => theme.content_color};
  border: none;
  border-radius: 20px;
`;

const NewNoteBtn = styled(Button)`
  position: absolute;
  right: 3rem;
  bottom: 4rem;
`;

const NoteSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;
