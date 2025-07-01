import { useState } from "react";
export default function Sponser() {
    const role = "";
    const [Year, setYear] = useState("2026");


    switch (Year) {

        case "2026":
            return (
                <div className='sponsers'>
                    <div className="sponserContent">
                        <select onChange={(e)=>setYear(e.target.value)} className="selectyear">
                            <option value="2026"><span>2026</span></option>
                            <option value="2025"><span>2025</span></option>
                            <option value="2024"><span>2024</span></option>
                            <option value="2023"><span>2023</span></option>
                            <option value="2022"><span>2022</span></option>
                        </select>
                        </div>
                       <p className="sponserLogoHeader">Sponser Logos</p>
                      <p className="sponserLogoYear">2026 - 2027</p>
                       <div className="sponserDetails">
                       <div className="bannerImage">
                           <span>Banner</span> 
                       </div>
                       <div className="bannerSubImages">
                        <div className="images">Image</div>
                         <div className="images">Image</div>
                          <div className="images">Image</div>
                       </div>
                       </div>
                    
                </div>
            );
            break;
            case "2025":
             return (
                <div className='sponsers'>
                    <div className="sponserContent">
                        <select onChange={(e)=>setYear(e.target.value)} className="selectyear">
                            <option value="2026"><span>2026</span></option>
                            <option value="2025"><span>2025</span></option>
                            <option value="2024"><span>2024</span></option>
                            <option value="2023"><span>2023</span></option>
                            <option value="2022"><span>2022</span></option>
                        </select>
                        </div>
                       <p className="sponserLogoHeader">Sponser Logos</p>
                       <p className="sponserLogoYear">2025 - 2026</p>
                      
                       <div className="sponserDetails">
                       <div className="bannerImage">
                           <span>Banner</span> 
                       </div>
                       <div className="bannerSubImages">
                        <div className="images">Image</div>
                         <div className="images">Image</div>
                          <div className="images">Image</div>
                       </div>
                       </div>
                    
                </div>
            );
            break;
            case "2024":
             return (
                <div className='sponsers'>
                    <div className="sponserContent">
                        <select onChange={(e)=>setYear(e.target.value)} className="selectyear">
                            <option value="2026"><span>2026</span></option>
                            <option value="2025"><span>2025</span></option>
                            <option value="2024"><span>2024</span></option>
                            <option value="2023"><span>2023</span></option>
                            <option value="2022"><span>2022</span></option>
                        </select>
                        </div>
                       <p className="sponserLogoHeader">Sponser Logos</p>
                       <p className="sponserLogoYear">2024 - 2025</p>
                       <div className="sponserDetails">
                       <div className="bannerImage">
                           <span>Banner</span> 
                       </div>
                       <div className="bannerSubImages">
                        <div className="images">Image</div>
                         <div className="images">Image</div>
                          <div className="images">Image</div>
                       </div>
                       </div>
                    
                </div>
            );
            break;
            case "2023":
             return (
                <div className='sponsers'>
                    <div className="sponserContent">
                        <select onChange={(e)=>setYear(e.target.value)} className="selectyear">
                            <option value="2026"><span>2026</span></option>
                            <option value="2025"><span>2025</span></option>
                            <option value="2024"><span>2024</span></option>
                            <option value="2023"><span>2023</span></option>
                            <option value="2022"><span>2022</span></option>
                        </select>
                        </div>
                       <p className="sponserLogoHeader">Sponser Logos</p>
                       <p className="sponserLogoYear">2023 - 2024</p>
                       <div className="sponserDetails">
                       <div className="bannerImage">
                           <span>Banner</span> 
                       </div>
                       <div className="bannerSubImages">
                        <div className="images">Image</div>
                         <div className="images">Image</div>
                          <div className="images">Image</div>
                       </div>
                       </div>
                    
                </div>
            );
            break;
            case "2022":
             return (
                <div className='sponsers'>
                    <div className="sponserContent">
                        <select onChange={(e)=>setYear(e.target.value)} className="selectyear">
                            <option value="2026"><span>2026</span></option>
                            <option value="2025"><span>2025</span></option>
                            <option value="2024"><span>2024</span></option>
                            <option value="2023"><span>2023</span></option>
                            <option value="2022"><span>2022</span></option>
                        </select>
                        </div>
                       <p className="sponserLogoHeader">Sponser Logos</p>
                       <p className="sponserLogoYear">2022 - 2023</p>
                       <div className="sponserDetails">
                       <div className="bannerImage">
                           <span>Banner</span> 
                       </div>
                       <div className="bannerSubImages">
                        <div className="images">Image</div>
                         <div className="images">Image</div>
                          <div className="images">Image</div>
                       </div>
                       </div>
                    
                </div>
            );
            break;
    }
}