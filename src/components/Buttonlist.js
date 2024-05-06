import Button from "./Button";

const Buttonlist = ()=> {

    const list= ["All", "Song", "Gaming", "Live", "Cricket", "Cooking", "Soccer", "Valentines", "News", "IPL", "Live Blog", "Action", "Thrillers"];

    return (
        <div className="flex">
            {
                list.map( (buttonName, index)=> (
                    <Button key={index} name={buttonName}/>
                ))
            }
        </div>
    );
}

export default Buttonlist;