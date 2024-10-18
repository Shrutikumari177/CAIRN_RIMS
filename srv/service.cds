using { mydb} from '../db/schema';
 
 
 
service rimsService {
    entity WELL as projection on mydb.WELL;

    entity WBS as projection on mydb.WBS;
 
    entity COLLECTIONLOC as projection on mydb.COLLECTIONLOC;
 
    entity PROJECTTYPE as projection on mydb.PROJECTTYPE;

    entity REQUESTTYPE as projection on mydb.REQUESTTYPE;
    
    entity RIMS_REQUEST as projection on mydb.RIMS_REQUEST;
    
      
    entity Material as projection on mydb.Material;


}