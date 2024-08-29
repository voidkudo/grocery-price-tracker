import { Container, Divider, Typography } from '@mui/material';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  const getErrorMessage = (error: unknown) => {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`
    } else if (error instanceof Error) {
      return error.message
    } else if (typeof error === 'string') {
      return error
    } else {
      console.error(error)
      return 'Unknown error'
    }
  };

  return (
    <Container>
      <Typography variant='h1'>Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
      <Typography>
        <Typography variant='inherit'>{getErrorMessage(error)}</Typography>
      </Typography>
      <Divider />
      <Typography>Click <Link to='/'>HERE</Link> to return to the home page.</Typography>
    </Container>
  )
};

export default ErrorPage;