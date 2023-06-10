import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

let imageNums : String[] = ['image1','image2','image3','image4','image5','image6'];

function ImageNavBar() : ReactJSXElement {
    

    return (
        <div>
            {imageNums.map((num) => {
                return (<button>{num}</button>)
            })}
        </div>
     );
}
export default ImageNavBar;