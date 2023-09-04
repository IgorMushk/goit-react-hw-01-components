import { styled } from 'styled-components';

export const TransTable = styled.table`
  font-size: 18px;
  border-radius: 4px;
  /* text-align: center;
  overflow: hidden;
  border-collapse: collapse; */
  border-spacing: 1px;
  //width: 800px;
  box-shadow: 0 0 10px 2px #000000;
`;

export const TransTableTr = styled.tr`
  padding-top: 10px;
  padding-bottom: 10px;
  //transition: scale 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:nth-of-type(1n) {
    background-color: #e7ecf2;
  }
  &:nth-of-type(2n) {
    background-color: rgb(250, 245, 245);
  }
  /* tbody >  &:hover {
    scale: 1.03;
    cursor: pointer;
  } */
  tbody >  &:hover {
  cursor: pointer;
  font-weight: 700;
  }
`;

export const TransTableTh = styled.th`
  //padding: 10px 100px;
  //padding: 10px 60px;
  padding: 10px 44px;
  //padding-top: 10px;
  //padding-bottom: 10px;
  color: #ffffff;
  background-color: #00bcd5;
  text-transform: uppercase;
`;

export const TransTableTd = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
  color: #656565;
  &:nth-of-type(1) {
    //padding-left: 100px;
    padding-left: 30px;
    text-align: left;
    //text-align: center;
    text-transform: capitalize;
  }
  &:nth-of-type(2) {
    border: 1px;
    text-align: center;
  }
  &:nth-of-type(3) {
    border: 1px;
    text-align: center;
  }
`;
