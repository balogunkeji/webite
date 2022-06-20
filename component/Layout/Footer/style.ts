import styled from "styled-components";

export const FooterStyles = styled.div`
  width: 100%;
  height: 100%;

  .ant-layout-footer {
    background: #061603;
    padding: 60px 80px;
    bottom: 0;
    top: 0;
    @media (max-width: 1000px) {
      padding: 60px 40px;
    }
    @media (max-width: 800px) {
      padding: 60px 18px;
    }
    @media (max-width: 480px) {
      padding: 60px 15px;
    }
  }
  .section {
   
    .footer1 {
      @media (max-width: 700px) {
     flex-direction: column;
    }
      margin: 10px auto 20px auto;
      h3 {
        color: #fafafa;
        margin-bottom: 10px;
        @media (max-width: 700px) {
          margin-top: 15px;
    }
      }

      span {
        color: #fafafa;
        opacity: 0.75;
      }

      .list{
        margin-bottom: 20px;
      }

      .getStarted {
        p {
          color: #fafafa;
          opacity: 0.75;
        }
      }
    }

    .footer2 {
      opacity: 0.3;
      border-top: 1px solid #fafafa;

      span {
        color: #fafafa;
        opacity: 0.5;
        margin-top: 25px;
      }
    }
  }
`;
