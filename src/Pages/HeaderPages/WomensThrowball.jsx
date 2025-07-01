import { Link } from "react-router-dom"
export default function WomensThrowball() {
    return (
        <div>
            
            <h1 className='footerEventsHeader'>Women's Throw Ball</h1>
            <img className="sports-image" src="https://st2.depositphotos.com/1518767/11358/i/950/depositphotos_113581422-stock-photo-sportswoman-throwing-ball.jpg" alt="Fest image" height="200px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
             <div className="outer-div-event-details">
                <h3 className='footer-event-details'>Event Details</h3>
                <p className='footer-sub-details'><span className="footer-sub-details-key">Event Date</span><span className="footer-sub-details-col">:</span><span className="footer-sub-details-value"></span></p>
                <p className='footer-sub-details'><span className="footer-sub-details-key">Event Start Time</span><span className="footer-sub-details-col">:</span><span className="footer-sub-details-value"></span></p>
                <p className='footer-sub-details'><span className="footer-sub-details-key">Event Venue</span> <span className="footer-sub-details-col">:</span><span className="footer-sub-details-value"></span> </p>
                <p className='footer-sub-details'><span className="footer-sub-details-key">Event End Time</span><span className="footer-sub-details-col">:</span><span className="footer-sub-details-value"></span> </p>
            </div>
            <Link to="/WomensThrowBallRegistration" className="footer-more1">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>
        </div>
    )
}
