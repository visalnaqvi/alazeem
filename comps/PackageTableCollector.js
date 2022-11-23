import PackageTable from "./PackageTable";
const PackageTableCollector = ({packages}) => {
    console.log("belle0");
    console.log(packages);
    return (  
<div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",flexWrap:"wrap"}}>
            {packages.map((pack)=>(
            <PackageTable key={pack.id} pack = {pack}></PackageTable>
           
            ))}
      </div>
  );
}
 
export default PackageTableCollector;