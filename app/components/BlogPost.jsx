"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { storage } from "../lib/appwrite";

const BlogPost = (props) => {
  const [imgurl, setImgurl] = useState("");
  useEffect(() => {
    async function getImgUrl(fileID) {
      const result = await storage.getFileView(
        process.env.NEXT_PUBLIC_BUCKET_ID,
        props.imageID
      );
      setImgurl(result.href);
      console.log(imgurl);
    }
    getImgUrl();
  }, []);
  // const imgurl=await getImgUrl(props.imageID);

  return (
    <div className="flex justify-center items-center gap-6 max-w-5xl mt-5 mx-auto max-lg:flex-col border border-neutral-600 p-4 rounded-xl">
      <img
        src={imgurl}
        alt="lizard"
        width={450}
        height={450}
        className="flex-shrink rounded-xl"
      />
      <div className="self-start flex-col max-sm:text-xs space-y-2 tracking-wide leading-5">
        <h2 className="text-2xl font-bold max-sm:text-lg">{props.title}</h2>
        <span className="text-xs">Kshitij Chauhan&nbsp;</span>
        <span className="text-xs">24/02/2024</span>
        <p>{props.content}</p>
        <p>Read More...</p>
      </div>
    </div>
  );
};
export default BlogPost;
