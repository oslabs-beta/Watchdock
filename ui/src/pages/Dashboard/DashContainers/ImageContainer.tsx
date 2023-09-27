import ImageNavBar from "../DashComponents/ImageNavBar";
import { ddClient } from "../../../App";



function ImageContainer() : JSX.Element {

    return ( 
        <div>
            <ImageNavBar/>
            <button onClick={async ()=>{await ddClient.extension.vm?.service?.get('/hello')}}>GET HELLO</button>
        </div>
     );
};

export default ImageContainer;