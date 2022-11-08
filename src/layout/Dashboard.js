import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';
import { MdManageAccounts } from 'react-icons/md';

const Dashboard = () => {
    return (
        <div>
            <div class="relative min-h-screen md:flex" data-dev-hint="container">
                <input type="checkbox" id="menu-open" class="hidden" />

                <label for="menu-open" class="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="floating action button">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>

                <header class="bg-gray-600 text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
                    <Link to="dashboard" class="block p-4 text-white font-bold whitespace-nowrap truncate">
                        SHIFT LAWYER
                    </Link>

                    <label for="menu-open" id="mobile-menu-button" class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
                        <svg id="menu-open-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg id="menu-close-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </label>
                </header>

                <aside id="sidebar" class="z-10 bg-blue-500 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
                    <div class="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
                        <Link to="/dashboard" class="text-white flex items-center space-x-2 px-4" title="Your App is cool">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            <span class="text-2xl font-extrabold whitespace-nowrap truncate">SHIFT LAWYER</span>
                        </Link>

                        <nav data-dev-hint="main navigation">
                            <Link to="add-service" class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                <AiFillPlusCircle/><span>Add services</span>
                            </Link>
                            <Link to="manage-service" class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                <MdManageAccounts/><span>Manage services</span>
                            </Link>
                        </nav>
                    </div>

                    <nav data-dev-hint="second-main-navigation or footer navigation">
                        <Link to="" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                            terms and conditions
                        </Link>
                        <Link to="/" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                            back to Home Page
                        </Link>
                    </nav>
                </aside>

                <main id="content" class="flex-1 p-6 lg:px-8">
                    <div class="max-w-7xl mx-auto">
                        <div class="px-4 py-6 sm:px-0">
                            <Outlet/>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;