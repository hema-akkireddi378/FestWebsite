function StudentDashboard() {
    return (
        <div className='student-dashboard'>
            <div className='student-profile'>
                <div className='student-profile-details'>
                    <img src="https://static.thenounproject.com/png/3918329-200.png" alt="Profile" className="profile-image"></img>
                </div >
                <div className='studentDetails'></div>
                <p className='student-header'>Hema Akkiredi</p>
                <p className='student-details'>Student ID :</p>
                <p className='student-details'>Branch :</p>
                <p className='student-details'>Year :</p>
                <p className='student-details'>Fest Id :</p>

                <div className="social-media1">
                    <img src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png" className='instagram' alt='Instagram' height="30px" width="30px"></img>
                    <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' className='github' alt='GitHub' height="20px" width="20px"></img>
                    <img src='https://cdn-icons-png.flaticon.com/512/20/20673.png' className='facebook' alt='FaceBook' height="20px" width="20px"></img>
                    <img src='https://img.icons8.com/?size=100&id=8808&format=png&color=1A1A1A' className='facebook' alt='Linkdin' height="20px" width="20px"></img>
                </div>

            </div>
        </div>
    )
}
export default StudentDashboard