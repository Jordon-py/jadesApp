// path to app.jsx from that file: ../App.jsx
import React from 'react';
import PropTypes from 'prop-types';

const TestTailwind = ({ title }) => {
  return (
    <div className="p-6 max-w-md mx-auto bg-bg-dark rounded-md shadow-medium backdrop-blur-md">
      <h2 className="text-2xl font-bold text-blue-silver mb-4">{title}</h2>
      <p className="text-text-light mb-4">
        This component tests that Tailwind CSS is working correctly with your bluish silver theme.
      </p>
      <div className="flex space-x-4">
        <button className="bg-blue-silver-light text-gray-800 px-4 py-2 rounded-lg hover:bg-blue-silver transition-colors">
          Primary Button
        </button>
        <button className="border border-blue-silver-dark text-blue-silver-dark px-4 py-2 rounded-lg hover:bg-blue-silver-dark hover:text-text-light transition-colors">
          Secondary Button
        </button>
      </div>
    </div>
  );
};

TestTailwind.propTypes = {
  title: PropTypes.string.isRequired
};

TestTailwind.defaultProps = {
  title: 'Tailwind Test Component'
};

export default TestTailwind;