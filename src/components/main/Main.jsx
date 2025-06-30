import React from 'react';
import Image from 'next/image';

const blogPosts = [
  {
    date: 'January 3, 2025',
    title: 'The secret tips & tricks to prepare a perfect burger & pizza for our customers',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elitltiim sempe adipiscing massa gravida nisi cras enim quis nibh. gravida ut facilisis neque egestas.',
    image: '/image1.png',
  },
  {
    date: 'January 3, 2025',
    title: 'How to prepare the perfect french fries in an air fryer',
    image: '/image2.png',
  },
  {
    date: 'January 3, 2025',
    title: 'How to prepare delicious cake yummy',
    image: '/image3.png',
  },
 
  
];

const Main = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Our Blog & Articles</h2>
        <button className="bg-red-600 text-white px-5 py-2 rounded-full font-medium hover:bg-red-700 transition-all">
          Read All Articles
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden ">
            <Image src={blogPosts[0].image} alt="Burger" width={500} height={400} className="w-54 h-44 object-cover" />
            
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{blogPosts[0].date}</p>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{blogPosts[0].title}</h3>
              <p className="text-gray-600 text-sm">{blogPosts[0].desc}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {blogPosts.slice(1).map((post, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
              <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <h3 className="text-base font-semibold text-gray-800">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
