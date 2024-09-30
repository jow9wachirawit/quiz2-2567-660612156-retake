"use client";

import { ReplyProps } from "@/libs/types";
import Reply from "./Reply";


export default function Comment(prop:{
  ImagePath: string,
  username: string,
  commentTitle : string,
  likes : number,
  replies : ReplyProps[] | any
}) {
  return (  
    <div>
     <div className="d-flex gap-2 my-2">
          <img
            src={prop.ImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold"  style={{ color: "#E4E6EB" }}>{prop.username}</span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{prop.commentTitle}</span>
            <div className="d-flex align-items-center gap-1">
              {prop.likes > 0 && <img src="/like.svg" width={20}></img>}
              {prop.likes > 0 && <span style={{ color: "#B0B3B8" }}>{prop.likes} คน</span>}
            </div>
          </div>
        </div>

        {/* MAP LOOP REPLY */}

        {prop.replies.map((rep: any) => (
        <Reply
          key={rep.username}
          userImagePath={rep.userImagePath}
          username={rep.username}
          replyText={rep.replyText}
          likeNum={rep.likeNum}
        ></Reply>
      ))}
       {/* <Reply userImagePath={} />*/}
    </div>
  );
}
