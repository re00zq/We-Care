import React from 'react'
import { BsArrowRight, BsChat, BsHeart } from 'react-icons/bs'
import { IoCalendar, IoTimeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';

const LastedBlogs = () => {
  const Blogs = [
    {
      _id: '1',
      ImgSrc: 'https://shreethemes.in/doctris/layouts/assets/images/blog/01.jpg',
      des: 'You can easily connect to doctor and make a treatment',
      time: '20th November, 2020',
      since: '5 min read',
      numLikes: '44',
      numComments: '5'
    }, {
      _id: '2',
      ImgSrc: 'https://shreethemes.in/doctris/layouts/assets/images/blog/02.jpg',
      des: 'Lockdowns lead to fewer people seeking medical care',
      time: '20th November, 2020',
      since: '5 min read',
      numLikes: '44',
      numComments: '5'
    }, {
      _id: '3',
      ImgSrc: 'https://shreethemes.in/doctris/layouts/assets/images/blog/03.jpg',
      des: 'Emergency medicine research course for the doctors',
      time: '20th November, 2020',
      since: '5 min read',
      numLikes: '44',
      numComments: '5'
    },
  ]
  const SingleBlog = ({ doc }) => {
    return (
      <div className='border overflow-hidden rounded-lg w-full'>
        <div className='w-full h-[20rem] overflow-hidden relative'>
          <img src={doc?.ImgSrc} className='w-full object-cover h-full hover:scale-[1.1] duration-200' alt='' />
        </div>
        <div className='space-y-3 p-5 overflow-hidden'>
          <div className='flex gap-5 items-center whitespace-nowrap'>
            <div className='flex gap-2 items-center'>
              <IoCalendar />
              <p className='text-sm text-gray-500'>{doc?.time}</p>
            </div>
            <div className='flex gap-2 items-center'>
              <IoTimeOutline />
              <p className='text-sm text-gray-500'>{doc?.since}</p>
            </div>
          </div>
          <p className='text-lg font-medium ellipse-2'>{doc?.des}</p>
          <div className='flex justify-between items-center py-3'>
            <div className='flex items-center gap-3'>
              <div className='flex gap-2 items-center'>
                <BsHeart />
                <p className='text-sm text-gray-500'>{doc?.numLikes}</p>
              </div>
              <div className='flex gap-2 items-center'>
                <BsChat />
                <p className='text-sm text-gray-500'>{doc?.numComments}</p>
              </div>
            </div>
            <Link to='/' className='text-blue-600 flex gap-3 items-center whitespace-nowrap'>
              <p>Read More</p>
              <BsArrowRight />
            </Link>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='container px-5 max-w-7xl'>
      <div className='text-center space-y-3'>
        <h3 className='text-2xl font-medium'>Latest News & Blogs</h3>
        <p className='text-gray-400 leading-loose'>Great doctor if you need your family member to get effective immediate assistance, emergency<br /> treatment or a simple consultation.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5'>
        {Blogs?.map((doc) => (
          <div key={doc?._id}>
            <SingleBlog doc={doc} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LastedBlogs