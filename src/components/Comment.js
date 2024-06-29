const Comment = ({ data }) => {

    const { name, text, replies } = data;

    return (
        <div className="w-7/12 flex gap-3 p-1 m-1 items-center border bg-gray-100 rounded-md">

            <img className="ml-2 h-9 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k-EK9bwaXD1R_HGLkKam2lQJBpUZ6BB-5iWwW0nUXQ&s" alt="" />

            <div className="text-md">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>

        </div>
    );
}


export default Comment;