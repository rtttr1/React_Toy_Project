import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';

const MainPage = () => {
  return (
    <MainPageWrapper>
      <Header />
      <ContentSection>
        <Outlet />
      </ContentSection>
    </MainPageWrapper>
  );
};

export default MainPage;

const MainPageWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 45rem;
  height: 60rem;
  padding: 3rem;

  color: ${({ theme }) => theme.text_color};

  background-color: ${({ theme }) => theme.background_color};
  transform: translate(-50%, -50%);
  border-radius: 30px;

  transition-duration: 0.2s;
`;

const ContentSection = styled.section``;
