/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fetchGitIssues } from '../actions';
import Issue from '../components/issues-table/Issue';
import LoaderComponent from '../components/commons/LoaderComponent';
import SomethingWentWrong from '../components/commons/SomethingWentWrong';

const IssuesContainerWrapper = styled.div`
   border :  1px solid #e1e4e8;
   border-collapse : collapse;
`;
class IssuesContainer extends Component {
  componentDidMount() {
    const { requestIssues } = this.props;
    requestIssues();
  }

  render() {
    const {
      fetching, issues, error,
    } = this.props;

    return (

      <div>
        {fetching ? (
          <LoaderComponent />
        ) : (error ? <SomethingWentWrong />
          : (
            <IssuesContainerWrapper>
              { !!issues
                    && issues.map(issue => <Issue key={issue.id} issue={issue} />)
              }
            </IssuesContainerWrapper>
          )
        )}

      </div>


    );
  }
}

const mapStateToProps = (state) => {
  const { issuesData } = state;

  const { fetching, issues, error } = issuesData || {
    fetching: true,
  };

  return {
    fetching,
    issues,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  requestIssues: () => dispatch(fetchGitIssues()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IssuesContainer);


IssuesContainer.propTypes = {
  requestIssues: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  issues: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

IssuesContainer.defaultProps = {
  error: null,
};
