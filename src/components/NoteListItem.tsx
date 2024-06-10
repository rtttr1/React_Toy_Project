import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { BookMarkIcon } from '../assets';

export interface NoteItemListProps {
  title: string;
  text: string;
  index: number;
}

const NoteItemList = (props: NoteItemListProps) => {
  const navigate = useNavigate();
  const { title, text, index } = props;
  const handleClick = () => {
    navigate(`/${index}`);
  };
  return (
    <NoteItemWrapper onClick={handleClick}>
      <InfoSection>
        <NoteItemTitle>{title}</NoteItemTitle>
        <NoteItemDescription>18시간 전 수정했어요</NoteItemDescription>
      </InfoSection>
      <BookMark>
        <BookMarkIcon />
      </BookMark>
    </NoteItemWrapper>
  );
};

export default NoteItemList;

const NoteItemWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.7rem;

  color: ${({ theme }) => theme.text_color};

  background-color: ${({ theme }) => theme.content_color};
  border-radius: 10px;
`;

const InfoSection = styled.div``;

const NoteItemTitle = styled.h3`
  ${({ theme }) => theme.fonts.heading04};
`;

const NoteItemDescription = styled.p`
  ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.fonts.body02_middle};
  margin-top: 0.5rem;

  color: ${({ theme }) => theme.colors.lightgray};
`;

const BookMark = styled.button``;
