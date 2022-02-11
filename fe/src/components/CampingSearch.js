import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function CampingSearch() {
  const [campings, setCampings] = React.useState([]);
  let campingList = [];

  const getCampings = async() => {
    const json = await (
      await fetch (
        `http://i6c109.p.ssafy.io:8092/camp/basic/list`
      )
    ).json();
    setCampings(json);
  };

  for (let i=0; i < campings.length; i++){
    campingList.push(campings[i].facltNm);
  }
  
  React.useEffect(() => {
    getCampings()
  }, []);

  return (
    <Stack spacing={2} sx={{ width: 500, mt: 2 }}>
      <Autocomplete
        freeSolo
        id="free-solo"
        disableClearable
        options={campingList.map((option) => option)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="캠핑 찾기"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}
