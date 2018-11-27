import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function PresentationalComponent(props){

  function mutateStateFunction() {
    const { dispatch } = props;
    const action = {
      type: 'CLICK',
      numberOfClicks: props.clicks
    };
    dispatch(action);
  }

  return (
    <div>
      <div onClick={mutateStateFunction}>Click me</div>
      <div>{props.clicks}</div>
    </div>
  );
}

PresentationalComponent.propTypes = {
  onMutateStateFunction: PropTypes.func,
  clicks: PropTypes.number
};

export default connect()(PresentationalComponent);
