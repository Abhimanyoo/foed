import React from 'react';
import { Keyframes } from 'react-spring';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import styled from 'react-emotion';

export const Container = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Count = styled('div')`
  position: absolute;
  margin-left: 1.2px;
`;

interface Props {
  count: number;
  fill?: string;
}

@observer
export class IconOrder extends React.Component<Props, {}> {
  @observable
  animationState = 'default';

  componentDidUpdate(prevProps) {
    const { count } = this.props;

    if (count !== prevProps.count) {
      this.animationState =
        this.animationState === 'bounce1' ? 'bounce2' : 'bounce1';
    }
  }

  render() {
    return (
      <Container>
        <svg width={42} height={30} viewBox="0 0 42 30" {...this.props}>
          <path d="M22 0C13.72 0 7 6.72 7 15c0 8.28 6.72 15 15 15 8.28 0 15-6.72 15-15 0-8.28-6.72-15-15-15zm0 27c-6.615 0-12-5.385-12-12S15.385 3 22 3s12 5.385 12 12-5.385 12-12 12z" />
          <path d="M0 0v7.002L1 8l1 1v20.004L3.003 30H4l.998-.996V9l.926-1L7 7.002V0H6v6H4.998V0H4v6h-.997V0H2v6H1V0zM40.185.206L37.995 10 39 13v16l1 1h1l.996-1V0z" />
        </svg>
        <CountContainer state={this.animationState}>
          {styles => <Count style={styles}>{this.props.count}</Count>}
        </CountContainer>
      </Container>
    );
  }
}

const increment = async call => {
  await call({
    from: { fontSize: 16 },
    to: { fontSize: 18 },
    config: {
      tension: 30,
      velocity: 200,
      friction: 10,
      restSpeedThreshold: 10,
      restDisplacementThreshold: 10,
    },
  });
  await call({
    to: { fontSize: 16 },
    config: {
      tension: 50,
      friction: 50,
      restSpeedThreshold: 1,
      restDisplacementThreshold: 1,
    },
  });
};

const CountContainer = Keyframes.Spring({
  default: { to: { fontSize: 16 } }, // It's children won't render without this state.
  bounce1: increment,
  bounce2: increment,
});
