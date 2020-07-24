import React, { useState, useEffect } from "react";

function MultiSelectCheckBox({ options = [], callback }) {
  const [data, setData] = useState({});
  useEffect(() => {
    callback(data);
  });
  function toggleValue(e) {
    const { name, checked } = e.target;
    setData((data) => ({ ...data, [name]: checked }));
  }
  return (
    <form>
      <ul>
        {options.map((option) => {
          return (
            <li key={option.id}>
              <label htmlFor={option.name}>{option.name}</label>
              <input
                type="checkbox"
                name={option.id}
                checked={data[option.id] || false}
                onChange={toggleValue}
              />
            </li>
          );
        })}
      </ul>
    </form>
  );
}

function Checkbox() {
  return;
}

export default MultiSelectCheckBox;
