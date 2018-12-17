import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRepoInfo } from '../actions';
import Header from '../components/header/Header';


class HeaderContainer extends Component {
  componentDidMount() {
    const { requestRepoInfo } = this.props;
    requestRepoInfo();
  }

  render() {
    const {
      fetching, repoInfo, error,
    } = this.props;
    return (
      <div>
        { !!repoInfo && Object.keys(repoInfo).length > 0
             && <Header {...repoInfo} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { repoInfoData } = state;

  const { fetching, repoInfo, error } = repoInfoData || {
    fetching: true,
    repoInfo: {},
  };

  return {
    fetching,
    repoInfo,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  requestRepoInfo: () => dispatch(fetchRepoInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);


HeaderContainer.propTypes = {
  requestRepoInfo: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  repoInfo: PropTypes.object.isRequired,
};
