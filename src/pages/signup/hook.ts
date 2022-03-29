import { FormEvent, MouseEvent, useCallback, useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AuthApi } from 'src/apis/auth';
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

  const signup = useMutation(() => AuthApi.post.create({ email: email.value, password: password.value }), {
    onSuccess: () => navigate(RoutesUrl.LOGIN),
  });

  const identify = useMutation(
    (event: MouseEvent<HTMLButtonElement>) => AuthApi.post.emailIdentify({ email: email.value }),
    {},
  );

  const confirm = useMutation(
    (event: MouseEvent<HTMLButtonElement>) => AuthApi.post.emailConfirm({ code: code.value, email: email.value }),
    {},
  );

  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (!confirm.data) {
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
    [password.value, passwordCheck.value, confirm.data],
  );

  return {
    query: { confirm, identify, signup },
    state: {},
    error: error,
    input: { email, code, password, passwordCheck },
    event: { onSubmit },
  };
};
