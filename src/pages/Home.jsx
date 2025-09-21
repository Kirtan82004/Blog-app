import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRes = await appwriteService.getPosts();
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

  // Hero Section
  const Hero = () => (
    <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <img
            src={logo}
            alt="Blog Logo"
            className="w-24 sm:w-32 mx-auto mb-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Welcome to Our Blog ✨
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Discover the latest articles, stories, and insights from creators
            around the world.
          </p>
          <a
            href="#posts"
            className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Explore Posts <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </Container>
    </div>
  );

  if (loading) {
    return (
      <div className="w-full py-16 text-center">
        <p className="text-gray-600 animate-pulse text-lg">Loading posts...</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <>
        <Hero />
        <div className="w-full py-16 mt-6 text-center">
          <Container>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-700 hover:text-gray-500 transition">
              Login to read posts
            </h1>
          </Container>
        </div>
      </>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <Hero />

      {/* Posts Section */}
      <div id="posts" className="w-full py-12  bg-blue-100">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
            Latest Posts
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts.slice(0, 4).map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        </Container>
      </div>

      {/* Newsletter Section */}
      <div className="w-full bg-white py-16 border-t">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Stay Updated 📩
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to get the latest posts directly to
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
