import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

let currentImageNum = {
    "imageID": [1,2,3,4,5,6,7],
    "dateCreated" : ['Jan 7', 'Feb 6']
};

function ImageInfo () :ReactJSXElement {
    return(
        <div>
            <p>Image:{currentImageNum.imageID}</p>

        </div>
    );
}
export default ImageInfo;