import App from './App';
import { render } from './utils/test/render';
import '@testing-library/jest-dom';
import { useSelector } from 'react-redux';
import reducer, { userActions } from 'src/features/user/user.slice';
// import { useSelector } from '../__mocks__/react-redux'

describe('<App />', () => {
  it('Render - <App />', () => {
    const { container } = render(<App />);

    expect(container).toBeInvalid();
  });

  it('Dispatch - login', () => {});
});
