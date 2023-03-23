import PackageTable from "./PackageTable";
const PackageTableCollector = ({packages}) => {
    return (  
<div style={{ display:"flex",justifyContent:"space-evenly",alignItems:"flex-start",flexWrap:"wrap"}}>
            {packages.map((pack)=>(
                
            <PackageTable key={pack.DocId} pack = {pack}></PackageTable>
           
            ))}
      </div>
  );
}
 
export default PackageTableCollector;