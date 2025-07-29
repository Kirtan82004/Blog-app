import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredimage }) {
  return (
    <Link to={`/post/${$id}`} className="block transform transition-all duration-300 hover:scale-105">
      <div className="w-full bg-white shadow-md hover:shadow-lg rounded-xl overflow-hidden border border-gray-200">
        <div className="w-full h-48">
          <img
            src={appwriteService.getFilePreview(featuredimage)}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
