import React from 'react';
import { createDockerDesktopClient } from '@docker/extension-api-client';
import ImageContainer from './pages/Dashboard/DashContainers/ImageContainer';
import ContainerContainer from './pages/Dashboard/DashContainers/ContainerContainer';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

//This is my test comment
// Note: This line relies on Docker Desktop's presence as a host application.
// If you're running this React app in a browser, it won't work properly.
const client = createDockerDesktopClient();

function useDockerDesktopClient(){
  return client;
}

export function App() : ReactJSXElement {
  const [response, setResponse] = React.useState<string>();
  const ddClient = useDockerDesktopClient();

  const fetchAndDisplayResponse = async () => {
    const result = await ddClient.extension.vm?.service?.get('/hello');
    setResponse(JSON.stringify(result));
  };

  return (
    <>
      <ImageContainer/>
      <ContainerContainer/>
    </>
  );
}
