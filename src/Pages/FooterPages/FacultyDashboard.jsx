import { useState } from "react"
export default function FacultyDashboard() {
    const role = "";
    const [Branch, setBranch] = useState("CSE");


    switch (Branch) {

        case "CSE":
            return (
                <div className="facultyDashboard">
                    <div className="departmentSelection">
                        <select onChange={(e)=> setBranch(e.target.value)} className="departmentSelectionCon">
                            <option value="CSE"><span>Computer Science</span></option>
                            <option value="ECE"><span>Electronics & Communication</span></option>
                            <option value="EEE"><span>Electrical & Electronics</span></option>
                            <option value="MECH"><span>Mechanical</span></option>
                            <option value="CIVIL"><span>Civil</span></option>
                        </select>
                    </div>
                    <div className="facultyCardOuterDiv">

                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">
                                    <p className="facultyProfileCon"><span>Faculty Profile</span></p>
                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Raja Sekhar</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>CSE HOD</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Computer Science</span></span></p>


                                </div>
                            </div>
                        </div>

                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>CSE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Computer Science</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>CSE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Computer Science</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>CSE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Computer Science</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>CSE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Computer Science</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>CSE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Computer Science</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue">CSE Faculty</span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Computer Science</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>CSE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Computer Science</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>CSE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Computer Science</span></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            );
            break;
             case "EEE":
            return (
                <div className="facultyDashboard">
                    <div className="departmentSelection">
                        <select onChange={(e)=> setBranch(e.target.value)} className="departmentSelectionCon">
                            <option value="CSE">Computer Science</option>
                            <option value="ECE">Electronics & Communication</option>
                            <option value="EEE">Electrical & Electronics</option>
                            <option value="MECH">Mechanical</option>
                            <option value="CIVIL">Civil</option>
                        </select>
                    </div>
                    <div className="facultyCardOuterDiv">

                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">
                                    <p className="facultyProfileCon"><span>Faculty Profile</span></p>
                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">ECE HOD</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>ECE Hod name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>EEE HOD</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span> Electrical</span></span></p>


                                </div>
                            </div>
                        </div>

                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>EEE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span> Electrical</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>EEE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span> Electrical</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>EEE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span> Electrical</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>EEE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span> Electrical</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>EEE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span> Electrical</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue">EEE Faculty</span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Electrical</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>EEE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Electrical</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>EEE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Electrical</span></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;
             case "ECE":
            return (
                <div className="facultyDashboard">
                    <div className="departmentSelection">
                        <select onChange={(e)=> setBranch(e.target.value)} className="departmentSelectionCon">
                            <option value="CSE">Computer Science</option>
                            <option value="ECE">Electronics & Communication</option>
                            <option value="EEE">Electrical & Electronics</option>
                            <option value="MECH">Mechanical</option>
                            <option value="CIVIL">Civil</option>
                        </select>
                    </div>
                    <div className="facultyCardOuterDiv">

                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">
                                    <p className="facultyProfileCon"><span>Faculty Profile</span></p>
                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">ECE HOD</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Ece hod name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>ECE HOD</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Electronics </span></span></p>


                                </div>
                            </div>
                        </div>

                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>ECE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Electronics </span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>ECE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Electronics </span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>ECE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Electronics </span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>ECE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Electronics </span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>ECE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Electronics </span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>ECE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Electronics </span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>ECE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Electronics </span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue">F<span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>ECE Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Electronics </span></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            );
            break;
             case "MECH":
            return (
                <div className="facultyDashboard">
                    <div className="departmentSelection">
                        <select onChange={(e)=> setBranch(e.target.value)} className="departmentSelectionCon">
                            <option value="CSE">Computer Science</option>
                            <option value="ECE">Electronics & Communication</option>
                            <option value="EEE">Electrical & Electronics</option>
                            <option value="MECH">Mechanical</option>
                            <option value="CIVIL">Civil</option>
                        </select>
                    </div>
                    <div className="facultyCardOuterDiv">

                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">
                                    <p className="facultyProfileCon"><span>Faculty Profile</span></p>
                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Mech Hod</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue">Mech Hod</span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical</span></span></p>


                                </div>
                            </div>
                        </div>

                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"> <span>Mechanical</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Mechanical</span></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            );
            break;
             case "CIVIL":
            return (
                <div className="facultyDashboard">
                    <div className="departmentSelection">
                        <select onChange={(e)=> setBranch(e.target.value)} className="departmentSelectionCon">
                            <option value="CSE">Computer Science</option>
                            <option value="ECE">Electronics & Communication</option>
                            <option value="EEE">Electrical & Electronics</option>
                            <option value="MECH">Mechanical</option>
                            <option value="CIVIL">Civil</option>
                        </select>
                    </div>
                    <div className="facultyCardOuterDiv">

                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">
                                    <p className="facultyProfileCon"><span>Faculty Profile</span></p>
                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue">Raja Sekhar</span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil</span></span></p>


                                </div>
                            </div>
                        </div>

                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil</span></span></p>


                                </div>
                            </div>
                        </div>
                        <div className="facultyCard">
                            <div className="facultyCardContent">
                                <div className="facultyProfile">

                                </div>
                                <div className="facultyDetails">
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Name</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Faculty Name</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Designation</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil Faculty</span></span></p>
                                    <p className="facultyDetailsCon"><span className="facultyDetailsKey">Department</span><span className="facultyDetailsCol">:</span><span className="facultyDetailsValue"><span>Civil</span></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            )
    }
}


