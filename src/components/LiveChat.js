import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeMessage } from "../utils/helper";

const LiveChat = () => {

    const dispatch = useDispatch();

    const [liveMessage, setLiveMessage] = useState("");

    const chatMessage = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            console.log("API polling");

            dispatch(addMessage({
                name: generateRandomName(),
                message: makeMessage(15) + "🚀"
            }));


        }, 2500);

        return () => clearInterval(i);
    }, []);

    return (
        <>
            <h1 className="mx-1 p-1 font-bold text">Live Chat</h1>
            <div className=" w-full h-[400px] ml-2 p-2 border border-gray-300 bg-gray-100 rounded-md overflow-y-scroll flex flex-col-reverse transition">

                {
                    chatMessage.map((chat, index) => (
                        <ChatMessage name={chat.name} message={chat.message} key={index} />
                    ))
                }
            </div>
            <form className="w-full flex items-center justify-evenly p-2 m-2 rounded-md border border-slate-400 bg-slate-200"
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                    name : "Aman",
                    message : liveMessage
                }));
            }}
            >
                <input type="text" className="w-5/6 p-1 border border-sky-400 rounded-md focus:outline-none" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
                <button className="bg-sky-400 text-white rounded-md px-2 py-1">Send</button>
            </form>
        </>
    );
}

export default LiveChat;