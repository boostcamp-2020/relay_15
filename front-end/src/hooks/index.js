const { useState, useCallback } = require('react');

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value]
  );

  return [value, onChange, setValue];
}
