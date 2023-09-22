import ImageNavBar from "../DashComponents/ImageNavBar";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
// import { ddClient } from "../../../App";



function ImageContainer() : ReactJSXElement {

    return ( 
        <div>
            <ImageNavBar/>
            <button>Image Data GET</button>
        </div>
     );
};

export default ImageContainer;