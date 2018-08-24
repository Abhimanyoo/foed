import * as React from 'react';

interface Props {
  className?: string;
  src: string;
  alt?: string;
}

export class ImageFade extends React.Component<Props, { loaded: boolean }> {
  state = { loaded: false };
  private imgRef: HTMLImageElement;

  onImageLoad = () => {
    if (this.imgRef) {
      this.setState({ loaded: true });
    }
  };

  componentDidMount() {
    const imgTag = this.imgRef;
    const imgSrc = imgTag.getAttribute('src');
    const img = new Image();
    img.onload = this.onImageLoad;
    img.src = imgSrc;
  }

  render() {
    const { className, ...props } = this.props;

    return (
      <img
        ref={c => (this.imgRef = c)}
        {...props}
        className={`${className} ${this.state.loaded ? 'loaded' : ''}`}
      />
    );
  }
}
