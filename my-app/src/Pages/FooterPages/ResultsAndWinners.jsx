import { useState } from "react"
export default function ResultsAndWinners() {
    const role = "";
    const [EventResults, setEventResults] = useState("Sports");

    switch (EventResults) {
        case "Sports":
            return (
                <div className="resultsAndWinnerDisplay">
                    <div className='eventSelectionforWinnerDisplay'>
                        <select className='SelectEventOptions' onChange={(e) => setEventResults(e.target.value)}>
                            <option value="Sports" >Sports</option>
                            <option value="Technical">Technical</option>

                        </select>

                    </div>
                    <div className="resultsAndWinnersOuterDiv">
                        <div className="resultsAndWinnerDispalyCon">
                            <div className="resultsAndWinnersInnerDiv">
                                <h1 className="eventName">Event Name</h1>
                                <div className="eventImage"></div>
                                <div className="eventWinnerDetails">
                                    <p className="winnerDetails"><span className="winnerDetailsKey">Team</span><span className="winnerDetailsCol">:</span><span className="winnerDetailsValue">Name(captain)</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="resultsAndWinnersInnerDiv">
                            <h1 className="eventName">Event Name</h1>
                            <div className="eventImage"></div>
                            <div className="eventWinnerDetails">
                                    <p className="winnerDetails"><span className="winnerDetailsKey">Team</span><span className="winnerDetailsCol">:</span><span className="winnerDetailsValue">Name(captain)</span></p>
                            </div>
                        </div>
                        <div className="resultsAndWinnersInnerDiv">
                            <h1 className="eventName">Event Name</h1>
                            <div className="eventImage"></div>
                            <div className="eventWinnerDetails">
                                    <p className="winnerDetails"><span className="winnerDetailsKey">Team</span><span className="winnerDetailsCol">:</span><span className="winnerDetailsValue">Name(captain)</span></p>
                            </div>
                        </div>
                        <div className="resultsAndWinnersInnerDiv">
                            <h1 className="eventName">Event Name</h1>
                            <div className="eventImage"></div>
                            <div className="eventWinnerDetails">
                                <p><span>Team</span><span>:</span><span>Name(captain)</span></p>
                            </div>
                        </div>
                        <div className="resultsAndWinnersInnerDiv">
                            <h1 className="eventName">Event Name</h1>
                            <div className="eventImage"></div>
                            <div className="eventWinnerDetails">
                                    <p className="winnerDetails"><span className="winnerDetailsKey">Team</span><span className="winnerDetailsCol">:</span><span className="winnerDetailsValue">Name(captain)</span></p>
                            </div>
                        </div>
                    </div>
                </div>

            );
            break;
        case "Technical":
            return (
               <div className="resultsAndWinnerDisplay">
                    <div className='eventSelectionforWinnerDisplay'>
                        <select className='SelectEventOptions' onChange={(e) => setEventResults(e.target.value)}>
                            <option value="Sports" >Sports</option>
                            <option value="Technical">Technical</option>

                        </select>

                    </div>
                    <div className="resultsAndWinnersOuterDiv">
                        <div className="resultsAndWinnerDispalyCon">
                            <div className="resultsAndWinnersInnerDiv">
                                <h1 className="eventName">Event Name</h1>
                                <div className="eventImage"></div>
                                <div className="eventWinnerDetails">
                                    <p className="winnerDetails"><span className="winnerDetailsKey">Team</span><span className="winnerDetailsCol">:</span><span className="winnerDetailsValue">Name(captain)</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="resultsAndWinnersInnerDiv">
                            <h1 className="eventName">Event Name</h1>
                            <div className="eventImage"></div>
                            <div className="eventWinnerDetails">
                                    <p className="winnerDetails"><span className="winnerDetailsKey">Team</span><span className="winnerDetailsCol">:</span><span className="winnerDetailsValue">Name(captain)</span></p>
                            </div>
                        </div>
                        <div className="resultsAndWinnersInnerDiv">
                            <h1 className="eventName">Event Name</h1>
                            <div className="eventImage"></div>
                            <div className="eventWinnerDetails">
                                    <p className="winnerDetails"><span className="winnerDetailsKey">Team</span><span className="winnerDetailsCol">:</span><span className="winnerDetailsValue">Name(captain)</span></p>
                            </div>
                        </div>
                        <div className="resultsAndWinnersInnerDiv">
                            <h1 className="eventName">Event Name</h1>
                            <div className="eventImage"></div>
                            <div className="eventWinnerDetails">
                                <p><span>Team</span><span>:</span><span>Name(captain)</span></p>
                            </div>
                        </div>
                        <div className="resultsAndWinnersInnerDiv">
                            <h1 className="eventName">Event Name</h1>
                            <div className="eventImage"></div>
                            <div className="eventWinnerDetails">
                                    <p className="winnerDetails"><span className="winnerDetailsKey">Team</span><span className="winnerDetailsCol">:</span><span className="winnerDetailsValue">Name(captain)</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}