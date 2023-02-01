import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            contact
            <Link to="/contact/სინეგო">სინეგო</Link>
            <Link to="/contact/გინევო">გინევო</Link>
        </div>
    );
};

export default Contact;