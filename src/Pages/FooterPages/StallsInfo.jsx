import { Link } from "react-router-dom"
export default function StallsInfo() {
    return (
        <div className='stallsInfo'>

            <p className="stalls-header">List of Stalls in Miracle Fest</p>
            <p className='main-stall-header'>Biriyani & Fast Food Stalls</p>

            <div className='stalls'>
                <div className="biriyanifastfood-stalls">
                    <p className="fastfood-header">Biriyani  ( Veg & Non Veg )</p>
                    <hr></hr>
                    <div className="content">
                        <p className="stalls-event-content"><span className="stallsKey">Stall Name</span><span className="stallsCol">:</span><span className="stallsValue"></span></p>
                        <p className="stalls-event-content"><span className="stallsKey">Stall Owner</span> <span className="stallsCol">:</span><span className="stallsValue"></span></p>
                        <p className="stalls-event-content"><span className="stallsKey">Mobile</span> <span className="stallsCol">:</span><span className="stallsValue">00000-00000<span className="orderItem">&lt;&#45;Order Now</span></span></p>
                    </div>      
                    <hr></hr>
                     <p className="stall-content-footer"></p>
                </div>
                <div className="biriyanifastfood-stalls">
                    <p className="fastfood-header">Fride Rice ( Veg & Non Veg )</p>
                    <hr></hr>
                    <div className="content">

                        <p className="stalls-event-content"><span className="stallsKey">Stall Name</span><span className="stallsCol">:</span><span className="stallsValue"></span></p>
                        <p className="stalls-event-content"><span className="stallsKey">Stall Owner</span> <span className="stallsCol">:</span><span className="stallsValue"></span></p>
                        <p className="stalls-event-content"><span className="stallsKey">Mobile</span> <span className="stallsCol">:</span><span className="stallsValue">00000-00000<span className="orderItem">&lt;&#45;Order Now</span></span></p>

                    </div>
                    <hr></hr>
                    <p className="stall-content-footer"></p>
                </div>
                <div className="biriyanifastfood-stalls">
                    <p className="fastfood-header">Noodles Veg & Non Veg</p>
                    <hr></hr>
                    <div className="content">


                        <p className="stalls-event-content"><span className="stallsKey">Stall Name</span><span className="stallsCol">:</span><span className="stallsValue"></span></p>
                        <p className="stalls-event-content"><span className="stallsKey">Stall Owner</span> <span className="stallsCol">:</span><span className="stallsValue"></span></p>
                        <p className="stalls-event-content"><span className="stallsKey">Mobile</span> <span className="stallsCol">:</span><span className="stallsValue">00000-00000<span className="orderItem">&lt;&#45;Order Now</span></span></p>

                    </div>
                    <hr></hr>
                   <p className="stall-content-footer"></p>
                </div>

            </div>

            <p className='main-stall-header'>Cool Drinks & Fruit Saladas</p>

            <div className='stalls'>
                {/* <p className="technical-header">Technical Events</p> */}
                <div className="biriyanifastfood-stalls">
                    <p className="fastfood-header">Cools Drinks</p>
                    <hr></hr>
                    <div className="content">
                        <p className="stalls-event-content"><span className="stallsKey">Stall Name</span><span className="stallsCol">:</span><span className="stallsValue"></span></p>
                        <p className="stalls-event-content"><span className="stallsKey">Stall Owner</span> <span className="stallsCol">:</span><span className="stallsValue"></span></p>
                        <p className="stalls-event-content"><span className="stallsKey">Mobile</span> <span className="stallsCol">:</span><span className="stallsValue">00000-00000<span className="orderItem">&lt;&#45;Order Now</span></span></p>
                    </div>
                    <hr></hr>
                     <p className="stall-content-footer"></p>
                </div>

                <div className="biriyanifastfood-stalls">
                    <p className="fastfood-header">Cools Drinks</p>
                    <hr></hr>
                    <div className="content">
                        <p className="stalls-event-content"><span className="stallsKey">Stall Name</span><span className="stallsCol">:</span><span className="stallsValue"></span></p>
                        <p className="stalls-event-content"><span className="stallsKey">Stall Owner</span> <span className="stallsCol">:</span><span className="stallsValue"></span></p>
                        <p className="stalls-event-content"><span className="stallsKey">Mobile</span> <span className="stallsCol">:</span><span className="stallsValue">00000-00000<span className="orderItem">&lt;&#45;Order Now</span></span></p>
                    </div>
                    <hr></hr>
                     <p className="stall-content-footer"></p>
                </div>

                <div className="biriyanifastfood-stalls">
                    <p className="fastfood-header">Fruit Juices</p>
                    <hr></hr>
                    <div className="content">
                        <p className="stalls-event-content"><span className="stallsKey">Stall Name</span><span className="stallsCol">:</span><span className="stallsValue"></span></p>
                        <p className="stalls-event-content"><span className="stallsKey">Stall Owner</span> <span className="stallsCol">:</span><span className="stallsValue"></span></p>
                        <p className="stalls-event-content"><span className="stallsKey">Mobile</span> <span className="stallsCol">:</span><span className="stallsValue">00000-00000<span className="orderItem">&lt;&#45;Order Now</span></span></p>
                    </div>
                    <hr></hr>
                    <p className="stall-content-footer"></p>
                </div>
                <div className="biriyanifastfood-stalls">
                    <p className="fastfood-header">Fruits Saladas</p>
                    <hr></hr>
                    <div className="content">
                        <p className="stalls-event-content"><span className="stallsKey">Stall Name</span><span className="stallsCol">:</span><span className="stallsValue"></span></p>
                        <p className="stalls-event-content"><span className="stallsKey">Stall Owner</span> <span className="stallsCol">:</span><span className="stallsValue"></span></p>
                        <p className="stalls-event-content"><span className="stallsKey">Mobile</span> <span className="stallsCol">:</span><span className="stallsValue">00000-00000<span className="orderItem">&lt;&#45;Order Now</span></span></p>
                    </div>
                    <hr></hr>
                    <p className="stall-content-footer"></p>
                </div>


            </div>
        </div>

    )
}










