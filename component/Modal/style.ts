import { Modal } from "antd";
import styled from "styled-components";

type Moda = {
  showModal?: any;
  setShowModal?: any;
};

export const ModalWrapper = styled(Modal)<Moda>`
  .ant-modal-content {
    width: 350px;
    height: 284px;
    max-width: 100%;
    padding: 20px 0;

    @media (max-width: 800px) {
      max-width: 100%;
      right: 0;
    }
  }

  .section {
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.01em;
      color: #061603;
      opacity: 0.75;
      margin-top: 12px;
    }
    h3 {
      font-size: 20px;
      line-height: 32px;
      text-align: center;
      color: #1f6e10;
      margin-top: 15px;
    }

    .ant-btn {
      width: 305px;
      height: 52px;
      background: #1f6e10;
      border-radius: 4px;
      color: #fafafa;
    }
  }
  /* .modal {
    padding: 20px 0;
    .text {
      .text-sub {
        margin-left: 15px;
        h4 {
          line-height: 1.2;
          margin-bottom: 10px;
        }
        span {
          font-size: 16px;
          color: #8a94a6;
          text-align: center;
        }
      }
    }
    .button {
      margin: 40px auto 0 auto;
      .ant-btn {
        width: 404px;
        height: 66px;
        min-width: 100px;
        text-align: center;
        color: #fff;
        border-radius: 8px;
        background-color: #ff6029;
        span {
          font-size: 19px;
        }
      }
      .ant-btn:nth-child(2) {
        margin-top: 25px;
        border: 1.5px solid #000;
        color: #000;
        background-color: transparent;
        :hover {
          border: none;
          color: #fff;
          background-color: #ff6029;
        }
      }
    }
  } */
`;
