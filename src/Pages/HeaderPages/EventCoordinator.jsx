import { useState } from "react";
export default function EventCoordinator() {
    const role = "";
    const [Event, setEvent] = useState("Technical");


    switch (Event) {

        case "Cultural":
            return (

                <div className='eventcoordinatorDashBoard'>
                    <div className="eventSelection">
                        <select onChange={(e) => setEvent(e.target.value)} className="eventSelectionCon">
                            <option value="Cultural">Technical Events</option>
                            <option value="Technical">Cultural Events</option>
                            <option value="Sports">Sports Events</option>
                        </select>

                    </div>

                    <div className="EventCoordinatorOuterDiv">

                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey"><span>Name</span></span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey"><span>Branch</span></span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey"><span>Section</span></span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey"><span>Event Name</span></span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey"><span>Role</span></span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>
                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>
                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>
                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>
                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            );
            break;
            case "Technical":
            return (

                <div className='eventcoordinatorDashBoard'>
                    <div className="eventSelection">
                        <select onChange={(e) => setEvent(e.target.value)} className="eventSelectionCon">
                            <option value="Cultural">Technical Events</option>
                            <option value="Technical">Cultural Events</option>
                            <option value="Sports">Sports Events</option>
                        </select>

                    </div>

                    <div className="EventCoordinatorOuterDiv">

                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>
                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>
                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>
                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>
                       
                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>
                        

                    </div>
                </div>
            );
            break;
            case "Sports":
            return (

                <div className='eventcoordinatorDashBoard'>
                    <div className="eventSelection">
                        <select onChange={(e) => setEvent(e.target.value)} className="eventSelectionCon">
                            <option value="Cultural">Technical Events</option>
                            <option value="Technical">Cultural Events</option>
                            <option value="Sports">Sports Events</option>
                        </select>

                    </div>

                    <div className="EventCoordinatorOuterDiv">

                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>
                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>
                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>
                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>
                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>
                         <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>
                        <div className="EventCoordinatorCard">
                            <div className="EventCoordinatorCon">
                                <div className="EventCoordinatorProfile">
                                    <p className="EventCoordinatorProfileCon"><span>Coordinator Profile</span></p>
                                </div>
                                <div className="EventCoordinatorDetails">
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Coordinator Name</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Branch</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Section</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>
                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Event Name</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>None</span></span></p>

                                    <p className="EventCoordinatorDetailsCon"><span className="EventCoordinatorDetailsKey">Role</span><span className="EventCoordinatorDetailsCol">:</span><span className="EventCoordinatorDetailsValue"><span>Main Coordinator</span></span></p>

                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            );
            break;
    }
}