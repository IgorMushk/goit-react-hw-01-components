import PropTypes from 'prop-types';
import { TransTable, TransTableTd, TransTableTh, TransTableTr } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
  //console.log(items);
  return (
    <TransTable >
      <thead>
        <TransTableTr>
          <TransTableTh>Type</TransTableTh>
          <TransTableTh>Amount</TransTableTh>
          <TransTableTh>Currency</TransTableTh>
        </TransTableTr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) =>(
          <TransTableTr key={id}>
          <TransTableTd>{type}</TransTableTd>
          <TransTableTd>{amount}</TransTableTd>
          <TransTableTd>{currency}</TransTableTd>
        </TransTableTr>
        ))}
      </tbody>
    </TransTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
