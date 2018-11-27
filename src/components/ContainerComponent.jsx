import React from 'react';
import PresentationalComponent from './PresentationalComponent';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ContainerComponent extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render(){
    return (
      <div>
        <PresentationalComponent
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
