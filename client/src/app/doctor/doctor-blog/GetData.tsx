'use client';
import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { FeatureAction } from '@Redux/Slices/FeaturesSlice';
import { FC } from 'react'
import { useGetUserBlogsQuery } from '@Redux/APIs/BlogApi';
import { useAppDispatch, useAppSelector } from '@Hooks/useRedux';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import ModalAddBlog from '@Components/blog/ModalAddBlog';
import SingleBlog from '@Components/blog/SingleBlog';

interface GetDataProps {

}

const GetData: FC<GetDataProps> = ({ }) => {
    const { data } = useGetUserBlogsQuery({ page: 1 });
    const { Blogs: doctorBlogs } = data || {};
    const dispatch = useAppDispatch()
    const { isModalAddBlog } = useAppSelector(state => state.Features)

    if (!doctorBlogs) {
        return null
    }
    return (
        <>
            <AnimatePresence>
                {isModalAddBlog && <ModalAddBlog />}
            </AnimatePresence>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-lg font-semibold my-3'>Blogs</p>
                    <div className='flex gap-3 items-center justify-center'>
                        <Link
                            href='/'
                            aria-label='home'
                            className='uppercase hover:text-blue-500 hover:underline'>
                            Doctris
                        </Link>
                        <BiChevronRight />
                        <Link
                            href='/patient/booking-appointment/clinc'
                            aria-label='booking appointment'
                            className='uppercase font-medium text-blue-400 hover:text-blue-500 hover:underline'
                        >
                            Blog
                        </Link>
                    </div>
                </div>
                <button
                    aria-label='Add BLOG'
                    onClick={() => dispatch(FeatureAction.setModalAddBlog(true))}
                    className='bg-blue-700 text-white font-semibold rounded-md p-3 px-5'>
                    Add Blog
                </button>
            </div>
            <div className='select-none py-5 dark:text-white'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-8 py-5'>
                    {doctorBlogs?.map((doc) => (
                        <div key={doc?._id}>
                            <SingleBlog blog={doc} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default GetData