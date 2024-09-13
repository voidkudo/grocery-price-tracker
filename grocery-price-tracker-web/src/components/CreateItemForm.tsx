import { Checkbox, FormControlLabel, FormGroup, Stack, TextField } from "@mui/material";
import SelectOrTextField from "./createItemForm/SelectOrTextField";

const CreateItemForm = () => {

  return (
    <Stack spacing={1} width={'100%'}>
      <SelectOrTextField textFieldLabel='Category' selectLabel='Select Category' checkboxLabel='New Category' />
      <SelectOrTextField textFieldLabel='Product' selectLabel='Select Product' checkboxLabel='New Product' />
      <TextField label='Brand' />
      <TextField label='QTY' type='number' />
      <TextField label='Price' type='number' />
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label='HST/GST' />
      </FormGroup>
      <SelectOrTextField textFieldLabel='Store' selectLabel='Select Store' checkboxLabel='New Store' />
      <TextField fullWidth label='Purchase Date' type='date' defaultValue={new Date().toISOString().split('T')[0]} />
    </Stack>

  )
};

export default CreateItemForm;