import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ErrorBoundary Component
 *
 * A generic React error boundary component that catches JavaScript errors
 * anywhere in its child component tree, logs those errors, and displays a
 * fallback UI instead of the crashed component tree.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  /**
   * Updates state so the next render will show the fallback UI.
   * @param {Error} error - The error that was thrown.
   * @returns {object} State update.
   */
  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  /**
   * Catches errors in any components below and logs them.
   * @param {Error} error - The error that was thrown.
   * @param {object} errorInfo - An object with a componentStack key containing information about which component threw the error.
   */
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo: errorInfo });
    // Optionally call a logging service: logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI
      return this.props.fallback || (
        <div style={{ padding: '20px', border: '1px solid red', margin: '10px 0' }}>
          <h2>Something went wrong.</h2>
          <p>We've logged the error and will look into it.</p>
          {/* Optionally display error details during development */}
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error.toString()}
              <br />
              {this.state.errorInfo?.componentStack}
            </details>
          )}
        </div>
      );
    }

    // Normally, just render children
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  /** The child components to render normally. */
  children: PropTypes.node.isRequired,
  /** Optional custom fallback component or element to display on error. */
  fallback: PropTypes.node,
};

export default ErrorBoundary;