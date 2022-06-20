import styled from "styled-components";

export const AboutStyle = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  padding: 120px 0 0 0;

  @media (max-width: 1000px) {
    padding: 100px 0 0 0;
  }
  @media (max-width: 700px) {
    padding:  0;
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
      height: 600px;
      text-align: left;
      @media (max-width: 1000px) {
        height: 580px;
      }
      @media (max-width: 700px) {
        height: 480px;
      }
      .line{
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
          margin-left: 20px;
          @media (max-width: 700px) {
            margin-left: 15px;
        }
        }
    }
  }
}

  .section {
    .dot{
      @media (max-width: 700px) {
        display: none;
      }
    }
    .text {
      padding: 40px 80px 60px 80px;
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
        margin: 15px 0;
        color: #061603;
        opacity: 0.75;

        @media (max-width: 700px) {
        font-size: 16px;
        line-height: 28px;
      }
      @media (max-width: 460px) {
        font-size: 15px;
        
      }
      }
    }
  }

`;
