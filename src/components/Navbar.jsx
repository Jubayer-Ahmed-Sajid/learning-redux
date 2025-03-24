'use client';
import {signIn} from "next-auth/react"
import React from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { BiMessageSquareDetail } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoMdLogIn } from "react-icons/io";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="h-screen w-16 bg-gray-900 flex flex-col items-center py-8">
            <div className="space-y-8">
                <Link href="/" 
                    className={`p-3 rounded-lg transition-colors duration-200 hover:bg-gray-800 
                        ${pathname === '/' ? 'bg-gray-800 text-blue-500' : 'text-gray-400'}`}>
                    <MdOutlineDashboard size={24} />
                </Link>
                
                <Link href="/messages"
                    className={`p-3 rounded-lg transition-colors duration-200 hover:bg-gray-800 
                        ${pathname === '/messages' ? 'bg-gray-800 text-blue-500' : 'text-gray-400'}`}>
                    <BiMessageSquareDetail size={24} />
                </Link>
                
                <Link href="/settings"
                    className={`p-3 rounded-lg transition-colors duration-200 hover:bg-gray-800 
                        ${pathname === '/settings' ? 'bg-gray-800 text-blue-500' : 'text-gray-400'}`}>
                    <IoSettingsOutline size={24} />
                </Link>
                <button
                onClick={()=>signIn()}
                    className={`p-3 rounded-lg transition-colors duration-200 hover:bg-gray-800 
                        ${pathname === '/register' ? 'bg-gray-800 text-blue-500' : 'text-gray-400'}`}>
                    <IoMdLogIn size={24} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;