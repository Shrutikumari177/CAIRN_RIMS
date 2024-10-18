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
    key RequestCode : Integer; // Unique identifier for each request
    typeOfRequest       : String(10); // Type of the request
    collectionLocationType : String(10); // Type of collection location
    well                : String(50); // Associated well
    wBS                 : String(20); // Work Breakdown Structure (WBS)
    requesterLocation   : String(50); // Location of the requester
    projectType         : String(10); // Type of project
    remarks             : String(255); // Any remarks associated with the request
    
    
    materials           : Composition of many Material on materials.RequestCode = $self;
}


entity Material {
    key itemCode   : String(10); // Unique identifier for each material
    description    : String(255); // Description of the material
    uOM            : String(5); // Unit of Measure
    quantity       : Decimal(15,3); // Quantity of the material
    remarks_1      : String(255); 
    RequestCode : Association to one RIMS_REQUEST
    
   
}