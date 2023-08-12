import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import * as React from 'react';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ImageInfo from "./ImageInfo";

let imageNums : String[] = ['image1','image2','image3','image4','image5','image6'];
const images = {
  image1:{
  container1: {
      containerName: 'Container 1',
      cpu: 20,
      diskIO: 0.3,
      memory: 20,
      runTime: 20
  },
  container2: {
      containerName: 'Container 2',
      cpu: 20,
      diskIO: 0.3,
      memory: 20,
      runTime: 20
  },
  container3: {
      containerName: 'Container 3',
      cpu: 20,
      diskIO: 0.3,
      memory: 20,
      runTime: 20
  },
  container4: {
      containerName: 'Container 4',
      cpu: 20,
      diskIO: 0.3,
      memory: 20,
      runTime: 20
  },
  container5: {
      containerName: 'Container 5',
      cpu: 20,
      diskIO: 0.3,
      memory: 20,
      runTime: 20
  },
  container6: {
      containerName: 'Container 6',
      cpu: 20,
      diskIO: 0.3,
      memory: 20,
      runTime: 20
  }
},
image2:{
  container1: {
      containerName: 'Container 1',
      cpu: 10,
      diskIO: 0.3,
      memory: 10,
      runTime: 10
  },
  container2: {
      containerName: 'Container 2',
      cpu: 10,
      diskIO: 0.3,
      memory: 10,
      runTime: 10
  },
  container3: {
      containerName: 'Container 3',
      cpu: 10,
      diskIO: 0.3,
      memory: 10,
      runTime: 10
  },
  container4: {
      containerName: 'Container 4',
      cpu: 10,
      diskIO: 0.3,
      memory: 10,
      runTime: 10
  },
  container5: {
      containerName: 'Container 5',
      cpu: 10,
      diskIO: 0.3,
      memory: 10,
      runTime: 10
  },
  container6: {
      containerName: 'Container 6',
      cpu: 10,
      diskIO: 0.3,
      memory: 10,
      runTime: 10
  }
}
}

function ImageNavBar() : ReactJSXElement {
    
    const [image, setImage] = React.useState(imageNums[0]);

    const handleChange = (event: SelectChangeEvent) => {
      setImage(event.target.value as string);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Image</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={image}
            label="Image"
            onChange={handleChange}
          >
            {
            imageNums.map((image)=>{
                return <MenuItem>{image}</MenuItem>
            })
            }
          </Select>
        </FormControl>
        <ImageInfo></ImageInfo>
      </Box>
      
    )
}
export default ImageNavBar;