"use client";
export default function PostOwnner(prop:{nameowned: string, title: string,like: number}) {
  return <div>  <div className="vstack gap-3">
  <div className="d-flex align-items-center gap-3">
    <img
      src="\profileImages\profile.jpg"
      width="48"
      height="48"
      className="rounded-circle"
      style={{ objectFit: "cover" }}
    />
    <span className="fw-semibold fs-5 text-white">{prop.nameowned}</span>
  </div>

  <span  className="text-white">{prop.title}</span>

  <div className="d-flex align-items-center gap-1">
    <img src="/like.svg" width={20}></img>
    <span style={{ color: "#B0B3B8" }} >{prop.like} คน</span>
  </div>
  <hr className="m-0 border" />
</div>
</div>;
}
