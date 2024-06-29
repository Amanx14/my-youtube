import ChatMessage from "./ChatMessage";

const LiveChat = ()=> {
    return (
        <div className=" w-full h-[400px] ml-2 p-2 border border-gray-300 bg-gray-100 rounded-md">
            <ChatMessage name="Aman Kumar" message = "This is react live chat" />
            <ChatMessage name="Aman Kumar" message = "This is react live chat" />
            <ChatMessage name="Aman Kumar" message = "This is react live chat" />
            <ChatMessage name="Aman Kumar" message = "This is react live chat" />
            <ChatMessage name="Aman Kumar" message = "This is react live chat" />
            <ChatMessage name="Aman Kumar" message = "This is react live chat" />
        </div>
    );
}

export default LiveChat;