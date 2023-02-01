import React from 'react';
import { useParams } from 'react-router-dom';
const ContactDeailt = () => {

    const params = useParams()
    return (
        <div>
            details {params.id}
        </div>
    );
};

export default ContactDeailt;