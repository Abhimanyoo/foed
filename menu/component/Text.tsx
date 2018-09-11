import styled from 'react-emotion';

interface TextProps {
  size?: 'small' | 'medium' | 'big';
  tone?: 'light' | 'warning';
}

export const Text = styled<TextProps, 'div'>('div')`
  ${props => {
    switch (props.size) {
      case 'small':
        return `
          font-size: 13px;
          font-weight: 700;
        `;
        break;
      case 'medium':
        return `
          font-size: 20px;
          font-weight: 600;
          line-height: 22px;
        `;
        break;
      case 'big':
        return `
          font-size: 32px;
          font-weight: 600;
          line-height: 32px;
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
