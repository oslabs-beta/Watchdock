import React from 'react';
import { createDockerDesktopClient } from '@docker/extension-api-client';
import ImageContainer from './pages/Dashboard/DashContainers/ImageContainer';
import ContainerContainer from './pages/Dashboard/DashContainers/ContainerContainer';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';


export const ddClient = createDockerDesktopClient();

// Note: This line relies on Docker Desktop's presence as a host application.
// If you're running this React app in a browser, it won't work properly.

export function App() : ReactJSXElement {
  ddClient.desktopUI.toast.success('Oh hey things are rebuilding properly!');
  return (
    <>
      <ImageContainer/>
      <ContainerContainer/>
    </>
  );
}
