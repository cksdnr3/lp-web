import { FormEvent, useCallback, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { authAPI } from 'src/apis/auth';
import useInput from 'src/hooks/useInput';
import { Validate } from 'src/utils/validate';

function useLogin() {
  const navigate = useNavigate();

  const email = useInput('');
  const password = useInput('');

  const login = useMutation(() => authAPI.post.login({ email: email.value, password: password.value }), {
    onSuccess() {
      navigate('/');
    },
  });

  const [error, setError] = useState({
    isEmailError: false,
    isPasswordError: false,
  });

  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (!Validate.nill(email.value)) {
        setError({
          isEmailError: false,
          isPasswordError: true,
        });
        return;
      }

      if (!Validate.nill(password.value)) {
        setError({
          isEmailError: false,
          isPasswordError: true,
        });
        return;
      }

      login.mutate();
    },
    [login.mutate, email.value, password.value],
  );

  return {
    query: { login },
    state: {},
    error: error,
    input: { email, password },
    event: { onSubmit },
  };
}

export default useLogin;
