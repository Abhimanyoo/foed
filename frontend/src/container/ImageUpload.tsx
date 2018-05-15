import * as React from 'react';
import gql from 'graphql-tag';
import Dropzone from '../component/Dropzone';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';

const StyledImg = styled.img`
  max-width: 100%;
`;

const IMAGE_UPLOAD = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      url
    }
  }
`;

interface Props {
  name: string;
  value?: string;
  label?: string;
  onChange: (name: string, value: string) => void;
}

// TODO: add loading state
export class ImageUpload extends React.Component<Props, {}> {
  static defaultProps = {
    label: 'Upload image',
  };

  handleDrop = async (files, mutate) => {
    if (files.length === 1) {
      const file = files[0];
      const { data } = await mutate({ variables: { file } });
      this.props.onChange(this.props.name, data.singleUpload.url);
    }
  };
  render() {
    const { value, label } = this.props;
    return (
      <Mutation mutation={IMAGE_UPLOAD}>
        {mutate => (
          <Dropzone
            onDrop={files => this.handleDrop(files, mutate)}
            multiple={false}
            accept="image/*"
          >
            {value ? <StyledImg src={value} /> : label}
          </Dropzone>
        )}
      </Mutation>
    );
  }
}
