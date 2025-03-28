import './Footer.scss';

const Footer = () => {
    return (
        <footer id="footer" className="footer bg-primary">

            <div className="container mt-4">
                <div className="social-links justify-content-center align-items-center mb-2 d-flex mt-4">
                    <a href="https://www.youtube.com/@fullstacknest" target='_blank' className="twitter" rel="noreferrer"><i className="bi bi-youtube"></i></a>
                    <a href="https://wa.me/918140018256" target='_blank' className="facebook" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/fullstacknest/" target='_blank' className="instagram" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/fullstacknest/" target='_blank' className="linkedin" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                    <a href="https://wa.me/918140018256" target='_blank' className="linkedin" rel="noreferrer"><i className="bi bi-whatsapp"></i></a>
                </div>
                <div className="copyright">
                    &copy; Copyright, Designed by <strong><a href='https://fullstacknest.com/' target='_blank' rel="noreferrer"><span>FullStackNest</span></a></strong>
                </div>
                <div className="credits">
                    All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer