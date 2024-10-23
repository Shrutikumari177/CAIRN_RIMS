namespace mydb;
 
entity WELL  {
    key WellCode     : String(25);                      
        WellDescription          : String(255);                    
                      
}
entity WBS  {
    key WbsCode     : String(25);                      
        WbsDescription          : String(255);                    
                      
}
entity PROJECTTYPE  {
    key ProjectCode     : String(10);                      
        ProjectDescription          : String(255);                    
                      
}
entity REQUESTTYPE  {
    key TypeCode     : String(25);                      
        TypeDescription          : String(255);                    
                      
}
entity COLLECTIONLOC  {
    key ColllocCode     : String(25);                      
        ColllocDescription          : String(255);                    
                      
}



entity RIMS_REQUEST {
    key RequestCode     : Integer; 
    typeOfRequest       : String(10); 
    collectionLocationType : String(10); 
    well                : String(50); 
    wBS                 : String(20); 
    requesterLocation   : String(50);
    projectType         : String(10); 
    remarks             : String(255);
    
    
    materials           : Composition of many Material on materials.RequestCode = $self
}


entity Material {
    key itemCode   : String(10); 
    description    : String(255); 
    uOM            : String(5); 
    quantity       : Decimal(15,3); 
    remarks_1      : String(255); 
    key RequestCode : Association to RIMS_REQUEST;
    
   
}