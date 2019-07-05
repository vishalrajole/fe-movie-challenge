import React, { Component } from "react";
import styled from "styled-components";

const Search = ({ className }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 32 32"
    >
      <path d="M22.222 19.556h-1.404l-0.498-0.48c1.742-2.027 2.791-4.658 2.791-7.52 0-6.382-5.173-11.556-11.556-11.556s-11.556 5.173-11.556 11.556c0 6.382 5.173 11.556 11.556 11.556 2.862 0 5.493-1.049 7.52-2.791l0.48 0.498v1.404l8.889 8.871 2.649-2.649-8.871-8.889zM11.556 19.556c-4.427 0-8-3.573-8-8s3.573-8 8-8c4.427 0 8 3.573 8 8s-3.573 8-8 8v0z" />
    </svg>
  );
};

export const IconSearch = styled(Search)`
  width: 1.5rem;
  height: 1.5rem;
  fill: ${props => props.theme.BASE_ICON_COLOR};
`;

const Image = ({ className }) => {
  return (
    <svg version="1.0" className={className} viewBox="0 0 32 32">
      <path d="M29.996 4c0.001 0.001 0.003 0.002 0.004 0.004v23.993c-0.001 0.001-0.002 0.003-0.004 0.004h-27.993c-0.001-0.001-0.003-0.002-0.004-0.004v-23.993c0.001-0.001 0.002-0.003 0.004-0.004h27.993zM30 2h-28c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2v0z" />
      <path d="M26 9c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
      <path d="M28 26h-24v-4l7-12 8 10h2l7-6z" />
    </svg>
  );
};

export const IconImage = styled(Image)`
  width: 1.5rem;
  height: 1.5rem;
  fill: ${props => props.theme.BASE_ICON_COLOR};
`;

const Clock = ({ className }) => {
  return (
    <svg version="1.0" className={className} viewBox="0 0 32 32">
      <path d="M20.586 23.414l-6.586-6.586v-8.828h4v7.172l5.414 5.414zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z" />
    </svg>
  );
};

export const IconClock = styled(Clock)`
  width: 1rem;
  height: 1rem;
  fill: currentColor;
`;

const ArrowLeft = ({ className }) => {
  return (
    <svg version="1.0" className={className} viewBox="0 0 32 32">
      <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z" />
    </svg>
  );
};

export const IconArrowLeft = styled(ArrowLeft)`
  width: 1.2rem;
  height: 1.2rem;
  fill: currentColor;
`;
