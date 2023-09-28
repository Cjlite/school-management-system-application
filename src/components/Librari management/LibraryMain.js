import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import AddBook from './AddBook';
import AddStudent from './AddStudent';
import IssueBook from './IssueBook';
import ReturnBook from './ReturnBook';
import AddUser from './AddUser';

function LibraryMain() {
    return (
        <div>
            <Routes>
                {/* <Route path='/' element={<Login />} /> */}
                <Route path='/' element={<Sidebar />}>
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='addbook' element={<AddBook />} />
                    <Route path='addstudent' element={<AddStudent />} />
                    <Route path='issuebook' element={<IssueBook />} />
                    <Route path='returnbook' element={<ReturnBook />} />
                    <Route path='adduser' element={<AddUser />} />
                </Route>
            </Routes>
        </div>
    )
}

export default LibraryMain
