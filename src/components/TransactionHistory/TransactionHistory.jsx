import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.scss';

const TransactionHistory = ({items}) => {
  return (
    <table className={styles.transaction_history}>
      <thead className={styles.transaction_head}>
        <tr>
          <th className={styles.transaction_title}>Type</th>
          <th className={styles.transaction_title}>Amount</th>
          <th className={styles.transaction_title}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.transaction_body}>
        {items.map(item => (
          <tr key={item.id}>
            <td className={styles.transaction_type}>{item.type}</td>
            <td className={styles.transaction_amount}>{item.amount}</td>
            <td className={styles.transaction_currency}>{item.currency}</td>
          </tr>
        ))}
        
      </tbody>
    </table>
  )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired
  )).isRequired
};

export default TransactionHistory;