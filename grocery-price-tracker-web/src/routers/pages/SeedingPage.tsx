import { Button, Container, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { addStore } from '../../firebase/firestore';
import { useEffect, useState } from 'react';
import { getStores } from '../../firebase/firestore';

const SeedingPage = () => {
  const [stores, setStores] = useState<string[]>();

  const handleSeedStoreClick = () => {
    addStore('Food Basic');
    addStore('No Frills');
    addStore('T&T Supermarket');
    getStores().then(data => setStores(data));
  };

  useEffect(() => {
    getStores().then(data => setStores(data));
  }, []);

  return (
    <Container>
      <Typography variant='h3'>Seed Database</Typography>
      <Button variant='contained' onClick={handleSeedStoreClick}>Seed Stores</Button>
      <Typography>Stores: {JSON.stringify(stores)}</Typography>
      <Divider />
      <Typography>Click <Link to='/'>HERE</Link> to return to the home page.</Typography>
    </Container>
  )
};

export default SeedingPage;