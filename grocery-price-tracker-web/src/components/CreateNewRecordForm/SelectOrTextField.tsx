import { Autocomplete, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { ChangeEvent, SyntheticEvent } from "react";

interface SelectOrTextFieldProps {
  textFieldLabel: string,
  selectLabel: string,
  checkboxLabel: string,
  selectOptions: string[],
  textValue: string,
  isChecked: boolean,
  noOptionsText?: string,
  isDisabled?: boolean,
  handleTextChange: (value: string) => void,
  handleChecked: (checked: boolean) => void,
};

const SelectOrTextField = (props: SelectOrTextFieldProps) => {
  const isForceChecked = props.selectOptions.length === 0;

  const handleTextFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    props.handleTextChange(e.target.value);
  };

  const handleSelectChange = (_e: SyntheticEvent, value: string | null) => {
    if (value === null) {
      props.handleTextChange('');
    } else {
      props.handleTextChange(value);
    }
  };

  const handleCheckboxChange = (_e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    props.handleChecked(checked);
  };

  return (
    <>
      {
        isForceChecked || props.isChecked ?
          <TextField
            fullWidth
            variant='standard'
            disabled={props.isDisabled}
            label={props.textFieldLabel}
            value={props.textValue}
            onChange={handleTextFieldChange}
          /> :
          <Autocomplete
            disabled={props.isDisabled}
            options={props.selectOptions}
            noOptionsText={props.noOptionsText}
            renderInput={(params) => <TextField {...params} fullWidth variant='standard' label={props.selectLabel} />}
            value={props.textValue}
            onChange={handleSelectChange}
          />
      }
      <FormGroup>
        <FormControlLabel
          control={<Checkbox
            disabled={isForceChecked || props.isDisabled}
            checked={isForceChecked || props.isChecked}
            onChange={handleCheckboxChange}
          />}
          label={props.checkboxLabel}
        />
      </FormGroup>
    </>
  )

};

export default SelectOrTextField;