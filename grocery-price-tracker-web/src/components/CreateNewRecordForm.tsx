import { Alert, Button, Checkbox, FormControlLabel, FormGroup, Stack, TextField } from "@mui/material";
import SelectOrTextField from "./CreateNewRecordForm/SelectOrTextField";
import { ChangeEvent, useEffect, useState } from "react";
import { GroceryItemPriceRecord } from "../types/createNewRecordForm";
import { z } from "zod";

interface CreateNewRecordFormProps {
  getCategoryOptions: () => Promise<string[]>,
  getItemOptionsByCategory: (category: string) => Promise<string[]>,
  getStoreOptions: () => Promise<string[]>,
  handleSubmit: (record: GroceryItemPriceRecord) => void,
};

const recordInit: GroceryItemPriceRecord = {
  category: '',
  itemName: '',
  itemDesc: '',
  brand: '',
  price: 0.01,
  qty: 1,
  isTaxable: false,
  storeName: '',
  purchaseDate: new Date().toISOString().split('T')[0],
  isNewCategory: false,
  isNewItem: false,
  isNewStore: false,
};

const recordSchema = z.object({
  category: z.string().min(1, { message: 'Category is required' }),
  itemName: z.string().min(1, { message: 'Item is required' }),
  itemDesc: z.string().min(1, { message: 'Item Description is required' }),
  brand: z.string(),
  price: z.number().min(0.01, { message: 'Invalid Price' }),
  qty: z.number().min(1, { message: 'Invalid QTY' }),
  isTaxable: z.boolean(),
  storeName: z.string().min(1, { message: 'Stire is required' }),
  purchaseDate: z.string().date('Invalid Pruchase Date'),
  isNewCategory: z.boolean(),
  isNewItem: z.boolean(),
  isNewStore: z.boolean(),
})

const CreateNewRecordForm = (props: CreateNewRecordFormProps) => {
  const [categoryOptions, setCategoryOptions] = useState<string[]>([]);
  const [itemOptions, setItemOptions] = useState<string[]>([]);
  const [storeOptions, setStoreOptions] = useState<string[]>([]);
  const [record, setRecord] = useState<GroceryItemPriceRecord>(recordInit);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

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
      itemName: '',
      isNewItem: isChecked,
    })
  };

  const handleItemChange = (value: string) => {
    setRecord({
      ...record,
      itemName: value,
    });
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRecord({
      ...record,
      itemDesc: e.target.value,
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
      storeName: '',
      isNewStore: isChecked,
    })
  };

  const handleStoreChange = (value: string) => {
    setRecord({
      ...record,
      storeName: value,
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
    const result = recordSchema.safeParse(record);

    setIsSuccess(false);

    if (result.success) {
      const data: GroceryItemPriceRecord = result.data;
      if (categoryOptions.length === 0) {
        data.isNewCategory = true;
      }
      if (itemOptions.length === 0) {
        data.isNewItem = true;
      }
      if (storeOptions.length === 0) {
        data.isNewStore = true;
      }
      props.handleSubmit(data);
      setRecord(recordInit);
      setErrorMessages([]);
      setIsSuccess(true);
    } else {
      setErrorMessages(result.error.issues.map(error => error.message));
    }
  };

  useEffect(() => {
    props.getCategoryOptions().then(data => setCategoryOptions(data));
    props.getStoreOptions().then(data => setStoreOptions(data));
  }, []);

  return (
    <Stack spacing={1} width={'100%'} height={'80%'} overflow={'auto'}>
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
        textValue={record.itemName}
        isChecked={record.isNewItem}
        isDisabled={record.category === ''}
        handleTextChange={handleItemChange}
        handleChecked={handleItemChecked}
      />
      <TextField label='Description' value={record.itemDesc} onChange={handleDescriptionChange} />
      <TextField label='Brand (Optional)' value={record.brand} onChange={handleBrandChange} />
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
        textValue={record.storeName}
        isChecked={record.isNewStore}
        handleTextChange={handleStoreChange}
        handleChecked={handleStoreChecked}
      />
      <TextField fullWidth label='Purchase Date' type='date' value={record.purchaseDate} onChange={handlePurchaseDateChange} />
      {
        errorMessages.length === 0 ||
        errorMessages.map((errMsg, index) => (<Alert severity='error' key={index}>{errMsg}</Alert>))
      }
      {
        isSuccess && <Alert severity='success'>Record Added</Alert>
      }
      <Button variant='contained' onClick={handleSaveRecordClick}>Save Record</Button>
    </Stack>
  )
};

export default CreateNewRecordForm;