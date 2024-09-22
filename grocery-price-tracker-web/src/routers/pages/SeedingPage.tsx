import { Button, Container, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { addCategoryOption, addStoreOption, getCategoryOptions, getStoreOptions } from '../../firebase/firestore';
import { useEffect, useState } from 'react';

const SeedingPage = () => {
  const [categoryOptions, setCatecoryOptions] = useState<string[]>();
  const [storeOptions, setStoreOptions] = useState<string[]>();

  const handleSeedCategoriesClick = () => {
    addCategoryOption('Fruits & Vegetables', 'System');
    addCategoryOption('Pantry', 'System');
    addCategoryOption('Dairy & Eggs', 'System');
    addCategoryOption('Meat', 'System');
    addCategoryOption('Deli', 'System');
    addCategoryOption('Snack', 'System');
    addCategoryOption('Frozen Food', 'System');
    addCategoryOption('Bakery', 'System');
    addCategoryOption('Drinks', 'System');
    addCategoryOption('Personal', 'System');
    addCategoryOption('Household', 'System');
    loadCategories();
  };

  const handleSeedStoresClick = () => {
    addStoreOption('Food Basic', 'System');
    addStoreOption('No Frills', 'System');
    addStoreOption('T&T Supermarket', 'System');
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