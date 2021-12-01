import React, { useCallback, useEffect } from "react";

type ResizeCallback = (contentRect: DOMRectReadOnly) => void;

export function useObserveElementResize(ref: React.RefObject<Element>, onResize: ResizeCallback) {
  const handleResize = useCallback(entries => {
    const entry = entries[0];
    onResize(entry.contentRect);
  }, [onResize]);

  useEffect(() => {
    const observer = new ResizeObserver(handleResize);

    if (ref) {
      observer.observe(ref.current!);
    }
    return () => {
      observer.disconnect();
    };
  }, [handleResize, ref]);
}