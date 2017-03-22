import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Navbar from '/client/components/Navbar.jsx';
import Footer from '/client/components/Footer.jsx';

export const MainLayout = ({ container }) => (
    <div>
        <Navbar />
        {container()}
        <Footer />
    </div>
);