import React, {  } from 'react';
import { Outlet } from 'react-router';
import Background from '../component/Background';

const MainLayout = ({children}) => {
    
    return (
        <div className='relative min-h-screen'>
            <Background />
            <div className='absolute inset-0 -z-10'></div>
            
            <Outlet></Outlet>
            
            <div className='relative z-10'>
                {children}
            </div>
            
        </div>
    );
};

export default MainLayout;