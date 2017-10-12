import {React} from 'react';
import PropTypes from 'prop-types'

const Todo = (props) => {
    return (
        <li
            onClick={props.onClick}
            style={{
                textDecoration: props.closed ? 'line-through' : 'none'
            }}
        >
            {props.text}
        </li>
    );
}

Todo.propTypes = {
    onClick : PropTypes.func.isRequired,
    closed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo