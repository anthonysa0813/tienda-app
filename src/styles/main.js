import styled from "styled-components";
import heroImage from "../images/banner.png";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const HeaderContainer = styled.header`
  grid-column-start: 1;
  grid-column-end: -1;
  display: flex;
  background-color: var(--color-white);
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  & h1 {
    font-family: Inter;
    font-weight: 900;
    font-style: italic;
    font-size: 1.375rem;
    line-height: 1rem;
    color: var(--color-orange);
  }

  & .location {
    display: flex;
    align-items: center;
  }
  & .menuHeader {
    display: flex;
  }

  & .icon-locationIcon {
    color: var(--color-orange);
  }
  & .separateColumn {
    height: inherit;
    border-right: 1px solid #b8b4b4;
    margin-inline: 1rem;
  }

  & button {
    background-color: var(--color-maichite);
    border: none;
    color: white;
    padding: 9px 24px;
    border-radius: 0.5rem;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
`;

export const ProductContainer = styled.div`
  margin-block-start: 40px;
  padding-inline: 40px;
  overflow-y: auto;
`;

export const CardContainer = styled.div`
  background-color: var(--color-white);
  border-radius: 1rem;
  padding: 40px;
  display: flex;
  overflow: hidden;
  overflow: auto;
  gap: 40px;
`;

export const Card = styled.div`
  flex: 1 0 20%;
  display: flex;
  flex-direction: column;

  & .discount {
    width: 80px;
    border-radius: 10px;
    padding: 5px;
    background-color: var(--color-purplePg);
    color: var(--color-purple);
    margin-block-end: 20px;
  }

  & img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  & button {
    width: 100%;
    padding: 12px 68.5px;
    border: none;
    background-color: var(--color-maichite);
    color: white;
    border-radius: 8px;
    align-self: flex-end;
    cursor: pointer;
    &:hover {
      background-color: var(--color-maichitehover);
      transition: all 0.5s ease;
    }
  }
`;

export const ModalBg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-cocoaBrown);
  /* opacity: 80%; */
`;

export const ModalLocalContainer = styled.div`
  padding: 40px;
  border-radius: 1rem;
  background-color: var(--color-white);
  width: 50%;
  margin: 0 auto;
  margin-block-start: 80px;
  opacity: 1;
  /* height: 40vh; */
  overflow: auto;
  position: sticky;

  & .country,
  .subCountry {
    display: flex;
    align-items: center;
    padding: 13px;
    border-radius: 1rem;
    border: 1px solid var(--color-bulder);
  }
  .subCountry {
    position: absolute;
    flex-direction: column;
    width: calc(100% - 80px);
    padding: 0;
    z-index: 1000;
    background-color: var(--color-white);
    margin-block-start: 0.5rem;
  }
  & .local-subCountry {
    display: flex;
    width: 100%;
    padding: 13px;
    align-items: center;
  }
  & .closeIcon {
    position: absolute;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 50px;
    border-radius: 50%;
    background-color: var(--color-cocoaBrown);
    color: var(--color-white);
    font-size: 1rem;
  }
  & button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 8px;
    background-color: var(--color-maichite);
    color: white;
    margin-block-start: 1rem;
    cursor: pointer;
    &:hover {
      background-color: var(--color-maichitehover);
      transition: all 0.5s ease;
    }
  }
`;

// SecondModal
export const SecondModalContainer = styled.div`
  overflow: auto;
  overflow-y: auto;
  height: 50vh;
  & .columns {
    display: flex;
  }
  & select {
    display: block;
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid var(--color-bulder);
  }
  & .blockForm {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-block-start: 0.5rem;
  }
  & .count {
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    padding: 8px 24px;
    border-radius: 8px;
    background-color: var(--color-white);
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    & span {
      cursor: pointer;

      & span:active {
        font-size: 0.75rem;
        transition: all 0.3s ease;
      }
    }
  }
  & button {
    margin-block-start: 0;
  }
`;

export const Menu = styled.div`
  position: absolute;
  right: 0;
  background-color: var(--color-white);
  height: 100vh;
  width: 40%;
  & .titleMenu {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e1e1e1;
  }
  & .productMenu {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e1e1e1;
    padding: 1rem;

    & .col-1 {
      display: flex;
      gap: 27px;
    }
    & .col-1 .avatarProduct {
      width: 64px;
      height: 64px;
    }
    & img {
      width: 100%;
      object-fit: cover;
    }
    & .infoProduct p {
      margin: 0;
    }
    .col-2 {
      display: flex;
      align-items: center;
    }
    & .col-2 .count {
      display: flex;
      gap: 21px;
      font-size: 1.25rem;
      border-radius: 0.5rem;
      padding: 0.5rem;
      background: var(--color-white);
      box-shadow: 8px 8px 38px var(--color-silver), -8px -8px 38px #f9f9f9;
    }
    & span {
      cursor: pointer;
    }
  }

  & .totalInfo {
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;
    & .goTopay {
      display: flex;
      align-items: center;
      gap: 29px;
      border-radius: 0.5rem;
      padding: 8px 16px;
      background-color: var(--color-maichite);
      color: var(--color-white);
    }
    .countProduct {
      background-color: #2e7e78;
      padding: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      height: 14px;
      width: 14px;
    }
    & .goTopay p {
      margin: 0;
    }
  }
`;
