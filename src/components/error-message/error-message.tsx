import { useAppSelector } from '../../hooks';

const ErrorMessage = () : JSX.Element | null => {
  const error = useAppSelector((state) => state.offers.error);
  return (
    error ? <p>{error}</p> : null
  );
};

export default ErrorMessage;
