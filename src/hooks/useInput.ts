import { ChangeEvent, useCallback, useEffect, useState } from 'react';

type Validator = (value: string) => boolean;

const useInput = (initialstate: string, validator?: Validator) => {
  const [value, setValue] = useState<string>(initialstate);
  const [isValid, setIsValid] = useState<boolean>(false);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(event.target.value);

      if (validator) {
        setIsValid(validator(event.target.value));
      }
    },
    [validator],
  );

  return { value, isValid, onChange, setValue };
};

export default useInput;
