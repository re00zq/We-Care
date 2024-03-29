'use client';
import { useAppSelector } from '@Hooks/useRedux';
import { selectCurrentUser } from '@Redux/Slices/UserSlice';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const SidePatient = () => {
    const payment = [
        {
            _id: '1',
            img: '/Images/Payments/mastercard.png',
            paymentName: 'Mastercard',
            number: '4584',
            expires: '12/22'
        }, {
            _id: '2',
            img: '/Images/Payments/discover.png',
            paymentName: 'Discover',
            number: '5796',
            expires: '12/22'
        }, {
            _id: '3',
            img: '/Images/Payments/rupay.png',
            paymentName: 'Rupay',
            number: '4645',
            expires: '12/22'
        }, {
            _id: '4',
            img: '/Images/Payments/american.png',
            paymentName: 'American',
            number: '4875',
            expires: '12/22'
        },
    ]
    const userInfo = useAppSelector(selectCurrentUser);
    return (
        <div className='border dark:border-slate-600 rounded-md lg:m-3 shadow-sm p-5 lg:px-8 container max-w-full'>
            <div className='flex gap-5'>
                <Image
                    height={500}
                    width={500}
                    className='w-20 h-20 rounded-full'
                    src='/Images/Clients/09.jpg' alt='' />
                <div className='mt-3'>
                    <p className='font-medium text-lg'>{userInfo.name}</p>
                    <p className='text-gray-500'>{userInfo.birth} Years old</p>
                </div>
            </div>
            <h2 className='bg-green-100 text-green-500 font-medium text-md text-center p-2 rounded-full my-2 border-green-200 border'>Helthy</h2>
            <div className='grid grid-cols-3 justify-center py-3'>
                <div className='text-center'>
                    <h3 className='font-medium text-gray-500'>Blood</h3>
                    <p>{userInfo.blood}</p>
                </div>
                <div className='text-center'>
                    <h3 className='font-medium text-gray-500'>Height</h3>
                    <p>{userInfo.height} cm</p>
                </div>
                <div className='text-center'>
                    <h3 className='font-medium text-gray-500'>Weight</h3>
                    <p>{userInfo.weight}k.g</p>
                </div>
            </div>
            <div>
                <h3 className='font-medium text-lg my-3'>Doctors</h3>
                <div className='flex gap-3'>
                    <Image
                        height={500}
                        width={500}
                        className='h-10 w-10 rounded-full shadow-md drop-shadow-xl'
                        src='/Images/Clients/01.jpg'
                        alt=''
                    />
                    <Image
                        height={500}
                        width={500}
                        className='h-10 w-10 rounded-full shadow-md drop-shadow-xl'
                        src='/Images/Clients/01.jpg'
                        alt=''
                    />
                    <Image
                        height={500}
                        width={500}
                        className='h-10 w-10 rounded-full shadow-md drop-shadow-xl'
                        src='/Images/Clients/01.jpg'
                        alt=''
                    />
                    <Image
                        height={500}
                        width={500}
                        className='h-10 w-10 rounded-full shadow-md drop-shadow-xl'
                        src='/Images/Clients/01.jpg'
                        alt=''
                    />
                </div>
            </div>
            <div>
                <h3 className='font-medium text-lg my-5'>Payment</h3>
                <div className='space-y-3'>
                    {payment?.map(item => (
                        <div key={item?._id} className='flex gap-3 items-center'>
                            <Image
                                height={300}
                                width={300}
                                draggable={false}
                                src={item?.img}
                                alt=''
                                className='w-16 h-16'
                            />
                            <div className=''>
                                <h3>{item?.paymentName} •••• {item?.number}</h3>
                                <p className='text-sm text-gray-500'>Expires {item.expires}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className='bg-sky-100 text-sky-400 w-full py-2 my-3 text-center rounded-md shadow-blue-200 shadow-md border border-blue-200'>
                <Link
                    href={`/profile/patient/${userInfo.username}`}
                    aria-label='view profile'
                    className='w-full h-full'>
                    View Profile
                </Link>
            </div> */}
            <div className='bg-orange-100 text-orange-400 w-full py-2 my-3 text-center rounded-md shadow-orange-200 shadow-md border border-orange-200 active:bg-orange-200'>
                <Link
                    draggable='false'
                    href='/patient/dashboard/messages'
                    aria-label='view profile'
                    className='w-full h-full'>
                    Messages
                </Link>
            </div>
        </div>
    )
}

export default SidePatient
