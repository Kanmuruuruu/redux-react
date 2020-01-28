import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch({ type: "ADD" }),
  onSub: () => dispatch({ type: "SUB" }),
});

const CounterComponent = ({counter, onAdd, onSub}) => {
  return (
    <div>
      <p>{counter}</p>
      <div>
        <button onClick={onAdd}>Add</button>
        <button onClick={onSub}>SUB</button>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
