"use client";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import { comments } from "@/libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnner nameowned="Wachirawit Chaiyamat 660612156" title="ส่งไม่ทันครับจารย์รอบที่เเล้วเลยซวย QQ #261207" like={100}/>


        {/* Comment Example */}
        {comments.map((comment,index)=>(
          <div key={index}>
            <Comment ImagePath={comment.userImagePath} username={comment.username} commentTitle={comment.commentText} likes={comment.likeNum} replies={comment.replies} />
          </div>
        ))}

        {/* Reply Example */}
        {/* map-loop render Comment component here */}
        {/*loop ใส่ไว้ใน comment component ครับจารย์*/}

      </div>
    </div>
  );
}
