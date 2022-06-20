import styled from "styled-components";

export const ContactStyle = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  padding: 120px 0 0 0;

  @media (max-width: 1000px) {
    padding: 100px 0 0 0;
  }
  @media (max-width: 700px) {
    padding: 0;
  }

  .heroImage {
    .bgWrap {
      position: relative;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }

    .heroText {
      position: absolute;
      display: block;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      /* color: white; */
      width: 100%;
      height: 600px;
      text-align: left;
      @media (max-width: 1000px) {
        height: 580px;
      }
      @media (max-width: 700px) {
        height: 480px;
      }

      .line {
        @media (max-width: 700px) {
          display: none;
        }
      }

      .div {

margin: 250px auto 0 140px;
display: flex;

@media (max-width: 1000px) {
  margin: 210px auto 0 80px;
}
@media (max-width: 700px) {
  margin: 200px auto 0 auto;
}
@media (max-width: 515px) {
  margin: 150px auto 0 auto;
}

h1{
  text-align: left;
}

.text{
  margin-left: 20px;
  @media (max-width: 700px) {
         margin-left: 12px;
        }
}

.span {
  color: #fcfcfc;
  font-size: 20px;
 
@media (max-width: 360px) {
    font-size: 17px;
}
}
}
    }
  }

  .section {
    .dot {
      padding-left: 25px;
      @media (max-width: 700px) {
        display: none;
      }
    }
    .text {
      padding: 60px 80px;
      @media (max-width: 1100px) {
        padding: 60px 62px;
      }
      @media (max-width: 800px) {
        padding: 60px 20px;
      }
      @media (max-width: 460px) {
        padding: 60px 15px;
      }

      span {
        color: #fafafa;
      }
      h3 {
        margin-bottom: 15px;
        line-height: 48px;
        font-size: 32px;
        @media (max-width: 700px) {
          font-size: 24px;
          line-height: 30px;
        }

        @media (max-width: 700px) {
          font-size: 20px;
          line-height: 24px;
        }
      }

      .form {
        .ant-btn {
          min-width: 100px;
          max-width: 100%;
          width: 185px;
          height: 64px;
          background: #1f6e10;
          border-radius: 4px;

          span {
            letter-spacing: 0.01em;
            color: #fafafa;
          }
        }
        .ant-input {
          margin: 0 auto 15px auto;
          max-width: 100%;
          width: 513px;
          height: 56px;
          border-radius: 4px;
          display: block;
          min-width: 100px;

          @media (max-width: 555px) {
            width: 450px;
          }
          @media (max-width: 480px) {
            width: 380px;
          }
          @media (max-width: 400px) {
            width: 300px;
          }
          span {
            color: #061603;
          }
        }
        .area {
          width: 513px;
          height: 180px;
          @media (max-width: 555px) {
            width: 450px;
          }
          @media (max-width: 480px) {
            width: 380px;
          }
          @media (max-width: 400px) {
            width: 300px;
          }
          @media (max-width: 335px) {
            width: 100%;
          }
        }
      }
    }
  }
`;
