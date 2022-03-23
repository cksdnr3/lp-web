import { FormEvent, useCallback } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { authAPI } from 'src/apis/auth';
import useInput from 'src/hooks/useInput';

function useLogin() {
  const navigate = useNavigate();

  const { value: email, setValue: setEmail, onChange: onChangeEmail } = useInput('');
  const { value: password, setValue: setPassword, onChange: onChangePassword } = useInput('');

  const { mutate } = useMutation(() => authAPI.post.login({ email, password }), {
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
    state: { email: [email, setEmail] as const, password: [password, setPassword] as const },
    event: { onSubmit, onChangeEmail, onChangePassword },
  };
}

export default useLogin;
