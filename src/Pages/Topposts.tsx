import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBookmark } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import "tailwindcss/tailwind.css";

import "../App.css";
import { Button } from "antd";
interface Post {
  id: number;
  title: string;
  desc: string;
  image: string;
  userName: string;
  postImg: string;
  postDate: string;
}

const Topposts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("https://df2174b8e5e5a31d.mokky.dev/MEGA_news")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className=" container_posts">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          <div className="flex items-center">
            <span className="bg-[#F81539] w-[6px] h-[15px] rounded-lg inline-block mr-4"></span>
            <h2 className="text-xl font-semibold text-gray-800">top posts</h2>
          </div>
        </h2>
        <>
          <Button className="flex items-center bg-gray-100 text-gray-500 hover:text-blue-700">
            Show All <AiOutlineArrowRight className="ml-2" />
          </Button>
        </>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.slice(0, 4).map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300  p-4"
          >
            <img
              src={post.image}
              alt={post.title}
              className=" w-[310px] h-[200px] object-cover rounded-lg"
            />
            <div className="w-[100%] h-[180px] p-3 flex flex-col justify-between">
              <div className="">
                <h3 className="text-sm font-bold text-gray-800 line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {post.desc}
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={post.postImg}
                      alt={post.userName}
                      className="h-8 w-8 rounded-full mr-2"
                    />
                    <div>
                      <p className="text-sm text-gray-500 font-semibold">
                        {post.userName}
                      </p>
                      <p className="text-xs text-gray-400">{post.postDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaBookmark className="text-gray-400 hover:text-blue-500 cursor-pointer text-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topposts;
