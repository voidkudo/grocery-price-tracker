import { Button, Container, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { addCategoryOption, addStoreOption, getCategoryOptions, getStoreOptions } from '../../firebase/firestore';
import { useEffect, useState } from 'react';

const SeedingPage = () => {
  const [categoryOptions, setCatecoryOptions] = useState<string[]>();
  const [storeOptions, setStoreOptions] = useState<string[]>();

  const handleSeedCategoriesClick = () => {
    addCategoryOption('Fruits & Vegetables');
    addCategoryOption('Pantry');
    addCategoryOption('Dairy & Eggs');
    addCategoryOption('Meat');
    addCategoryOption('Deli');
    addCategoryOption('Snack');
    addCategoryOption('Frozen Food');
    addCategoryOption('Bakery');
    addCategoryOption('Drinks');
    addCategoryOption('Personal');
    addCategoryOption('Household');
    loadCategories();
  };

  const handleSeedStoresClick = () => {
    addStoreOption('Food Basic');
    addStoreOption('No Frills');
    addStoreOption('T&T Supermarket');
    loadStores();
  };

  const loadCategories = async () => {
    await getCategoryOptions().then(options => setCatecoryOptions(options));
  };

  const loadStores = async () => {
    await getStoreOptions().then(options => setStoreOptions(options));
  };

  useEffect(() => {
    loadCategories();
    loadStores();
  }, []);

  return (
    <Container>
      <Typography variant='h3'>Seed Database</Typography>
      <Button variant='contained' onClick={handleSeedCategoriesClick}>Seed Categories</Button>
      <Typography>Categories: {JSON.stringify(categoryOptions)}</Typography>
      <Button variant='contained' onClick={handleSeedStoresClick}>Seed Stores</Button>
      <Typography>Stores: {JSON.stringify(storeOptions)}</Typography>
      <Divider />
      <Typography>Click <Link to='/'>HERE</Link> to return to the home page.</Typography>
    </Container>
  )
};

export default SeedingPage;