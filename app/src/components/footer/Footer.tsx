import vkIcon from '../../pictures/vkIcon.svg'
import tgIcon from '../../pictures/tgIcon.svg'
import gmailIcon from '../../pictures/gmailIcon.svg'

const linkIcons = [
        {
            src: vkIcon,
            alt: "vk icon", 
            link: "https://vk.com/moyustimov"
        }, 
        {
            src: tgIcon,
            alt: "tg icon", 
            link: "https://t.me/moyustimov"
        },
        {
            src: gmailIcon,
            alt: "gmail icon", 
            link: "mailto:dimaang23@gmail.com"
        }
    ]

function Footer() {
    const goToResources = (link: string) => {
        window.location.href = link;
    }

    return (
        <div className="footer">
            {
                linkIcons.map((iconData, index) => {
                    return (
                        <div key={index} className='footer__linkIcon' onClick={() => goToResources(iconData.link)}>
                            <img src={iconData.src} alt={iconData.alt} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Footer;
