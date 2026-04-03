import React from 'react';
import { PROFILE_NAME, PROFILE_URL } from '../../constants/profile';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage={`Page created by ${PROFILE_NAME}`}
                        />
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);
