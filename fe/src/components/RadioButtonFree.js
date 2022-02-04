import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="radio-button" sx={{ fontWeight : 'bold', fontSize : 18 }}>&lt;자유 소통&gt;</FormLabel>
      <RadioGroup
        row
        aria-labelledby="radio-button"
        name="radio-button-group"
      >
        <FormControlLabel value="equipment-review" control={<Radio />} label="장비 후기" />
        <FormControlLabel value="free" control={<Radio />} label="자유" />
      </RadioGroup>
    </FormControl>
  );
}