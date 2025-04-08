// path to app.jsx from that file: ../App.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './TestTailwind.css';

const TestTailwind = ({ title }) => {
  return (
    <div className="test-container">
      <h2 className="test-title">{title}</h2>
      <p className="test-description">
        This component tests that CSS is working correctly with your bluish silver theme.
      </p>
      <div className="button-container">
        <button className="primary-button">
          Primary Button
        </button>
        <button className="secondary-button">
          Secondary Button
        </button>
      </div>
    </div>
  );
};

TestTailwind.propTypes = {
  title: PropTypes.string
};

TestTailwind.defaultProps = {
  title: 'Test Component'
};

export default TestTailwind;