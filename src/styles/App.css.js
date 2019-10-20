import { css } from '@emotion/core';

export const headerStyle = css`
  margin: 20px auto;
  text-align: center;
`;

export const headingStyle = css`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.23;
  color: rgba(0, 0, 0, 0.85);
`;

export const mainStyle = css`
  margin: 20px auto;
  padding: 0 20px;
`;

export const formStyle = css`
  border: 1px solid #ebedf0;
  background-color: #fff;

  @media only screen and (min-device-width: 480px) {
    margin: 0 auto;
    width: 350px;
  }
`;

export const gridContainerStyle = css`
  display: grid;
  grid-gap: 20px 5px;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    '. volume'
    'label input'
    '. error';
  align-items: center;
  padding: 30px 20px;
`;

export const statusStyle = css`
  grid-area: volume;
`;

export const labelStyle = css`
  grid-area: label;
  text-align: right;
`;

export const inputStyle = css`
  grid-area: input;
  -webkit-appearance: none;
  width: 100%;
  margin: 5px 0;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: #91d5ff;
    border-radius: 4px;
  }

  &::-webkit-slider-thumb {
    border: 2px solid #91d5ff;
    height: 14px;
    width: 14px;
    border-radius: 34px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5.001px;
  }

  &:focus::-webkit-slider-runnable-track {
    background: #abdfff;
  }

  &::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: #91d5ff;
    border-radius: 4px;
  }

  &::-moz-range-thumb {
    border: 2px solid #91d5ff;
    height: 14px;
    width: 14px;
    border-radius: 34px;
    background: #ffffff;
    cursor: pointer;
  }

  &::-ms-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: #77cbff;
    border-radius: 2.046px;
  }

  &::-ms-fill-upper {
    background: #91d5ff;
    border-radius: 2.046px;
  }

  &::-ms-thumb {
    border: 2px solid #91d5ff;
    height: 14px;
    width: 14px;
    border-radius: 34px;
    background: #ffffff;
    cursor: pointer;
    height: 4px;
  }

  &:focus::-ms-fill-lower {
    background: #91d5ff;
  }

  &:focus::-ms-fill-upper {
    background: #abdfff;
  }
`;

export const inputDefaultStyle = css`
`;

export const errorStyle = css`
  grid-area: error;
  color: #f5222d;
`;
