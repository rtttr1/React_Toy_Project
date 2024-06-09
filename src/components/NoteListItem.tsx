import styled from 'styled-components';

import { BookMarkIcon } from '../assets';

interface NoteItemListProps {
  title: string;
}

const NoteItemList = (props: NoteItemListProps) => {
  const { title } = props;
  return (
    <NoteItemWrapper>
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

  background-color: ${({ theme }) => theme.colors.white};
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
