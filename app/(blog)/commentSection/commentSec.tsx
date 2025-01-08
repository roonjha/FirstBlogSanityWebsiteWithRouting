"use client";

import React, { useState } from "react";

interface Comment {
  id: number;
  username: string;
  text: string;
  likes: number;
  dislikes: number;
  isEditing: boolean;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState<string>("");
  const [commentText, setCommentText] = useState<string>("");

  const handleAddComment = () => {
    if (!username.trim() || !commentText.trim()) {
      alert("Username and comment cannot be empty!");
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      username,
      text: commentText,
      likes: 0,
      dislikes: 0,
      isEditing: false,
    };

    setComments([newComment, ...comments]);
    setUsername("");
    setCommentText("");
  };

  const handleLike = (id: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  const handleDislike = (id: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, dislikes: comment.dislikes + 1 } : comment
      )
    );
  };

  const handleDelete = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const handleEdit = (id: number, newText: string) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, text: newText, isEditing: false } : comment
      )
    );
  };

  const toggleEdit = (id: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, isEditing: !comment.isEditing } : comment
      )
    );
  };

  return (
    <div>
      {/* Full-width Separator Line */}
      <hr className="border-t-2 border-gray-300 mb-6" />

      {/* Comment Section */}
      <div className="comment-section max-w-2xl mx-auto p-4 bg-gray-100 rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>

        {/* Comment Form */}
        <div className="add-comment mb-6">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your name"
            className="w-full p-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddComment}
            className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add Comment
          </button>
        </div>

        {/* Comments List */}
        <div className="comments space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="comment bg-white p-4 mb-4 rounded-lg shadow-md border border-gray-300"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800">{comment.username}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleLike(comment.id)}
                    className="text-green-500 hover:text-green-600"
                  >
                    👍 {comment.likes}
                  </button>
                  <button
                    onClick={() => handleDislike(comment.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    👎 {comment.dislikes}
                  </button>
                  <button
                    onClick={() => toggleEdit(comment.id)}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="text-gray-500 hover:text-gray-600"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
              {comment.isEditing ? (
                <div>
                  <textarea
                    value={comment.text}
                    onChange={(e) =>
                      setComments(
                        comments.map((c) =>
                          c.id === comment.id
                            ? { ...c, text: e.target.value }
                            : c
                        )
                      )
                    }
                    className="w-full p-2 mt-2 border rounded-lg"
                  ></textarea>
                  <button
                    onClick={() => handleEdit(comment.id, comment.text)}
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Save Edit
                  </button>
                </div>
              ) : (
                <p className="text-gray-700 mt-2">{comment.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
