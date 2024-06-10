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

  const dataList = JSON.parse(window.localStorage.getItem('dataList'));
  const noteList = dataList
    ? dataList.map((data: NoteItemListProps, index: number) => (
        <NoteItemList key={index} index={index} title={data.title} text={data.text} />
      ))
    : null;

  return (
    <>
      <FilterSection>
        <InputBar placeholder="검색"></InputBar>
        <DropDown>최근 생성순</DropDown>
      </FilterSection>
      {noteList}
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
