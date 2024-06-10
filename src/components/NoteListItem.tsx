import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { BookMarkBlankIcon, BookMarkFillIcon } from '../assets';

export interface NoteItemListProps {
  title: string;
  index: number;
  bookMark: boolean;
  handleBookMark: any;
}

const NoteItemList = (props: NoteItemListProps) => {
  const navigate = useNavigate();
  const { title, index, bookMark, handleBookMark } = props;

  const handleClick = () => {
    navigate(`/${index}`);
  };

  return (
    <NoteItemWrapper onClick={handleClick}>
      <InfoSection>
        <NoteItemTitle>{title}</NoteItemTitle>
        <NoteItemDescription>18시간 전 수정했어요</NoteItemDescription>
      </InfoSection>
      <BookMark onClick={(event) => handleBookMark(index, event)}>
        {bookMark ? <BookMarkFillIcon /> : <BookMarkBlankIcon />}
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

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoteItemTitle = styled.h3`
  ${({ theme }) => theme.fonts.heading04};
`;

const NoteItemDescription = styled.p`
  ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.fonts.body02_middle};
  margin-top: 0.5rem;

  color: ${({ theme }) => theme.colors.lightgray};
`;

const BookMark = styled.button`
  z-index: 100;
`;
