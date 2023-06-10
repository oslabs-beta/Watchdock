import ImageNavBar from "../DashComponents/ImageNavBar";
import ImageInfo from "../DashComponents/ImageInfo";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";



function ImageContainer() : ReactJSXElement {
    return ( 
        <div>
            <ImageNavBar/>
            <ImageInfo/>
        </div>
     );
};

export default ImageContainer;