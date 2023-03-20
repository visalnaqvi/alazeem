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
        <tbody>
        {final.map((tag)=>(

                <tr key={Math.random()}>
                  {tag.map(t=>{
                      if(t!="" && t!=undefined && t!=null){ 
                        return t.includes("#") ? 
                        <td key={Math.random()} rowSpan={t.charAt(t.indexOf('#')+1)} className={style.cell}>{t.split("#")[0]}</td>:
                        <td key={Math.random()} className={style.cell}>{t}</td>
                      }
                  })}
                </tr>
        ))}
        </tbody>
      </table>
      </div>
      </div>
     );
}
 
export default PackageTable;