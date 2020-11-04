import React from 'react';
import { connect } from 'react-redux';
import { setError } from '../../redux/error/error.actions';
import { Redirect } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: this.props.error || false
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.setError({ error: 'DEFAULT_ERROR' });
    this.setState({ hasError: true });
  }
  render() {
    return this.state.hasError ? (
      <Redirect to='/error-page' />
    ) : (
      this.props.children
    );
  }
}
const mapDispatchToProps = {
  setError
};
export default connect(null, mapDispatchToProps)(ErrorBoundary);
