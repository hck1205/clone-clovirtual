import styled from "styled-components";

export const DummyItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  gap: 15px;
  background-color: #212020;
  padding: 20px;

  .content {
    display: block;
    min-width: 200px;
    min-height: 300px;
    background-color: #333333;
    border-radius: 5px;
    display: inline-block;
    -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300%
      100%;
    background-repeat: no-repeat;
    animation: shimmer 2.5s infinite;
  }

  @keyframes shimmer {
    100% {
      -webkit-mask-position: left;
    }
  }

  .top {
    width: 90%;
    height: 20px;
    background-color: #333333;
    border-radius: 5px;
  }
  .bottom {
    width: 50%;
    height: 20px;
    background-color: #333333;
    border-radius: 5px;
  }
`;
