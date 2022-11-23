import style from "../styles/flightTable.module.css";
const PackageTable = ({pack}) => {
  console.log(pack);
    var final = [];
    var flightnum = pack.FlightsNumandTime
    var len = flightnum.length
    var sec = pack.sector
    var td = pack.travelDate
    var seat = pack.seat
    var gf = pack.groupFare
    for (let i = 0; i < len; i++) {
        var f = []
        f.push(sec[i]);
        f.push(td[i]);
        f.push(flightnum[i]);
        f.push(seat[i]);
        f.push(gf[i]);
        final.push(f);
    }
    return ( 
      <div className={style.wrapper}>
       <div className={style.tableWrap}>
       <p className={style.heading}>{pack.Title}</p>
        <table border="0" style={{ border: "none" }}>
        <thead className={style.tableHead}>
          <tr>
            <td className={style.cell}>Sector</td>
            <td className={style.cell}>Travel Date</td>
            <td className={style.cell}>Flight No. & Time</td>
            <td className={style.cell}>Seats</td>
            <td className={style.cell}>Group Fare</td>
           
          </tr>
        </thead>
        {final.map((tag)=>(
                <tr key={Math.random()}>
                <td className={style.cell}>{tag[0]}</td>
                <td className={style.cell}>{tag[1]}</td>
                <td className={style.cell}>{tag[2]}</td>
                <td className={style.cell}>{tag[3]}</td>
                <td className={style.cell}>{tag[4]}</td>
              </tr>
        ))}
      </table>
      </div>
      </div>
     );
}
 
export default PackageTable;