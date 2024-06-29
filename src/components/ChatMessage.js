const ChatMessage = ( {name, message}) => {
    return (
        <div className="flex items-center bg-white shadow-md px-2 py-1 my-1 rounded-md">
            <img className="h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k-EK9bwaXD1R_HGLkKam2lQJBpUZ6BB-5iWwW0nUXQ&s" alt="" />
            <span>{name}</span>
            <span>{message}</span>
        </div>

    );
}

export default ChatMessage;