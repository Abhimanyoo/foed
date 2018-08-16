import * as React from 'react';
import gql from 'graphql-tag';
import Dropzone from '../component/Dropzone';
import { Mutation } from 'react-apollo';
import styled from 'react-emotion';
import { Loader } from '@volst/ui-components';
import { AddNotification } from '../Props';

const StyledImg = styled('img')`
  max-width: 100%;
  display: block;
`;

const IMAGE_UPLOAD = gql`
  mutation($file: Upload!) {
    imageUpload(file: $file) {
      url
    }
  }
`;

interface Props {
  name: string;
  value?: string;
  label?: string;
  onChange: (name: string, value: string) => void;
  addNotification: AddNotification;
}

// TODO: add loading state
export class ImageUpload extends React.Component<Props, {}> {
  static defaultProps = {
    label: 'Upload image',
  };

  state = {
    isLoading: false,
  };

  handleDrop = async (files, mutate) => {
    if (files.length === 1) {
      const file = files[0];
      this.setState({ isLoading: true });
      try {
        const { data } = await mutate({ variables: { file } });
        this.props.onChange(this.props.name, data.imageUpload.url);
      } catch (err) {
        if (err.graphQLErrors) {
          this.props.addNotification({
            key: 'requestError',
            message: 'Uploading image failed',
          });
        } else {
          throw err;
        }
      }
      this.setState({ isLoading: false });
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
            {this.state.isLoading ? (
              <Loader show />
            ) : value ? (
              <StyledImg src={value} />
            ) : (
              label
            )}
          </Dropzone>
        )}
      </Mutation>
    );
  }
}
