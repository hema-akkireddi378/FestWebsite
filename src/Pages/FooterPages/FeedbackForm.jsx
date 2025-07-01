export default function FeedbackForm() {
    return (
        <div className='feedbackform'>
           <div className="feedbackcontainer">
            <h1 className="feedbackform-header">Feed Back Form</h1>
            <div className="feedbackform-feilds-content"></div>
            <input type="text" placeholder="Enter Name" className="feedbackform-fields"></input>
            <input type="email" placeholder="Enter Email" className="feedbackform-fields"></input>
            <input type="text" placeholder="Enter Submit" className="feedbackform-fields"></input>
            <textarea rows="10"  placeholder="Type your feedback......." className="feedbackform-fields"></textarea>
            <button type="submit" className="feedbackform-fields">Submit</button>

            </div> 
             
            

        </div>
    )
}


