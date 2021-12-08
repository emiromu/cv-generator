import React from "react";
import './../styles/test.css';

const TestComponent = (props) => {
  const { property } = props;

  return (
    <div className="test-class">
        This is a test. Property = {property}
    </div>
  );
};

export default TestComponent;