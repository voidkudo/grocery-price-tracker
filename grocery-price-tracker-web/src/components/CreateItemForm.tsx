import { Button, Checkbox, FormControlLabel, FormGroup, Stack, TextField } from "@mui/material";
import SelectOrTextField from "./createItemForm/SelectOrTextField";
import { CreateGroceryItemRecord } from "../types/data";
import { ChangeEvent, useEffect, useState } from "react";

interface CreateItemFormProps {
  getCategoryOptions: () => Promise<string[]>,
  getItemOptionsByCategory: (category: string) => Promise<string[]>,
  getStoreOptions: () => Promise<string[]>,
  handleSubmit: (record: CreateGroceryItemRecord) => void,
};

const recordInit: CreateGroceryItemRecord = {
  category: '',
  name: '',
  desc: '',
  brand: '',
  price: 0.01,
  qty: 1,
  isTaxable: false,
  store: '',
  purchaseDate: new Date().toISOString().split('T')[0],
  isNewCategory: false,
  isNewItem: false,
  isNewStore: false,
};

const CreateItemForm = (props: CreateItemFormProps) => {
  const [categoryOptions, setCategoryOptions] = useState<string[]>([]);
  const [itemOptions, setItemOptions] = useState<string[]>([]);
  const [storeOptions, setStoreOptions] = useState<string[]>([]);

  const [record, setRecord] = useState<CreateGroceryItemRecord>(recordInit);

  const handleCategoryChecked = (isChecked: boolean) => {
    setRecord({
      ...record,
      category: '',
      isNewCategory: isChecked,
    })
  };

  const handleCategoryChange = (value: string) => {
    props.getItemOptionsByCategory(value).then(data => setItemOptions(data));
    setRecord({
      ...record,
      category: value,
    });
  };

  const handleItemChecked = (isChecked: boolean) => {
    setRecord({
      ...record,
      name: '',
      isNewItem: isChecked,
    })
  };

  const handleItemChange = (value: string) => {
    setRecord({
      ...record,
      name: value,
    });
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRecord({
      ...record,
      desc: e.target.value,
    })
  };

  const handleBrandChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRecord({
      ...record,
      brand: e.target.value,
    })
  };

  const handleQtyChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRecord({
      ...record,
      qty: parseInt(e.target.value),
    })
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRecord({
      ...record,
      price: parseFloat(e.target.value),
    })
  };

  const handleIsTaxableChange = (_e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setRecord({
      ...record,
      isTaxable: checked,
    })
  };

  const handleStoreChecked = (isChecked: boolean) => {
    setRecord({
      ...record,
      store: '',
      isNewStore: isChecked,
    })
  };

  const handleStoreChange = (value: string) => {
    setRecord({
      ...record,
      store: value,
    });
  };

  const handlePurchaseDateChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setRecord({
      ...record,
      purchaseDate: e.target.value,
    });
  };

  const handleSaveRecordClick = () => {
    const saveRecord = { ...record };
    if (categoryOptions.length === 0) {
      saveRecord.isNewCategory = true;
    }
    if (itemOptions.length === 0) {
      saveRecord.isNewItem = true;
    }
    if (storeOptions.length === 0) {
      saveRecord.isNewStore = true;
    }
    props.handleSubmit(saveRecord);
    setRecord(recordInit);
  };

  useEffect(() => {
    props.getCategoryOptions().then(data => setCategoryOptions(data));
    props.getStoreOptions().then(data => setStoreOptions(data));
  }, []);

  return (
    <Stack spacing={1} width={'100%'}>
      <SelectOrTextField
        textFieldLabel='Category'
        selectLabel='Select Category'
        checkboxLabel='New Category'
        selectOptions={categoryOptions}
        textValue={record.category}
        isChecked={record.isNewCategory}
        handleTextChange={handleCategoryChange}
        handleChecked={handleCategoryChecked}
      />
      <SelectOrTextField
        textFieldLabel='Item'
        selectLabel='Select Item'
        checkboxLabel='New Item'
        selectOptions={itemOptions}
        textValue={record.name}
        isChecked={record.isNewItem}
        handleTextChange={handleItemChange}
        handleChecked={handleItemChecked}
      />
      <TextField label='Description' value={record.desc} onChange={handleDescriptionChange} />
      <TextField label='Brand' value={record.brand} onChange={handleBrandChange} />
      <TextField label='QTY' type='number' value={record.qty} onChange={handleQtyChange} />
      <TextField label='Price' type='number' value={record.price} onChange={handlePriceChange} />
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={record.isTaxable} onChange={handleIsTaxableChange} />} label='HST/GST' />
      </FormGroup>
      <SelectOrTextField
        textFieldLabel='Store'
        selectLabel='Select Store'
        checkboxLabel='New Store'
        selectOptions={storeOptions}
        textValue={record.store}
        isChecked={record.isNewStore}
        handleTextChange={handleStoreChange}
        handleChecked={handleStoreChecked}
      />
      <TextField fullWidth label='Purchase Date' type='date' value={record.purchaseDate} onChange={handlePurchaseDateChange} />
      <Button variant='contained' onClick={handleSaveRecordClick}>Save Record</Button>
    </Stack>

  )
};

export default CreateItemForm;