import { FormEvent, MouseEvent, useCallback, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { authAPI } from 'src/apis/auth';
import { RoutesUrl } from 'src/constants/routesUrl';
import useInput from 'src/hooks/useInput';
import { token } from 'src/utils/token';
import { Validate } from 'src/utils/validate';

export const useSignup = () => {
  const navigate = useNavigate();

  const email = useInput('', Validate.email);
  const code = useInput('');
  const password = useInput('');
  const passwordCheck = useInput('');

  const [error, setError] = useState({
    isEmailError: false,
    isPasswordError: false,
    isPasswordCheckError: false,
  });

  const signup = useMutation(() => authAPI.post.create({ email: email.value, password: password.value }), {
    onSuccess: () => navigate(RoutesUrl.LOGIN),
  });

  const identify = useMutation(
    (event: MouseEvent<HTMLButtonElement>) => authAPI.post.emailIdentify({ email: email.value }),
    {},
  );

  const verify = useMutation(
    (event: MouseEvent<HTMLButtonElement>) => authAPI.post.emailConfirm({ code: code.value, email: email.value }),
    {},
  );

  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (!verify.data) {
        setError({
          isEmailError: true,
          isPasswordError: false,
          isPasswordCheckError: false,
        });
        return;
      }

      if (!Validate.password(password.value)) {
        setError({
          isEmailError: false,
          isPasswordError: true,
          isPasswordCheckError: false,
        });
        return;
      }

      if (!Validate.passwordCheck(passwordCheck.value, password.value)) {
        setError({
          isEmailError: false,
          isPasswordError: false,
          isPasswordCheckError: true,
        });
        return;
      }

      setError({
        isEmailError: false,
        isPasswordError: false,
        isPasswordCheckError: false,
      });

      signup.mutate();
    },
    [password.value, passwordCheck.value, verify.data],
  );

  return {
    query: { verify, identify, signup },
    state: {},
    error: error,
    input: { email, code, password, passwordCheck },
    event: { onSubmit },
  };
};
