import { FormEvent, useCallback } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { authAPI } from 'src/apis/auth';
import useInput from 'src/hooks/useInput';

function useLogin() {
  const navigate = useNavigate();

  const email = useInput('');
  const passowrd = useInput('');

  const { mutate } = useMutation(() => authAPI.post.login({ email: email.value, password: passowrd.value }), {
    onSuccess() {
      navigate('/');
    },
  });

  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      mutate();
    },
    [mutate],
  );

  return {
    input: { email, passowrd },
    event: { onSubmit },
  };
}

export default useLogin;
