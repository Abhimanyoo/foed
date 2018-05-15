import React from 'react';
import styled, { css } from 'styled-components';
import DropZone from 'react-dropzone';

const styles = css`
  border-radius: 4px;
  padding: 20px;
  overflow: hidden;
  text-align: center;
  border: 3px dashed #ccc;
  cursor: pointer;
  transition: 250ms ease;
`;

const activeStyle = {
  border: '3px dashed #2b6637',
  background: '#58b96b',
};

const rejectStyle = {
  border: '3px dashed #dc0818',
  background: '#f9525e',
};

const MyDropZone = styled(DropZone)`
  ${styles};
`;

export default props => {
  // Server side the max upload size is 20MB, so we set 19.8mb here to be on the safe side
  return (
    <MyDropZone
      maxSize={20000000}
      {...props}
      activeStyle={activeStyle}
      rejectStyle={rejectStyle}
    />
  );
};
