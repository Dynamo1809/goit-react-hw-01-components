import styles from './Statistics.module.scss';
import PropTypes from 'prop-types';
var randomColor = require('randomcolor'); 

var colors = randomColor({
  count: 10,
   hue: 'random'
}); 

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      { title && (
      <h2 className={styles.title}>{title}</h2>
      )}
      
      <ul className={styles.stat_list}>
        {stats.map( ( stat, index ) => {           
          return (
            <li 
              key={stat.id} 
              className={styles.item} 
              style={{ backgroundColor: colors[index] }}
            >
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
            )
          })       
        } 
      </ul>
    </section>
  )
}

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
};

export default Statistics;
