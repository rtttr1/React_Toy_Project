import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';

const CreateNotePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ title: '', text: '', bookMark: false });
  const handleInputValue = (value, identifier) => {
    setData((prevState) => ({ ...prevState, [identifier]: value }));
  };

  const clickHandler = () => {
    navigate(`/`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (localStorage.length) {
      let dataList = JSON.parse(localStorage.getItem('dataList'));
      dataList = JSON.stringify([...dataList, data]);
      localStorage.setItem('dataList', dataList);
    } else {
      const dataList = JSON.stringify([data]);
      localStorage.setItem('dataList', dataList);
    }

    console.log(JSON.parse(localStorage.getItem('dataList')));
    alert('메모 생성 성공');
    navigate('/');
  };

  return (
    <>
      <BackBtn color={'yellow'} onClick={clickHandler}>
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

const NoteForm = styled.form``;

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
  bottom: 5rem;
`;
