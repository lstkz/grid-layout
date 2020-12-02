import * as React from 'react';
import styled, { css } from 'styled-components';
import { RowContext } from './Row';

const MEDIA_MD = '@media(min-width: 750px)';
const MEDIA_LG = '@media(min-width: 1200px)';

interface ColProps {
  className?: string;
  children?: React.ReactNode;
  sm?: number;
  md?: number;
  lg?: number;
}

const MAX_COLS = 12;

function _getWidth(cols: number) {
  const width = (cols / MAX_COLS) * 100;
  return css`
    max-width: ${width}%;
    flex: 0 0 ${width}%;
  `;
}

const Wrapper = styled.div<ColProps & { gutter: number }>`
  width: 100%;
  padding: ${(props) => props.gutter / 2}px;

  ${(props) => props.sm && _getWidth(props.sm)}

  ${(props) =>
    props.md &&
    css`
      ${MEDIA_MD} {
        ${_getWidth(props.md)}
      }
    `}

  ${(props) =>
    props.lg &&
    css`
      ${MEDIA_LG} {
        ${_getWidth(props.lg)}
      }
    `}
`;

const _Col = (props: ColProps) => {
  const {} = props;
  const context = React.useContext(RowContext);
  if (!context) {
    throw new Error('Cannot use <Col /> without <Row />');
  }

  return <Wrapper {...props} gutter={context.gutter} />;
};

export const Col = styled(_Col)``;
