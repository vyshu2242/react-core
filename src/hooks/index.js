import { useEffect, useRef } from "react";

export function useComponentWillUnmount(cb) {
  useEffect(() => {
    return cb;
  }, []);
}

export function useComponentDidMount(cb) {
  useEffect(() => {
    cb();
  }, []);
}

export function usePrevious(props) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = props;
  });
  return ref.current;
}
