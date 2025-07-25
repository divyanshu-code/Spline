import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBookOpen } from 'react-icons/fa';
import { FaPenAlt } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';

const Scrollbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                className="md:hidden mt-25 fixed top-6 left-4 z-50 text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={23} /> : <Menu size={23} />}
            </button>

            <div className="h-screen w-64 mt-24 shadow-xl fixed left-0 top-0 overflow-y-auto px-4 py-6 ">

                <div className={`min-h-screen  w-64  p-4  transition-transform  duration-500  bg-[#1E1E1E]
                       ${isOpen ? 'translate-x-0 ' : '-translate-x-full'} md:translate-x-0 md:static md:block`}>


                    <div className='flex mt-5 itmes-center gap-2 '>
                        <FaBookOpen className='mt-2  text-blue-600 ' />
                        <h2 className="text-xl font-bold text-blue-600  "> Documentation</h2>
                    </div>

                    <nav className="  text-gray-500 flex flex-col ">
                        <Link className='p-4  text-lg ' to="/docs" >
                            Overview
                        </Link>
                        <Link className='p-4 text-lg' to="/installation" >
                            Installation
                        </Link>
                        <Link className='p-4 text-lg' to="/upgrade" >
                            Upgrade Guide
                        </Link>
                        <Link className='p-4 text-lg' to="/help" >
                            Help
                        </Link>

                    </nav>



                    <div className='mt-10 '>

                        <div className='flex  itmes-center  '>
                            <FaPenAlt className='mt-2  text-blue-600 ' />
                            <h2 className="text-xl font-bold text-blue-600  ml-4 "> Core Concept</h2>
                        </div>

                        <nav className="  text-gray-500 flex flex-col ">
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                tool
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                style
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                agent
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                cross
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                look
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                            <Link className='p-4 text-lg' to="/upgrade" >
                                Upgrade Guide
                            </Link>
                        </nav>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Scrollbar