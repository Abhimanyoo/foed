import React from 'react';

export const IconOrder = ({
  text,
  ...props
}: {
  text: number;
  fill?: string;
}) => (
  <svg width={42} height={30} viewBox="0 0 42 30" {...props}>
    <path d="M22 0C13.72 0 7 6.72 7 15c0 8.28 6.72 15 15 15 8.28 0 15-6.72 15-15 0-8.28-6.72-15-15-15zm0 27c-6.615 0-12-5.385-12-12S15.385 3 22 3s12 5.385 12 12-5.385 12-12 12z" />
    <path d="M0 0v7.002L1 8l1 1v20.004L3.003 30H4l.998-.996V9l.926-1L7 7.002V0H6v6H4.998V0H4v6h-.997V0H2v6H1V0zM40.185.206L37.995 10 39 13v16l1 1h1l.996-1V0z" />
    <text fillRule="evenodd" fontSize="14" x="22" y="20" textAnchor="middle">
      {text}
    </text>
  </svg>
);
