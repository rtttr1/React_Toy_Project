import { useState } from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import usePageNavigate from '../hooks/usePageNavigate';
import { memoDataType } from '../types';

const CreateNotePage = () => {
  const { goMainPage } = usePageNavigate();

  const [data, setData] = useState<memoDataType>({
    title: '',
    text: '',
    bookMark: false,
    createTime: new Date(),
    fixTime: new Date(),
  });

  const handleInputValue = (value: string, identifier: string) => {
    setData((prevState) => ({ ...prevState, [identifier]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const dataList = JSON.stringify([...JSON.parse(localStorage.getItem('dataList')!), data]);
    localStorage.setItem('dataList', dataList);
    alert('메모 생성 성공');
    goMainPage();
  };

  return (
    <>
      <BackBtn color={'yellow'} onClick={goMainPage}>
        뒤로가기
      </BackBtn>
      <NoteForm onSubmit={handleSubmit}>
        <TitleInput
          name="title"
          value={data.title}
          onChange={(event) => handleInputValue(event.target.value, 'title')}
        />
        <TextInput name="text" value={data.text} onChange={(event) => handleInputValue(event.target.value, 'text')} />
        <CheckBtn color="blue">확인</CheckBtn>
      </NoteForm>
    </>
  );
};

export default CreateNotePage;

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
