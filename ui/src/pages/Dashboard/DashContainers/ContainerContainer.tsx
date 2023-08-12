import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


const containerRun = () =>{
    console.log('This container is running');
}

const containerDelete = ()=>{
    console.log('This container is deleting');
}

const rows : GridRowsProp = [
    {id: 1, col1:"Container 1", col2:"20%", col3: "0.3", col4:"20%", col5: "20 min"},
    {id: 2, col1:"Container 2", col2:"20%", col3: "0.4", col4:"20%", col5: "20 min"},
    {id: 3, col1:"Container 3", col2:"20%", col3: "0.6", col4:"20%", col5: "20 min"},
    {id: 4, col1:"Container 4", col2:"20%", col3: "0.32", col4:"20%", col5: "20 min"},
    {id: 5, col1:"Container 5", col2:"20%", col3: "0.2423", col4:"20%", col5: "20 min"}
];
const columns : GridColDef[] = [
    {field: "col1", headerName: "Name", width:150},
    {field: "col2", headerName: "CPU", width: 150},
    {field: "col3", headerName: "Disk I/O", width: 150},
    {field: "col4", headerName: "Memory", width: 150},
    {field: "col5", headerName: "Run Time", width: 150},
    // {field: "col6", headerName: "Image1 Conts", width: 150},
    {field: "col7", headerName: "Container Options", width: 150, renderCell: () =>{ return (<><button onClick={containerRun}>Run</button><button>Delete</button></>)}}
];


function ContainerContainer() : ReactJSXElement {
    return ( 
        <DataGrid rows={rows} columns={columns} />    
    )
};

export default ContainerContainer;