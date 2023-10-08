import React from "react";

const commentData = [
  {
    name: "John Doe",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    replies: [
      {
        name: "John Doe",
        Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        replies: [],
      },
      {
        name: "John Doe",
        Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        replies: [
          {
            name: "John Doe",
            Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            replies: [
              {
                name: "John Doe",
                Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "John Doe",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    replies: [],
  },
  {
    name: "John Doe",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    replies: [],
  },
  {
    name: "John Doe",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    replies: [
      {
        name: "John Doe",
        Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        replies: [
          {
            name: "John Doe",
            Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "John Doe",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, Text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
      className="w-8 h-8"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{Text}</p>
      </div>
    </div>
  );
};

const CommentList = ({comments}) => {
    return (
        
            comments.map((comment, index) => (
                <div key={index}>
                <Comment key={index} data={comment} />
                <div className="pl-5 border border-l-black ml-5">
                <CommentList comments={comment.replies}/>
                </div>
                </div>
            ))
        
    )
}

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
