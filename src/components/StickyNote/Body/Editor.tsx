import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Base = styled.textarea`
  padding: 5px;
  flex-grow: 1;
  resize: none;
  background-color: inherit;
  color: inherit;
`;

interface EditorProps {
  value: string;
  onChange: (description: string) => void;
  onExit: () => void;
}

export const Editor: React.FC<EditorProps> = ({
  value,
  onChange,
  onExit
}) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [internalValue, setInternalValue] = useState(value);
  const editorValueRef = useRef(internalValue);
  editorValueRef.current = internalValue;

  useEffect(() => {
    const element = ref.current!;
    element.focus();
    element.setSelectionRange(element.value.length, element.value.length);
  }, []);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInternalValue(event.target.value);
  }, []);

  const saveAndExit = useCallback(() => {
    onChange(editorValueRef.current);
    onExit();
  }, [onChange, onExit]);

  const handleBlur = useCallback(saveAndExit, [saveAndExit]);
  const handlerKeyPress = useCallback(
    event => {
      if (event.code === "Enter" && event.ctrlKey) {
        saveAndExit();
      }
    },
    [saveAndExit]
  );
  const handleKeyDown = useCallback(
    event => {
      if (event.code === "Escape") {
        onExit();
      }
    },
    [onExit]
  );

  return <Base ref={ref} onChange={handleChange} value={internalValue} onBlur={handleBlur}
               onKeyPress={handlerKeyPress} onKeyDown={handleKeyDown}/>;
};