import { Link } from "react-router-dom"
export default function EditMyProfile(){
    return(
        <div className="profile">
            <div className="my-profile">
                <div className="my-profile-pic-icon">
                    </div>
                    <div className="my-profile-details">
                        <p className="my-profile-content"><span className="festuserkey">Name</span><span className="myprofileiconcol">:</span><input className="updatedmyprofileuserdata"></input></p>
                         <p className="my-profile-content"><span className="festuserkey">Year</span><span className="myprofileiconcol">:</span><input className="updatedmyprofileuserdata"></input></p>
                         <p className="my-profile-content"><span className="festuserkey">Branch</span><span className="myprofileiconcol">:</span><input className="updatedmyprofileuserdata"></input></p>
                         <p className="my-profile-content"><span className="festuserkey">Section</span><span className="myprofileiconcol">:</span><input className="updatedmyprofileuserdata"></input></p>
                         <p className="my-profile-content"><span className="festuserkey">Mobile</span><span className="myprofileiconcol">:</span><input className="updatedmyprofileuserdata"></input></p>
                         <p className="my-profile-content"><span className="festuserkey">Linked IN</span><span className="myprofileiconcol">:</span><input className="updatedmyprofileuserdata"></input></p>
                         <p className="my-profile-content"><span className="festuserkey">Insta ID</span><span className="myprofileiconcol">:</span><input className="updatedmyprofileuserdata"></input></p>
                         <p className="my-profile-content"><span className="festuserkey">Father</span><span className="myprofileiconcol">:</span><input className="updatedmyprofileuserdata"></input></p>
                         <p className="my-profile-content"><span className="festuserkey">Mother</span><span className="myprofileiconcol">:</span><input className="updatedmyprofileuserdata"></input></p>
                         <p className="my-profile-content"><span className="festuserkey">Village</span><span className="myprofileiconcol">:</span><input className="updatedmyprofileuserdata"></input></p>
                         <p className="my-profile-content"><span className="festuserkey">District</span><span className="myprofileiconcol">:</span><input className="updatedmyprofileuserdata"></input></p>
                          <p className="my-profile-content"><span className="festuserkey">State</span><span className="myprofileiconcol">:</span><input className="updatedmyprofileuserdata"></input></p>
                        <div className="ProfileSaving">
                        <Link to="/MyProfile">
                          <button type="Edit" className="savingUserDetails"><span>Save</span></button>
                        </Link>
                          </div>
                    </div>
            </div>
        </div>
    )
}