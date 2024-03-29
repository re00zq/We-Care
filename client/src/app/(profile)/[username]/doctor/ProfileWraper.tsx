'use client';
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { useGetUserByIdQuery } from "@Redux/APIs/UserApi";
import { useAppSelector } from "@Hooks/useRedux";
import { selectCurrentUser } from "@Redux/Slices/UserSlice";
import { useDispatch } from "react-redux";
import { FeatureAction } from "@Redux/Slices/FeaturesSlice";

interface SpecProps {
  value: number;

}
export default function ProfileWraper({ children }: { children: React.ReactNode }) {
  const spec: SpecProps = {
    value: 90
  };
  const { logged } = useAppSelector(state => state.Features);
  const userInfo = useAppSelector(selectCurrentUser);
  const pathname = usePathname();
  const params = useParams() as { username: string };
  const username = params.username
  const { data } = useGetUserByIdQuery({ username })
  const { user } = data || {};
  const dispatch = useDispatch();
  const userProfile = (pathname === `/${userInfo?.username}/doctor`);
  const userSettings = (pathname?.includes('settings'));
  const userReviews = (pathname?.includes('reviews'));
  const userBlogs = (pathname?.includes('blog'));
  const userTimetable = (pathname?.includes('timetable'));
  useEffect(() => {
    if (userInfo?._id === user?._id) {
      dispatch(FeatureAction.setLogged(true))
    } else {
      dispatch(FeatureAction.setLogged(false))
    }
  }, [userInfo, user])

  return (
    <>
      <div className='container my-36 max-w-[80rem] flex flex-col gap-y-5'>
        <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 shadow-gray-100 w-full overflow-hidden rounded-lg'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {user?.profilePicture &&
              <Image
                height={500}
                width={500}
                draggable={false}
                className='w-96 h-[27.5rem] object-cover relative'
                src={user?.profilePicture}
                alt=''
              />
            }
            <div className='text-start w-full flex flex-col justify-center gap-y-5'>
              <p className='text-gray-800 text-lg font-semibold'>Good morning!</p>
              <p className='text-xl font-bold text-blue-600'>Dr. {user?.name}</p>
              <p className='text-gray-500 text-sm'>{user?.bio}</p>
              <p className="font-semibold">{logged ? 'You' : 'Doctor'} have <span className="text-blue-600">{user?.patients?.length as number} patients</span>!</p>
              <div className='mb-5'>
                <div className='flex justify-between text-gray-500 mb-2'>
                  <p className='font-medium text-gray-600'>{logged ? 'Complete your profile' : 'Profile complitation'}</p>
                  <p className='font-medium'>{spec?.value} %</p>
                </div>
                <div
                  className='bg-gray-100 w-full rounded-full overflow-hidden border h-4 dark:bg-slate-900 dark:border-slate-500'>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${spec.value}%` }}
                    transition={{ ease: "easeOut", duration: 1 }} className='bg-blue-500 h-full rounded-full'
                  >
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 shadow-gray-100 overflow-hidden rounded-lg col-span-2'>
          <div className='container px-0 max-w-full rounded-lg overflow-hidden'>
            <div className='grid grid-cols-2 lg:grid-cols-4 text-center text-lg border-b dark:border-slate-600'>
              <Link
                href={`/${user?.username}/doctor`}
                aria-label='profile'
                draggable={false}
                className={`bg-[#F8F9FA] dark:bg-slate-900 py-3 font-medium ${userProfile && '!bg-blue-500 text-white'}`}>
                Profile
              </Link>
              <Link
                href={`/${user?.username}/doctor/reviews`}
                aria-label='settings'
                draggable={false}
                className={`bg-[#F8F9FA] dark:bg-slate-900 py-3 font-medium ${userReviews && '!bg-blue-500 text-white'}`}>
                Reviews
              </Link>
              <Link
                href={`/${user?.username}/doctor/timetable`}
                aria-label='settings'
                draggable={false}
                className={`bg-[#F8F9FA] dark:bg-slate-900 py-3 font-medium ${userTimetable && '!bg-blue-500 text-white'}`}>
                Time Table
              </Link>
              {logged ?
                <Link
                  href={`/${user?.username}/doctor/settings`}
                  aria-label='settings'
                  draggable={false}
                  className={`bg-[#F8F9FA] dark:bg-slate-900 py-3 font-medium ${userSettings && '!bg-blue-500 text-white'}`}>
                  settings
                </Link>
                :
                <Link
                  href={`/${user?.username}/doctor/blog`}
                  aria-label='blogs'
                  draggable={false}
                  className={`bg-[#F8F9FA] dark:bg-slate-900 py-3 font-medium ${userBlogs && '!bg-blue-500 text-white'}`}>
                  Blog
                </Link>
              }
            </div>
            <div className='p-5'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
