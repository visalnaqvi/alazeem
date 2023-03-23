import UmrahCard from "./umrahCard";
const UmrahPackageCollector = ({packages}) => {
    
    return (  
<div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",flexWrap:"wrap"}}>
            {packages.map((packh)=>(
            <UmrahCard key={packh.DocId} packh = {packh}></UmrahCard>
            ))}
      </div>
  );
}
 
export default UmrahPackageCollector;