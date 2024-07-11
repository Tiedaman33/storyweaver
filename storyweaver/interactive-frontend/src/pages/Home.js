import React from 'react';
import UserProfile from '../components/UserProfile';
import StoryList from '../components/StoryList';
import FeaturedStories from '../components/FeaturedStories';

const Home = () => {
  return (
    <div className="home min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto max-w-4xl p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">StoryWeaver</h1>
          <nav className="space-x-4">
            <a href="/" className="text-lg font-semibold text-white">Home</a>
            <a href="/browse" className="text-lg font-semibold text-white">Browse Stories</a>
            <a href="/profile" className="text-lg font-semibold text-white">Profile</a>
          </nav>
        </header>
        
        {/* Search Input */}
        <div className="mb-8 text-center">
          <input 
            type="text" 
            placeholder="Search stories..." 
            className="px-4 py-2 rounded-lg text-gray-800 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Stories */}
          <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg text-gray-900">
            <h2 className="text-3xl font-bold mb-4 text-purple-600 py-4 px-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-t-xl">Featured Stories</h2>
            <FeaturedStories />
          </section>
          <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg text-gray-900">
            <h2 className="text-3xl font-bold mb-4 text-purple-600 py-4 px-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-t-xl">Story List</h2>
            <StoryList />
          </section>
        </div>

        {/* Join Community */}
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg text-gray-900 py-8 px-6 mt-8">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">Join our community</h2>
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default Home;
