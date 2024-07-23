import React from 'react';
import { useSelector } from 'react-redux';

const StoryList = () => {
  const stories = useSelector((state) => state.stories);

  // Handle case where stories is not defined or empty
  if (!stories || stories.length === 0) {
    return (
      <div className="story-list p-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-lg text-gray-900">
        <h2 className="text-3xl font-bold mb-6 text-center">Story List</h2>
        <p>No stories available.</p>
      </div>
    );
  }

  return (
    <div className="story-list p-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-lg text-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center">Story List</h2>
      <ul className="space-y-4">
        {stories.map((story) => (
          <li
            key={story.id}
            className="p-4 border-b border-gray-300 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold">{story.title}</h3>
            <p className="text-gray-600">{story.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoryList;
