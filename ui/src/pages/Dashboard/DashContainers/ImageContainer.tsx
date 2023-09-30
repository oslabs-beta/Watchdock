import { ddClient } from "../../../App";
import ImageNavBar from "../DashComponents/ImageNavBar";



function ImageContainer() : JSX.Element {

    return ( 
        <div>
            <ImageNavBar/>
            <button onClick={async ()=>{
                ddClient.extension.vm.service.get('/hello')
                .then(() => ddClient.desktopUI.toast.success('Hello from the backend BAYBY!'))
                .catch(() => ddClient.desktopUI.toast.error("Backend isn't running! HOW RUDE!!"));
                }}>HI BACKEND!</button>
        </div>
     );
};

export default ImageContainer;