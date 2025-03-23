import React from 'react';
import { CiBellOn } from 'react-icons/ci';
import { RxAvatar } from 'react-icons/rx';
import SearchBar from './SearchBar';
import AddTask from './AddTask';

const Header = () => {
    
    return (
        <div className='flex justify-between items-center py-4'>
            <h1 className='text-3xl font-bold'>Todo App</h1>
            <div className='flex items-center gap-4'>
                <SearchBar></SearchBar>
                <CiBellOn className='h-6 w-6 shadow-2xl shadow-amber-50'/>
                <AddTask > </AddTask>
                <RxAvatar className='h-6 w-6 shadow-2xl shadow-amber-50' />
            </div>
            
        </div>
    );
};

export default Header;