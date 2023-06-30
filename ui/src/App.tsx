import React from 'react';
import Button from '@mui/material/Button';
import { createDockerDesktopClient } from '@docker/extension-api-client';
import { Stack, TextField, Typography } from '@mui/material';

// Note: This line relies on Docker Desktop's presence as a host application.
// If you're running this React app in a browser, it won't work properly.
const client = createDockerDesktopClient();

function useDockerDesktopClient() {
  return client;
}

export function App() {
  const [response, setResponse] = React.useState<string>();
  const ddClient = useDockerDesktopClient();

  const getContainers = async () => {
    console.log('CONTAINERS!!!!!!!!!!!!');
    // shows current running containers
    const containers = await ddClient.docker.listContainers();
    console.log(containers);

    // shows all containers including exited ones
    // ddClient.docker.cli
    //   .exec('ps', ['--all', '--format', '"{{json .}}"'])
    //   .then((result) => {
          // result.parseJsonLines() returns an array of objects
    //     console.log(result.parseJsonLines());
    //   });

    // shows list of images
    // const images = await ddClient.docker.listImages();
    // console.log(images);
  }
  const fetchAndDisplayResponse = async () => {
    const result = await ddClient.extension.vm?.service?.get('/hello');
    getContainers();
    setResponse(JSON.stringify(result));
  };

  return (
    <>
      <Typography variant="h3">Docker extension demo</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        This is a basic page rendered with MUI, using Docker's theme. Read the
        MUI documentation to learn more. Using MUI in a conventional way and
        avoiding custom styling will help make sure your extension continues to
        look great as Docker's theme evolves.
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        Pressing the below button will trigger a request to the backend. Its
        response will appear in the textarea.
      </Typography>
      <Stack direction="row" alignItems="start" spacing={2} sx={{ mt: 4 }}>
        <Button variant="contained" onClick={fetchAndDisplayResponse}>
          Call backend
        </Button>

        <TextField
          label="Backend response"
          sx={{ width: 480 }}
          disabled
          multiline
          variant="outlined"
          minRows={5}
          value={response ?? ''}
        />
      </Stack>
    </>
  );
}
