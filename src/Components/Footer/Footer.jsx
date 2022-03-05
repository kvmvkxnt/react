import './Footer.scss';
import Button from '../Buttons/Buttons.jsx';

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className="footer__inner">
                    <p className="footer__left">10 items left</p>
                    <div className="footer__buttons">
                        <Button id='all' isActive={true} />
                        <Button text='Active' id='active'/>
                        <Button text='Completed' id='completed'/>
                    </div>
                    <button className="footer__clear">Clear completed</button>
                </div>
            </footer>
        </>
    )
}

export default Footer;