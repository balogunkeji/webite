import styled from 'styled-components';

export const LayoutWrapper = styled.div`
     width: 100%;
    height: 100%;
    overflow-x: hidden;
    .ant-layout-content {
    width: 100%;
    height: max-content;
    min-height: calc(100vh - 75px);
    background-color: #fafafa;
    /* margin-top: 100px; */

    @media (max-width: 1000px) {
      width: 100%;
    }
    @media (max-width: 800px) {
      width: 100%;
      margin-left: 0;
    }
  }
`;