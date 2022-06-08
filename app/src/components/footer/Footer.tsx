import React from 'react';
import vkIcon from '../../pictures/vkIcon.svg'
import tgIcon from '../../pictures/tgIcon.svg'
import gmailIcon from '../../pictures/gmailIcon.svg'

function Footer() {
    return (
        <div className="footer">
            <div className='footer__linkIcon'>
                <img src={vkIcon} alt="vk icon" />
            </div>
            <div className='footer__linkIcon'>
                <img src={tgIcon} alt="tg icon" />
            </div>
            <div className='footer__linkIcon'>
                <img src={gmailIcon} alt="gmail icon" />
            </div>
        </div>
    );
}

export default Footer;
