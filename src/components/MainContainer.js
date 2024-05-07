import Buttonlist from "./Buttonlist";
import VideoContainer from "./VideoContainer";

const MainContainer = ()=> {
    return (
        <div className="col-span-11 w-full h-[87vh] p-4">
            <Buttonlist />
            <VideoContainer />
        </div>
    );
}

export default MainContainer;