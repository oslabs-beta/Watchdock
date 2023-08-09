import { createSlice } from '@reduxjs/toolkit'

// const imageData(Global) = command line call for image data (this will possibly be an array of images)
// const containerData(Global) = command line call for container data using imageData.id (or whatever the unique identifier for the imageData is)/(This will probably involve iterating over imageData array)

const initialState =
//will be an array and is built out using .push. Will take a constructor (ie. new initialStateBuilder.ts, which will build out our initialState array based on our global/data collected)
/*
Object that will be pushed into the initialState array:
 {
  name: imageData[i].name (or whatever the identifier for the current image is),
  imageData: {
    name: this.name (thename or identifier of the image (This is due to users being able to customize the name of their image))
    description: imageData.description (This is the field that the user fills out when initially building image)
    id: imageData.id (if this even a thing or its needed for gathering container data)
    Any Other Metrics?...:
  },
  containerData : new ContainerData (a separate constructor that will have the same functionality as our image constructor (containerStateDataBuilder), but uses the 
                  "name" or "id" property of the current image to find the 
                  correct containers in our containerData object to build an array of objects referencing the data we want to acquire) ie.:
    [
      {containerData},
      {containerData},
      {containerData}
    ]
 }
 
*/
[
  {
    name: 'First',
    imageData:{
      name: 'nameOfFirstImage',
      description: 'descriptionOfFirstImage',
      id:  0
    },
    containerData:[
      { name: "container1",
        metrics:{
          metric1: 'valueOfFirstContainer1',
          metric2: 'valueOfFirstContainer2'
        }
      }
    ]
  },
  {
    name: 'Second',
    imageData:{
      metric1: 'nameOfSecondImage',
      description: 'descriptionOfSecondImage',
      id:  'idOfSecondImage'
    },
    containerData:{
      container1: {
        metrics:{
          metric1: 'valueOfSecondImage1',
          metric2: 'valueOfSecondImage2'
        }
      }
    }
  }
];

export const dashboardSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
      // start/run a container reducer

      // stop a container reducer

      // delete container reducer

    }
});



// Action creators are generated for each case reducer function
// export const {} = imagesSlice.actions;