import styled from 'styled-components';

export const DetailContainer = styled.div`
  margin-bottom: 30px;
  overflow: auto;

  .TitleContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .MainImgContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .MainImgContainer__item {
      max-width: 50%;
      max-height: 50%;
    }
  }
`;

export const TagListWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px 0;
`;
