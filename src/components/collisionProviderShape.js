import PropTypes from 'prop-types';

export default {
  itemId: PropTypes.string.isRequired,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired,
  initialPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ]).isRequired
};
