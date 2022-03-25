import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CSRFToken = () => {
    const [csrftoken, setcsrftoken] = useState('');

    const getCookie = (name) => {
        let cookieValue = '';
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
		console.log(cookieValue)
        return cookieValue;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(`http://127.0.0.1:8000/accounts/csrf_cookie`);
				
            } catch (err) {

            }
        }

        fetchData();
        setcsrftoken(getCookie('csrftoken'));
    }, []);
	console.log(csrftoken)
	


    return (
        <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken} />
    );
};

export default CSRFToken;











// import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { verify } from '../actions/auth';

// const Activate = ({ verify, match }) => {
    // const [verified, setVerified] = useState(false);

    // const verify_account = e => {
        // const uid = match.params.uid;
        // const token = match.params.token;

        // verify(uid, token);
        // setVerified(true);
    // };

    // if (verified) {
        // return <Redirect to='/' />
    // }

    // return (
        // <div className='container'>
            // <div 
                // className='d-flex flex-column justify-content-center align-items-center'
                // style={{ marginTop: '200px' }}
            // >
                // <h1>Verify your Account:</h1>
                // <button
                    // onClick={verify_account}
                    // style={{ marginTop: '50px' }}
                    // type='button'
                    // className='btn btn-primary'
                // >
                    // Verify
                // </button>
            // </div>
        // </div>
    // );
// };

// export default connect(null, { verify })(Activate);
