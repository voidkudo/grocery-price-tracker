import { Autocomplete, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { useState } from "react";

interface SelectOrTextFieldProps {
  textFieldLabel: string,
  selectLabel: string,
  checkboxLabel: string,
  noOptionsText?: string,
};

const SelectOrTextField = (props: SelectOrTextFieldProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(() => !isChecked);
  };

  return (
    <>
      {
        isChecked ?
          <TextField fullWidth label={props.textFieldLabel} /> :
          <Autocomplete options={[]} noOptionsText={props.noOptionsText} renderInput={(params) => <TextField {...params} label={props.selectLabel} />} />
      }
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />} label={props.checkboxLabel} />
      </FormGroup>
    </>
  )

};

export default SelectOrTextField;