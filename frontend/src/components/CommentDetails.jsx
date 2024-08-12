import { useEffect, useState } from 'react';
import axios from 'axios';

const CommentDetails = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get('http://localhost:3001/comments');
      setComments(response.data);
    };

    fetchComments();
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>User: {comment.user}</p>
            <p>Comment: {comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentDetails;
