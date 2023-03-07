import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name : "김상현1",
    comment : "Lorem1"
  },
  {
    name : "김상현2",
    comment : "Lorem2"
  }, {
    name : "김상현3",
    comment : "Lorem3"
  }
]
 
function CommentList() {
  return (
    <div>
      {
        comments.map((comment, i) => {
          return (
            <Comment key={i} name={comment.name} comment={comment.comment}></Comment>
          )
        })
      }
    </div>
  )
}

export default CommentList;