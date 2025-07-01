export default function Certificate() {
    return (
        <div className="certificatedownload">
            <p className="certificate-header">Here is your Certificate, user</p>
            <div className="outer-certificate-download"> 
                <div className="inner-certificate-download">
                    Preview Of Certificate
                </div>
                <div className="certificate-download">
                <button type="submit" className="submit">Download Certificate </button>
                </div>
            </div>
        </div>
    )
}