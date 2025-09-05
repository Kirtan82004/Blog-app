import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRes = await appwriteService.getPosts([]);
        if (postsRes) {
          setPosts(postsRes.documents);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Skeleton Loader for better UX
  const SkeletonCard = () => (
    <div className="animate-pulse bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
      <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );

  return (
    <div className="w-full py-12 bg-gray-50 min-h-screen">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            All Blog Posts 📚
          </h1>
          <p className="text-gray-600 mt-2">
            Explore stories, guides, and insights from our community
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array(6)
              .fill("")
              .map((_, i) => (
                <SkeletonCard key={i} />
              ))}
          </div>
        ) : posts.length === 0 ? (
          // Empty State
          <div className="text-center py-20">
            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl">📝</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
              No posts available
            </h2>
            <p className="text-gray-500 mt-2">
              Be the first one to share your thoughts and stories!
            </p>
          </div>
        ) : (
          // Posts Grid
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts.map((post) => (
              <div
                key={post.$id}
                className="transform transition hover:-translate-y-1 hover:shadow-lg"
              >
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
