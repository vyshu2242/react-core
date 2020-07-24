import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import styled from "styled-components";
import { Input } from "semantic-ui-react";

function Star({ marked, starId, className }) {
  return (
    <span
      star-id={starId}
      style={{ color: "#ff9933" }}
      role="button"
      className={className}
    >
      <Input label="Hello World" data-testid="test" />
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
}

export default styled(Star)`
  font-size: 100px;
`;
