import Comment from "./Comment";


const CommentsList = ( { comments } ) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment  data={comment} />
            <div className="pl-1 ml-4 w-[97%]">
                <CommentsList comments={comment.replies} /> 
                {/* Recursion of components */}
            </div>
        </div>
    ));
}

const CommentsContainer = () => {

    const commentData = [
        {
            name: "Aman Kumar",
            text: "You're good. Keep going!",
            replies: [
            ]
        },

        {
            name: "Bhanu Jhamnani",
            text: "Aaayen!",
            replies: [
                {
                    name: "Sujay Gupta",
                    text: "You will be proud of yourself one day!",
                    replies: [
                        {
                            name: "Sujji Gupta",
                            text: "You will be proud of yourself one day!",
                            replies: [
                                {
                                    name: "Pinki Gupta",
                                    text: "You will be proud of yourself one day!",
                                    replies: [
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    name: "Sujay Gupta",
                    text: "You will be proud of yourself one day!",
                    replies: [
                    ]
                },
                {
                    name: "Sujay Gupta",
                    text: "You will be proud of yourself one day!",
                    replies: [
                    ]
                },
                {
                    name: "Sujay Gupta",
                    text: "You will be proud of yourself one day!",
                    replies: [
                    ]
                },
            ]
        },

        {
            name: "Sujay Gupta",
            text: "You will be proud of yourself one day!",
            replies: [
            ]
        },

        {
            name: "Manvendra Pratap Singh",
            text: "Kaa hoooo manvendar.......",
            replies: [
            ]
        },
    ];

    return (
        <div className="m-3 p-2">
            <h1 className="text-lg font-semibold">Comments : </h1>
            <CommentsList comments={commentData} />
        </div>
    );
}

export default CommentsContainer;