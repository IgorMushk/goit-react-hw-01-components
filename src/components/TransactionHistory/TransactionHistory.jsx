import PropTypes from 'prop-types';
import { TransTable, TransTableTd, TransTableTh, TransTableTr } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
  console.log(items);
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


// export const TransactionHistory = (items) => {
//   //console.log(items);
//   return (
//     <TransTable >
//       <thead>
//         <TransTableTr>
//           <TransTableTh>Type</TransTableTh>
//           <TransTableTh>Amount</TransTableTh>
//           <TransTableTh>Currency</TransTableTh>
//         </TransTableTr>
//       </thead>

//       <tbody>
//         <TransTableTr>
//           <TransTableTd>Invoice</TransTableTd>
//           <TransTableTd>125</TransTableTd>
//           <TransTableTd>USD</TransTableTd>
//         </TransTableTr>
//         <TransTableTr>
//           <TransTableTd>Withdrawal</TransTableTd>
//           <TransTableTd>85</TransTableTd>
//           <TransTableTd>USD</TransTableTd>
//         </TransTableTr>
//       </tbody>
//     </TransTable>
//   );
// };


// {/* <table class="transaction-history">
//   <thead>
//     <tr>
//       <th>Type</th>
//       <th>Amount</th>
//       <th>Currency</th>
//     </tr>
//   </thead>

//   <tbody>
//     <tr>
//       <td>Invoice</td>
//       <td>125</td>
//       <td>USD</td>
//     </tr>
//     <tr>
//       <td>Withdrawal</td>
//       <td>85</td>
//       <td>USD</td>
//     </tr>
//   </tbody>
// </table> */}

