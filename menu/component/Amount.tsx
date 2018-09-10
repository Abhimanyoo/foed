interface AmountProps {
  amount?: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const Amount = ({ amount }: AmountProps) => (
  <div>{amount && <div>{amount}</div>}</div>
);
