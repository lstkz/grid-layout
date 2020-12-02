import * as React from 'react';
import styled from 'styled-components';

interface RowProps {
  className?: string;
  children: React.ReactNode;
  gutter?: number;
}

export const RowContext = React.createContext<{
  gutter: number;
} | null>(null);

const DEFAULT_GUTTER = 30;

const _Row = (props: RowProps) => {
  const { className, children, gutter } = props;
  return (
    <div className={className}>
      <RowContext.Provider
        value={{
          gutter: gutter ?? DEFAULT_GUTTER,
        }}
      >
        {children}
      </RowContext.Provider>
    </div>
  );
};

export const Row = styled(_Row)`
  display: flex;
  flex-wrap: wrap;
  margin: -${(props) => (props.gutter ?? DEFAULT_GUTTER) / 2}px;
`;
