import { Autocomplete, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { ChangeEvent, SyntheticEvent, useState } from "react";

interface SelectOrTextFieldProps {
  textFieldLabel: string,
  selectLabel: string,
  checkboxLabel: string,
  selectOptions: string[],
  value: string,
  noOptionsText?: string,
  handleChange: (value: string) => void,
};

const SelectOrTextField = (props: SelectOrTextFieldProps) => {
  const isForceChecked = props.selectOptions.length === 0;

  const [isChecked, setIsChecked] = useState(false);

  const handleTextFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    props.handleChange(e.target.value);
  };

  const handleSelectChange = (_e: SyntheticEvent, value: string | null) => {
    if (value === null) {
      props.handleChange('');
    } else {
      props.handleChange(value);
    }
  };

  const handleCheckboxChange = (_e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    props.handleChange('');
    setIsChecked(checked);
  };

  return (
    <>
      {
        isForceChecked || isChecked ?
          <TextField
            fullWidth
            label={props.textFieldLabel}
            value={props.value}
            onChange={handleTextFieldChange}
          /> :
          <Autocomplete
            options={props.selectOptions}
            noOptionsText={props.noOptionsText}
            renderInput={(params) => <TextField {...params} label={props.selectLabel} />}
            value={props.value}
            onChange={handleSelectChange}
          />
      }
      <FormGroup>
        <FormControlLabel
          control={<Checkbox
            disabled={isForceChecked}
            checked={isForceChecked || isChecked}
            onChange={handleCheckboxChange}
          />}
          label={props.checkboxLabel}
        />
      </FormGroup>
    </>
  )

};

export default SelectOrTextField;