import axios from 'axios';
import { FormEvent, MouseEvent, useCallback, useState } from 'react';
import { useMutation } from 'react-query';
import { authAPI } from 'src/apis/auth';
import useInput from 'src/hooks/useInput';
import { Validate } from 'src/utils/validate';

export const useSignup = () => {
  const email = useInput('', Validate.email);
  const code = useInput('');
  const password = useInput('');
  const passwordCheck = useInput('');

  const [isIdentified, setIsIdentified] = useState<boolean>(false);
  const [formError, setFormError] = useState({
    isEmailError: false,
    isPasswordError: false,
    isPasswordCheckError: false,
  });

  // const onSuccessIdentify = useCallback(() => {
  //   setIsIdentified(true);
  // }, []);

  const onSubmit = useCallback(
    (isVerified) => (event: FormEvent) => {
      event.preventDefault();

      if (!isVerified) {
        setFormError({
          isEmailError: true,
          isPasswordError: false,
          isPasswordCheckError: false,
        });
        return;
      }

      if (!Validate.password(password.value)) {
        setFormError({
          isEmailError: false,
          isPasswordError: true,
          isPasswordCheckError: false,
        });
        return;
      }

      if (!Validate.passwordCheck(passwordCheck.value, password.value)) {
        setFormError({
          isEmailError: false,
          isPasswordError: false,
          isPasswordCheckError: true,
        });
        return;
      }

      setFormError({
        isEmailError: false,
        isPasswordError: false,
        isPasswordCheckError: false,
      });
    },
    [password.value, passwordCheck.value],
  );

  const identify = useMutation({
    mutationFn: (event: MouseEvent<HTMLButtonElement>) => {
      // 이메일 코드 요청
      authAPI.post.emailIdentify({ email: email.value });
      return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
          resolve('code');
        }, 1000);
      });
    },
    // onSuccess: onSuccessIdentify,
  });

  const verify = useMutation({
    mutationFn: (event: MouseEvent<HTMLButtonElement>) => {
      // 이메일 코드 전송
      if (identify.data) {
        authAPI.post.emailVerify({ code: identify.data, email: email.value });
      }

      return new Promise<boolean>((resolve, reject) => {
        setTimeout(() => {
          if (identify.data === code.value) {
            resolve(true);
          } else {
            reject(false);
          }
        }, 1000);
      });
    },
  });

  return {
    query: { verify, identify },
    state: { formError, isIdentified },
    input: { email, code, password, passwordCheck },
    event: { onSubmit },
  };
};
