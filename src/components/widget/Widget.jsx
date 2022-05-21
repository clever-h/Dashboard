import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CallIcon from '@mui/icons-material/Call';
import BugReportIcon from '@mui/icons-material/BugReport';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const Widget = ({type}) => {

    let data;

    //Temporary
    const amount = 100;
    const diff = 20;

    switch(type){
        case "user": 
              data = {
                  title:"USERS",
                  isCounter : false,
                  link:"See All Users",
                  icon:(
                      <PersonOutlineIcon className="icon" style={{
                        color : "goldenrod",
                        backgroundColor: "rgba(218,165,32,0.2)",
                      }}/>
                  )
              }
              break;
              case "call": 
              data = {
                  title:"CALL",
                  isCounter : false,
                  link:"View All call",
                  icon:(
                      <CallIcon className="icon" style={{
                        color : "purple",
                        backgroundColor: "rgba(128,0,128,0.2)",
                      }}/>
                  )
              }
              break;
              case "bugreport": 
              data={
                  title:"BUGREPORT",
                  isCounter : true,
                  link:"See All ticket",
                  icon:(
                      <BugReportIcon className="icon" style={{
                        color : "crimson",
                        backgroundColor: "rgba(255,0,0,0.2)",
                      }}/>
                  )
              }
              break;
              case "bpm": 
              data={
                  title:"BPM",
                  isCounter : true,
                  link:"See issues BPM",
                  icon:(
                      <AccountTreeIcon className="icon"
                      style={{
                        color : "green",
                        backgroundColor: "rgba(218,165,32,0.2)",
                      }}/>
                  )
              }
              break;
            default:
                  break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isCounter} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage negative">
                    <KeyboardArrowUpIcon/>
                      {diff}%
                    </div>
                    {data.icon}
            </div>
        </div>
    );
};

export default Widget;