'use client';
import React from 'react'
import { BsChatSquareText, BsChatText, BsGear, BsGrid, BsPeople, BsPersonLinesFill } from 'react-icons/bs'
import { IoCalendarNumberOutline } from 'react-icons/io5'
import { GiAlarmClock } from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { selectCurrentUser } from '@Redux/Slices/UserSlice';
import { useAppSelector } from '@Hooks/useRedux';
import { AiOutlineAlipay } from 'react-icons/ai';

interface LinkListProps {
    Icon: React.ReactNode;
    Title: string;
    Href: string;
    onClose?: () => void;
}
interface WidthProps {
    sideWidth: string;
}
const AdminSidebar: React.FC<WidthProps> = ({ sideWidth }) => {
    const pathname = usePathname();
    const userInfo = useAppSelector(selectCurrentUser)
    const LinkList: React.FC<LinkListProps> = ({ Icon, Title, Href, onClose }) => {
        return (
            <div className={`text-lg font-medium px-7 w-full ${(pathname === Href) ? '!text-blue-600' : ' text-gray-600'}`}>
                <Link href={Href} className='dark:hover:text-blue-500'>
                    <div className='flex gap-4 py-2 items-center hover:text-blue-600 group-hover:text-blue-600'>

                        <div className={`bg-gray-100 w-10 h-10 flex justify-center items-center rounded-lg group
                          ${(pathname === Href) ?
                                'text-blue-600 bg-blue-200 dark:text-white dark:bg-blue-800' :
                                'text-gray-600 hover:text-blue-500 dark:text-slate-400 dark:bg-slate-800'}`}>
                            {Icon}
                        </div>
                        <p className={`font-light  
                        ${(pathname === Href) ?
                                'text-blue-600 dark:text-blue-400' :
                                'text-gray-600 hover:text-blue-500 dark:text-slate-400'} `}>
                            {Title}
                        </p>
                    </div>

                </Link>
            </div>
        )
    }

    return (
        <div
            className='fixed top-0 left-0 z-10 border-r overflow-hidden duration-300 h-full dark:border-slate-700'
            style={{ width: `${sideWidth}` }}>
            <div className="p-5">
                <Link href='/' className='flex gap-3'>
                    <Image height={100} width={100} className='w-10 h-10 rounded-xl'
                        src='/Images/logo-icon.png' alt='' />
                    <p className={`text-2xl font-bold text-black  dark:text-white`}>We Care</p>
                </Link>
            </div>
            <div className='whitespace-nowrap py-3 space-y-2'>
                <LinkList Icon={<BsGrid size={17} />} Title='Dashboard' Href='/admin/admin-dashboard' />
                {/* <LinkList Icon={<IoCalendarNumberOutline size={20} />} Title='Appointment ' Href='/admin/appointment' /> */}
                <LinkList Icon={<GiAlarmClock size={20} />} Title='Doctors' Href='/admin/doctors-list' />
                <LinkList Icon={<AiOutlineAlipay size={20} />} Title='Pending Doctors' Href='/admin/pending-doctors' />
                {/* <LinkList Icon={<IoNewspaperOutline size={20} />} Title='Invoices' Href='/admin/invoices' /> */}
                <LinkList Icon={<BsChatText size={20} />} Title='Blogs' Href='/admin/blogs' />
                <LinkList Icon={<BsPeople size={20} />} Title='Patient List' Href='/admin/patients-list' />
                <LinkList Icon={<BsChatSquareText size={20} />} Title='Patients Review' Href='/admin/patient-review' />
                {/* <LinkList Icon={<BsChat size={20} />} Title='Chat' Href='/admin/admin-chat' /> */}
                <LinkList Icon={<BsGear size={20} />} Title='Profile' Href={`/${userInfo.username}/doctor`} />
                <LinkList Icon={<BsPersonLinesFill size={20} />} Title='Profile Settings' Href={`/${userInfo.username}/doctor/settings`} />
            </div>
        </div>

    )
}

export default AdminSidebar
