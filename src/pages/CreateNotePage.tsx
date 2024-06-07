import styled from 'styled-components';

import Button from '../components/Button';

const CreateNotePage = () => {
  return (
    <>
      <BackBtn color={'yellow'}>뒤로가기</BackBtn>
      <TitleInput />
      <TextInput />
      <CheckBtn color="blue">확인</CheckBtn>
    </>
  );
};

export default CreateNotePage;

const BackBtn = styled(Button)`
  margin: 1.5rem 0 3rem 0;
`;

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
