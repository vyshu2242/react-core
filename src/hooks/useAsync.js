import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "start") {
    return { loading: true, error: null, value: null };
  }

  if (action.type === "finish") {
    return { loading: false, error: null, value: action.value };
  }

  if (action.type === "error") {
    return { loading: false, error: action.error, value: null };
  }

  return state;
}

export default function useAync(asyncFn) {
  const [state, dispatch] = useReducer(reducer, {
    value: null,
    error: null,
    loading: false,
  });

  async function run(args = null) {
    try {
      dispatch({ type: "start" });
      const response = await asyncFn(args);
      dispatch({ type: "finish", value: response });
    } catch (error) {
      dispatch({ type: "error", error });
    }
  }

  return { ...state, run };
}
