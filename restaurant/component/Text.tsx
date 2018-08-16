import styled from 'react-emotion';

interface TextProps {
  size?: 'small';
  tone?: 'light' | 'warning';
}

export const Text = styled<TextProps, 'div'>('div')`
  ${props => {
    switch (props.size) {
      case 'small':
        return `
          font-size: 13px;
          font-weight: 600;
        `;
        break;
      default:
        return '';
    }
  }};

  ${props => {
    switch (props.tone) {
      case 'light':
        return `
          color: #888;
        `;
        break;
      case 'warning':
        return `
          color: #eba04f;
        `;
        break;
      default:
        return '';
    }
  }};
`;
