import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredimage }) {
  console.log("PostCard props:", { $id, title, featuredimage });
  const url = appwriteService.getFileView(featuredimage).toString();
  console.log("Image URL:", url);
  return (
    <Link
      to={`/post/${$id}`}
      className="block group transform transition-all duration-300 hover:scale-105"
    >
      <div className="w-full bg-white shadow-sm group-hover:shadow-lg rounded-xl overflow-hidden border border-gray-200">
        {/* Image Section */}
        <div className="w-full h-40 sm:h-48 md:h-56 lg:h-48">
          <img
            src={url}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div className="p-3 sm:p-4">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
