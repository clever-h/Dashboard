import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import CallIcon from '@mui/icons-material/Call';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
    const config = {
        percent: 60,
        colorSlice: "#00a1ff",
        colorCircle: "#f1f1f1",
        fontColor: "#365b74",
        fontSize: "0.9rem",
        stroke: 10,
        strokeBottom: 8,
        speed: 60,
        cut: 0,
        rotation: -90,
        opacity: 10,
        unit: "%",
        
      };
      
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Problems</h1>
                  <MoreVertIcon fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                <CircularProgressBar {...config} />
                </div>
                <p className="title">Total Calls Made Today</p>
                 <p className="amount">  10 <CallIcon/></p>
                  <p className="decs">Previous transaction Previous transaction</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                         <div className="itemResult negative">
                             <KeyboardArrowDownIcon fontSize="small"/>
                          <div className="resultAmount">35</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                         <div className="itemResult negative">
                             <KeyboardArrowDownIcon fontSize="small"/>
                          <div className="resultAmount">35</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                         <div className="itemResult positive ">
                             <KeyboardArrowUpIcon fontSize="small"/>
                          <div className="resultAmount">35</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;