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
  & .menuHeader select {
    border: none;
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
`;

export const CardContainer = styled.div`
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
  }
`;
