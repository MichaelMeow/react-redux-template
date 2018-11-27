import React from 'react';
import PropTypes from 'prop-types';

function PresentationalComponent(props){
  console.log(props.clicks);
  return (
    <div>
      <div onClick={() => {props.onMutateStateFunction();}}>Click me</div>
      <div>{props.clicks}</div>
    </div>
  );
}

PresentationalComponent.propTypes = {
  onMutateStateFunction: PropTypes.func,
  clicks: PropTypes.number
};

export default PresentationalComponent;
