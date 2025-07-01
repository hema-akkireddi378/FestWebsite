import { Link } from "react-router-dom"
export default function MyProfile() {
    return (
        <div className="profile">
            <div className="my-profile">
                <div className="my-profile-pic-icon">
                    </div>
                    <div className="my-profile-details">
                        <p className="my-profile-content"><span className="festuserkey">Name</span><span className="myprofileiconcol">:</span><span className="myprofileuserdata"></span></p>
                         <p className="my-profile-content"><span className="festuserkey">Year</span><span className="myprofileiconcol">:</span><span className="myprofileuserdata"></span></p>
                         <p className="my-profile-content"><span className="festuserkey">Branch</span><span className="myprofileiconcol">:</span><span className="myprofileuserdata"></span></p>
                         <p className="my-profile-content"><span className="festuserkey">Section</span><span className="myprofileiconcol">:</span><span className="myprofileuserdata"></span></p>
                         <p className="my-profile-content"><span className="festuserkey">Mobile</span><span className="myprofileiconcol">:</span><span className="myprofileuserdata"></span></p>
                         <p className="my-profile-content"><span className="festuserkey">Linked IN</span><span className="myprofileiconcol">:</span><span className="myprofileuserdata"></span></p>
                         <p className="my-profile-content"><span className="festuserkey">Insta ID</span><span className="myprofileiconcol">:</span><span className="myprofileuserdata"></span></p>
                         <p className="my-profile-content"><span className="festuserkey">Father</span><span className="myprofileiconcol">:</span><span className="myprofileuserdata"></span></p>
                         <p className="my-profile-content"><span className="festuserkey">Mother</span><span className="myprofileiconcol">:</span><span className="myprofileuserdata"></span></p>
                         <p className="my-profile-content"><span className="festuserkey">Village</span><span className="myprofileiconcol">:</span><span className="myprofileuserdata"></span></p>
                         <p className="my-profile-content"><span className="festuserkey">District</span><span className="myprofileiconcol">:</span><span className="myprofileuserdata"></span></p>
                          <p className="my-profile-content"><span className="festuserkey">State</span><span className="myprofileiconcol">:</span><span className="myprofileuserdata"></span></p>
                         <div className="ProfileEdition">
                          <Link to="/ProfileUpdate" >
                          <button type="Edit" className="EditMyProfile"><span>Edit Profile</span></button>
                          </Link>
                          </div>
                    </div>
            </div>
        </div>
    )
}

