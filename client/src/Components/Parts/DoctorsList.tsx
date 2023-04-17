'use client';
import React from 'react'
import { BsHeart, BsStarFill } from 'react-icons/bs'
import { CiLocationOn, CiTimer } from 'react-icons/ci'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { SlSocialFacebook, SlSocialGithub, SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl'
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"

interface DoctorsProps {
    _id: string;
    ImgSrc: string;
    Name: string;
    Spec: string;
}

const DoctorsList: React.FC<{ Doctors: DoctorsProps[] }> = ({ Doctors }) => {
    const session = useSession()
    const Icons = [
        { id: 'facebook', icon: <SlSocialFacebook size={23} /> },
        { id: 'linkedin', icon: <SlSocialLinkedin size={23} /> },
        { id: 'github', icon: <SlSocialGithub size={23} /> },
        { id: 'twitter', icon: <SlSocialTwitter size={23} /> },
    ];
    return (
        <>
            {Doctors?.map((doc) => (
                <div key={doc?._id}>
                    <div className='border dark:border-slate-700 overflow-hidden rounded-lg w-full select-none'>
                        <div className='w-full h-[20rem] overflow-hidden relative'>
                            <Image
                                height={200}
                                width={200}
                                src={doc?.ImgSrc}
                                className='w-full object-cover h-full hover:scale-[1.2] duration-200'
                                alt=''
                            />
                            <button
                                aria-label='save'
                                className='w-10 h-10 absolute top-0 m-3 right-0 rounded-full bg-red-100 shadow-red-600 drop-shadow-xl text-red-500
                                            hover:bg-red-500 hover:text-white duration-150 flex justify-center items-center shadow-2xl'
                            >
                                <BsHeart size={15} />
                            </button>
                        </div>
                        <div className='space-y-3 p-5 overflow-hidden'>
                            <div>
                                <p className='text-lg font-medium text-gray-800 dark:text-white'>{doc?.Name}</p>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>{doc?.Spec}</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-1 text-orange-500'>
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                </div>
                                <p className='text-gray-500'>5 Stare</p>
                            </div>
                            <div className='space-y-3'>
                                <div className='flex items-center gap-3'>

                                    <span className='text-blue-500'> <CiLocationOn size={20} /></span>
                                    <p className='text-gray-500'>63, PG Shustoke, UK</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <span className='text-blue-500'> <CiTimer size={20} /></span>
                                    <p className='text-gray-500'>Mon: 2:00PM - 6:00PM</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <span className='text-blue-500'> <HiOutlineCurrencyDollar size={20} /></span>
                                    <p className='text-gray-500'>$ 75 USD / Visit</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                {Icons?.map((item) => (
                                    <Link
                                        href='/'
                                        aria-label='item'
                                        key={item.id}
                                        className='w-10 h-10 rounded-full bg-blue-100 shadow-blue-600 shadow-md drop-shadow-xl dark:bg-slate-800 dark:hover:bg-blue-800
                            text-blue-500 hover:bg-blue-500 hover:text-white duration-150 flex justify-center items-center'
                                    >
                                        {item.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default DoctorsList