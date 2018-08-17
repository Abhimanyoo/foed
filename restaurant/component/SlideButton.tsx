import * as React from 'react';
import styled from 'react-emotion';
import { withGesture } from 'react-with-gesture';
import { Spring, animated } from 'react-spring';

interface Props {
  text?: string;
  icon?: React.ReactNode;
  onSlide?: () => void;
  xDelta?: number;
  down?: boolean;
}

@withGesture
export class SlideButton extends React.Component<Props, {}> {
  isActivated = false;

  render() {
    const { xDelta, down, icon } = this.props;

    if (!this.isActivated && (!down && xDelta >= 140)) {
      this.isActivated = true;
      this.props.onSlide();
    }
    let x = this.isActivated ? 140 : down ? xDelta + 5 : 0;
    x = x < 0 ? 0 : x > 140 ? 140 : x;

    return (
      <Spring native to={{ x }} immediate={n => down && n === 'x'}>
        {({ x }) => (
          <Container>
            <Background>
              <animated.div
                style={{
                  transform: x.interpolate(x => `translate3d(${x}px,0,0)`),
                }}
              >
                <BackgroundSlider />
              </animated.div>
              <Text>{this.props.text}</Text>
            </Background>
            <animated.div
              style={{
                transform: x.interpolate(x => `translate3d(${x}px,0,0)`),
              }}
            >
              <Grabber>{icon}</Grabber>
            </animated.div>
          </Container>
        )}
      </Spring>
    );
  }
}

const Container = styled('div')`
  position: relative;
  width: 180px;
  height: 40px;
`;

const Background = styled('div')`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #efefef;
  border-radius: 20px;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
`;

const Text = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
  font-size: 14px;
`;

const BackgroundSlider = styled('div')`
  width: 100%;
  height: 40px;
  left: -100%;
  margin-left: 20px;
  position: absolute;
  background: #0fce6e;
`;

const Grabber = styled('div')`
  z-index: 1;
  cursor: grab;
  width: 40px;
  height: 40px;
  background: #333;
  border-radius: 50%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;
