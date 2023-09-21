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
    let cliResult;
    console.log('CONTAINERS!!!!!!!!!!!!');
    // shows current running containers
    // const containers = await ddClient.docker.listContainers();
    // console.log(`CONTAINERS:`, containers);

    // shows all containers including exited ones
    // ddClient.docker.cli
    //   .exec('ps', ['--all', '--format', '"{{json .}}"'])
    //   .then((result) => {
    //       result.parseJsonLines() returns an array of objects
    //     console.log(result.parseJsonLines());
    //   });

    // shows metrics BlockIO, CPUPerc, Container, ID, MemPerc, MemUsage, Name, NetIO
      await ddClient.docker.cli
      .exec('stats', ['--all', '--no-stream', '--format', '"{{json .}}"'])
      .then((result) => {
        // console.log('Result from CLI:',result.stdout);
        cliResult = result.stdout;
      });

      const containerName = 'mm-dev-hot';

      // start container
      // await ddClient.docker.cli
      // .exec('start', [`${containerName}`])
      // .then(() => {
      //   console.log('Container started!');
      // });

      // stop container
      // await ddClient.docker.cli
      // .exec('stop', [`${containerName}`])
      // .then(() => {
      //   console.log('Container stopped!');
      // });

    // shows list of images
    // const images = await ddClient.docker.listImages();
    // console.log(images);

    const containerId = 'ced9fb19269d';

    // remove container
    // await ddClient.docker.cli
    //   .exec('rm', ['-f', `${containerId}`])
    //   .then(() => {
    //     console.log('Container removed!');
    // });

    // remove images
    // await ddClient.docker.cli
    //   .exec('rm', ['-f', `${containerId}`])
    //   .then(() => {
    //     console.log('Container removed!');
    // });

    // create new container

    // show image history
      // docker image inspect
      // docker image history

    // docker image prune--remove unused images

    // docker image remove

    // docker kill

    // docker logs

    // docker pause container

    // docker port 

    // docker rename container

    // docker restart container

    // docker run
      // create and run a new container from an image

    // 


      return cliResult;
  }
  const fetchAndDisplayResponse = async () => {
    const result = await getContainers();
    console.log('fetchAndDisplayResponse result: ',result);
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
