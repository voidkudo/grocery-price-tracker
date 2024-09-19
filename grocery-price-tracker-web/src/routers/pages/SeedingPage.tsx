import { Button, Container, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { addCategory, addStore, getCategories } from '../../firebase/firestore';
import { useEffect, useState } from 'react';
import { getStores } from '../../firebase/firestore';

const SeedingPage = () => {
  const [categories, setCatecories] = useState<string[]>();
  const [stores, setStores] = useState<string[]>();

  const handleSeedCategoriesClick = () => {
    addCategory('Fruits & Vegetables');
    addCategory('Pantry');
    addCategory('Dairy & Eggs');
    addCategory('Meat');
    addCategory('Deli');
    addCategory('Snack');
    addCategory('Frozen Food');
    addCategory('Bakery');
    addCategory('Drinks');
    addCategory('Personal');
    addCategory('Household');
    loadCategories();
  };

  const handleSeedStoresClick = () => {
    addStore('Food Basic');
    addStore('No Frills');
    addStore('T&T Supermarket');
    loadStores();
  };

  const loadCategories = async () => {
    await getCategories().then(data => setCatecories(data));
  };

  const loadStores = async () => {
    await getStores().then(data => setStores(data));
  };

  useEffect(() => {
    loadCategories();
    loadStores();
  }, []);

  return (
    <Container>
      <Typography variant='h3'>Seed Database</Typography>
      <Button variant='contained' onClick={handleSeedCategoriesClick}>Seed Categories</Button>
      <Typography>Categories: {JSON.stringify(categories)}</Typography>
      <Button variant='contained' onClick={handleSeedStoresClick}>Seed Stores</Button>
      <Typography>Stores: {JSON.stringify(stores)}</Typography>
      <Divider />
      <Typography>Click <Link to='/'>HERE</Link> to return to the home page.</Typography>
    </Container>
  )
};

export default SeedingPage;