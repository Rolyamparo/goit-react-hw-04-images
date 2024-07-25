// import react from "react";
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={css.Button} onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};


// class Button extends Component {
//   static propTypes = {
//     onClick: PropTypes.func.isRequired,
//     };
    
//      render() {
//     return (
//       <button className={css.Button} onClick={this.props.onClick}>
//         Load more
//       </button>
//     );
//   }
// }

export default Button;