/* eslint-disable indent */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';
import DropDown from '../components/DropDown';
import NoteItemList, { NoteItemListProps } from '../components/NoteListItem';

const NoteList = () => {
  const navigate = useNavigate();
  const clickHandler = (link: string) => {
    navigate(`/${link}`);
  };

  const initialData = JSON.parse(localStorage.getItem('dataList')!);
  const [memoList, setMemoList] = useState(initialData);

  const handleBookMark = (index: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    const tempList = [...memoList];
    tempList[index].bookMark = !tempList[index].bookMark;
    setMemoList(tempList);
    localStorage.setItem('dataList', JSON.stringify(memoList));
    console.log(JSON.parse(localStorage.getItem('dataList')!));
  };

  const noteList = memoList.map((data: NoteItemListProps, index: number) => (
    <NoteItemList
      key={index}
      index={index}
      title={data.title}
      bookMark={data.bookMark}
      handleBookMark={handleBookMark}
    />
  ));

  return (
    <>
      <FilterSection>
        <InputBar placeholder="검색"></InputBar>
        <DropDown>최근 생성순</DropDown>
      </FilterSection>
      <NoteSection>{noteList}</NoteSection>

      <NewNoteBtn color="blue" onClick={() => clickHandler('NewNote')}>
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
  bottom: 5rem;
`;

const NoteSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;
