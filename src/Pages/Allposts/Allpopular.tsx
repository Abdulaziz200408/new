import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBookmark } from "react-icons/fa";
import { Pagination } from "antd";
import "tailwindcss/tailwind.css";

interface Post {
  id: number;
  title: string;
  desc: string;
  image: string;
  userName: string;
  postImg: string;
  postDate: string;
}

const Populapost: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    axios
      .get("https://df2174b8e5e5a31d.mokky.dev/MEGA_news")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container_posts">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          <div className="flex items-center">
            <span className="bg-[#F81539] w-[6px] h-[15px] rounded-lg inline-block mr-4"></span>
            <h2 className="text-xl font-semibold text-gray-800">
              popular posts
            </h2>
          </div>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg h-[370px] overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[170px] object-cover rounded-lg"
            />
            <div className="w-full h-[180px] p-3 flex flex-col justify-between">
              <div>
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

      <div className="mt-6 flex justify-start">
        <Pagination
          current={currentPage}
          pageSize={postsPerPage}
          total={posts.length}
          onChange={onPageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Populapost;
