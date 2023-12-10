import React from "react";

const commentsData = [
  {
    name: "User 1",
    text: "Comment 1",
    replies: [
      {
        name: "User 1",
        text: "Comment 1",
        replies: [
          {
            name: "User 2",
            text: "Comment 2",
          },
          {
            name: "User 1",
            text: "Comment 1",
          },
        ],
      },
    ],
  },
  {
    name: "User 2",
    text: "Comment 2",
    replies: [
      {
        name: "User 1",
        text: "Comment 1",
      },
      {
        name: "User 2",
        text: "Comment 2",
      },
      {
        name: "User 3",
        text: "Comment 3",
      },
    ],
  },
  {
    name: "User 3",
    text: "Comment 3",
    replies: [
      {
        name: "User 1",
        text: "Comment 1",
      },
      {
        name: "User 2",
        text: "Comment 2",
      },
    ],
  },
  {
    name: "User 4",
    text: "Comment 4",
    replies: [
      {
        name: "User 1",
        text: "Comment 1",
      },
      {
        name: "User 2",
        text: "Comment 2",
      },
      {
        name: "User 3",
        text: "Comment 3",
      },
      {
        name: "User 4",
        text: "Comment 4",
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-50 p-2 rounded-lg my-2">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments?.map((comment, index) => (
    <div className="mt-2">
      <Comment key={index} data={comment} />
      <div className="pl-5 border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = ({ noOfComments }) => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments({noOfComments}):</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
