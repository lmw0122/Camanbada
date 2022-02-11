import React, { useRef, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography, Stack } from '@mui/material';



export default function RadioButtonsGroup() {
	const [isChecked, setIsChecked] = useState();
	function checkOnlyOne(e) {
	
	const refName = this.refs.name;
	  refName.forEach((c) => {
	    c.ckecked = false;
	  })
	  e.checked = true;
	}

  return (
    <FormControl>
			<Stack direction="row" spacing={1}>
				<FormLabel id="radio-button" sx={{ fontWeight : 'bold', fontSize : 18 }} >&lt;캠핑 소통&gt;</FormLabel>
				<Typography sx={{ fontSize : 13}}>캠핑장을 선택해주세요.</Typography>
			</Stack>
			<RadioGroup
				onClick={checkOnlyOne}
				row
				aria-labelledby="radio-button"
				name="radio-button-group"
			>
				<FormControlLabel value="share"  control={<Radio />} label="나눔" />
				<FormControlLabel value="deal" control={<Radio />} label="거래" />
				<FormControlLabel value="review" control={<Radio />} label="후기" />
				<FormControlLabel value="free" control={<Radio />} label="자유" />
			</RadioGroup>
			<FormLabel id="radio-button" sx={{ fontWeight : 'bold', fontSize : 18, mt : 1 }}>&lt;자유 소통&gt;</FormLabel>
			<RadioGroup
				onClick={checkOnlyOne}
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