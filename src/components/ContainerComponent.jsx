import React from 'react';
import PresentationalComponent from './PresentationalComponent';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ContainerComponent extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleMutateStateFunction = this.handleMutateStateFunction.bind(this);
  }

  handleMutateStateFunction() {
    const { dispatch } = props;
    const action = {
      type: 'CLICK',
      numberOfClicks: this.props.clicks
    };
    dispatch(action);
  }

  render(){
    return (
      <div>
        <PresentationalComponent
          onMutateStateFunction={this.handleMutateStateFunction}
          clicks={this.props.clicks}
        />
      </div>
    );
  }

}

ContainerComponent.propTypes = {
  numberOfClicks: PropTypes.number
};

const mapStateToProps = state => {
  return {
    clicks: state.numberOfClicks
  }
}

export default connect(mapStateToProps)(ContainerComponent);
