import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';
import usePageNavigate from '../hooks/usePageNavigate';
import { memoDataType } from '../types';

const EditNotePage = () => {
  const { goMainPage } = usePageNavigate();
  const { id } = useParams();

  let dataList = JSON.parse(localStorage.getItem('dataList')!);

  const [data, setData] = useState<memoDataType>(dataList[id!]);

  const handleInputValue = (value: string, identifier: string) => {
    setData((prevState) => ({ ...prevState, [identifier]: value }));
  };

  const handleDeleteNote = () => {
    dataList.splice(id, 1);
    localStorage.setItem('dataList', JSON.stringify(dataList));
    alert('메모 삭제 성공');
    goMainPage();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(dataList.title === data.title && dataList.text === data.text)) {
      setData((prevState) => ({ ...prevState, fixTime: new Date() }));
      dataList = JSON.stringify(dataList.with(id, data));
      window.localStorage.setItem('dataList', dataList);
      alert('수정했습니다');
    }
    goMainPage();
  };

  return (
    <>
      <BackBtn color={'yellow'} onClick={goMainPage}>
        뒤로가기
      </BackBtn>
      <NoteForm onSubmit={(event) => handleSubmit(event)}>
        <TitleInput
          name="title"
          value={data.title}
          onChange={(event) => handleInputValue(event.target.value, 'title')}
        />
        <TextInput name="text" value={data.text} onChange={(event) => handleInputValue(event.target.value, 'text')} />
        <CheckBtn color="blue">확인</CheckBtn>
        <DeleteBtn color="red" onClick={handleDeleteNote}>
          메모 제거
        </DeleteBtn>
      </NoteForm>
    </>
  );
};

const BackBtn = styled(Button)`
  margin: 1.5rem 0 3rem 0;
`;

const NoteForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 5rem;

  color: ${({ theme }) => theme.text_color};

  background-color: ${({ theme }) => theme.content_color};
  border: none;
  border-radius: 10px;
`;

const TextInput = styled.input`
  width: 100%;
  height: 25rem;
  margin-top: 0.7rem;

  color: ${({ theme }) => theme.text_color};

  background-color: ${({ theme }) => theme.content_color};
  border: none;
  border-radius: 10px;
`;

const CheckBtn = styled(Button)`
  position: absolute;
  right: 3rem;
  bottom: 4rem;
`;
const DeleteBtn = styled(Button)`
  position: absolute;
  right: 9rem;
  bottom: 4rem;
`;
export default EditNotePage;
