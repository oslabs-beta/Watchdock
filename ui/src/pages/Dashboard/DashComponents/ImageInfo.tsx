import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

let currentImageNum : Number = 1;

function ImageInfo () :ReactJSXElement {
    return(
        <div>
            <p>Image:{currentImageNum}</p>

        </div>
    );
}
export default ImageInfo;