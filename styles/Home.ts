import styled from "styled-components";


export const HomeStyle = styled.div`
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

  .dot,
  .dott {
    @media (max-width: 900px) {
      display: none;
    }
  }

  .ant-btn {
    min-width: 100px;
    max-width: 100%;
    width: 185px;
    height: 64px;
    background: #1f6e10;
    border-radius: 4px;
    /* margin-left: 20px; */
    span {
      letter-spacing: 0.01em;
      color: #fafafa;
      text-align: center;
    }
   
    @media (max-width: 700px) {
            margin-left: 0;
        }
  }
  .btn {
    margin-left: 0;
    @media (max-width: 700px) {
      margin-left: 0;
      margin-top: 10px;
    }
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
      color: white;
      width: 100%;
      height: 720px;
      text-align: left;
      @media (max-width: 1000px) {
        height: 700px;
      }
      @media (max-width: 700px) {
        height: 600px;
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
          @media (max-width: 700px) {
            margin-left: 0;
        }
        }

        .span {
          color: #fcfcfc;
          margin-bottom: 18px;
          font-size: 20px;
          @media (max-width: 700px) {
            margin-left: 0;
        }
        @media (max-width: 360px) {
            margin-left: 0;
            font-size: 17px;
        }
        }
      }
    }
  }

  /* shaping */
  .shaping {
    padding: 60px 10px 30px 10px;
    @media (max-width: 800px) {
      flex-direction: column-reverse;
    }
    @media (max-width: 700px) {
      padding: 60px 5px 30px 5px;
    }
    .text {
      display: flex;
      width: 50%;
      align-items: center;
      @media (max-width: 800px) {
        width: 100%;
      }
      .text_sub {
        padding: 0 0 0 20px;
        @media (max-width: 900px) {
         
          h2{
            margin-top: 40px;
          }
           p{
            text-align: left;
            margin: 10px 0;
          }
        }
        @media (max-width: 480px) {
          padding: 0 0 0 5px;
          h2{
            margin-top: 0;
          }
        }
      }
    }

    .image {
      display: flex;
      align-items: flex-end;
      width: 50%;
      flex-direction: column;
      @media (max-width: 800px) {
        width: 100%;
        justify-content: center;
        align-items: center;
      }
      .mainImg {
        margin-right: 40px;
        @media (max-width: 900px) {
          margin-right: 0;
        }
        @media (max-width: 480px) {
          display: none;
        }
      }
    }
  }
  /* card */
  .card {
    padding: 30px 0;
    .card_sub {
      width: 85%;
      height: 264px;
      background: #e8f0e7;
      border-radius: 8px;
      @media (max-width: 1150px) {
        width: 100%;
      }
      @media (max-width: 1000px) {
        background-color: transparent;
        justify-content: space-between;
        height: 100%;
        padding: 30px 10px;
      }

      .cards {
        @media (max-width: 1000px) {
          margin: 20px auto;
          width: 360px;
          max-width: 100%;
          min-height: 250px;
          height: fit-content;
          background: #e8f0e7;
          border-radius: 8px;
          padding: 20px 0 0 20px;
        }
      }
      .line {
        @media (max-width: 1000px) {
          display: none;
        }
      }
    }
  }

  /* product */
  .product {
    padding: 30px 0;
    .title {
      margin-top: 0;
      @media (max-width: 840px) {
        margin-bottom: 0;
      }
    }
    .cards {
      display: flex;
      flex-wrap: wrap;
      margin: 20px auto;

      .cardd {
        width: 440px;
        margin: 0 20px;
        height: 486px;
        background: #fafafa;
        box-shadow: 0px 1px 8px rgba(6, 22, 3, 0.05);
        border-radius: 8px;
        @media (max-width: 960px) {
          width: 380px;
          height: 450px;
          margin: 0 20px;
        }
        @media (max-width: 840px) {
          width: 400px;
          height: 450px;
          margin: 20px auto;
        }

        @media (max-width: 420px) {
          width: 300px;
          height: 400px;
        }
        .card_text {
          padding: 5px 15px;
        }
      }
    }
  }

  /* farm */

  .farmer {
    padding: 50px 0 100px 0;
    .bgWrap {
      position: absolute;
      display: block;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      width: 100%;
      height: 88vh;
    }

    .div {
      margin: 0 auto 100px auto;
      @media (max-width: 1000px) {
        margin-bottom: 0;
      }
    }
    .text {
      width: 400px;
      height: 336px;
      background: #fafafa;
      box-shadow: 0px 1px 8px rgba(6, 22, 3, 0.05);
      border-radius: 8px;
      position: absolute;
      left: 845px;
      top: 2750px;

      @media (max-width: 1350px) {
        left: 750px;
      }
      @media (max-width: 1200px) {
        left: 650px;
      }
      @media (max-width: 1150px) {
        left: 520px;
      }
      @media (max-width: 1000px) {
        left: 0;
        margin: -200px auto 0 auto;
        top: 0;
        position: static;
        z-index: 2;
      }

      @media (max-width: 380px) {
        width: 350px;
      }

      .card_text {
        padding: 10px 20px 20px 20px;
        @media (max-width: 380px) {
          padding: 10px;
        }
        h3 {
          color: #061603;
          margin: 7px 0;
        }
      }
    }
  }
`;
