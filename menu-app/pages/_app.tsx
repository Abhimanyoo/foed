import App, { Container } from 'next/app';
import React from 'react';

// Not really necessary at the moment but it will be.
// TODO fix types
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
