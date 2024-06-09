import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';

const CreateNotePage = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    if (window.localStorage.length) {
      let dataList = JSON.parse(window.localStorage.getItem('dataList'));
      dataList = JSON.stringify([...dataList, data]);
      window.localStorage.setItem('dataList', dataList);
    } else {
      const dataList = JSON.stringify([data]);
      window.localStorage.setItem('dataList', dataList);
    }

    console.log(JSON.parse(window.localStorage.getItem('dataList')));
    alert('메모 생성 성공');
    navigate('/');
  };

  return (
    <>
      <BackBtn color={'yellow'} onClick={clickHandler}>
        뒤로가기
      </BackBtn>
      <NoteForm onSubmit={handleSubmit}>
        <TitleInput name="title" />
        <TextInput name="text" />
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

  border: none;
  border-radius: 10px;
`;

const TextInput = styled.input`
  width: 100%;
  height: 25rem;
  margin-top: 0.7rem;

  border: none;
  border-radius: 10px;
`;

const CheckBtn = styled(Button)`
  position: absolute;
  right: 3rem;
  bottom: 5rem;
`;
