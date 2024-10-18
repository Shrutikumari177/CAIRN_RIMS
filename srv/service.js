const cds = require('@sap/cds');
 
 
module.exports = async ( srv) => {
    srv.on('READ', 'WELL', req => {
        return cds.run(SELECT.from('mydb.WELL'));
    });
   
    srv.on('READ', 'WBS', req => {
        return cds.run(SELECT.from('mydb.WBS'));
    });
    srv.on('READ', 'COLLECTIONLOC', req => {
        return cds.run(SELECT.from('mydb.COLLECTIONLOC'));
    });
    srv.on('READ', 'REQUESTTYPE', req => {
        return cds.run(SELECT.from('mydb.REQUESTTYPE'));
    });
    srv.on('READ', 'PROJECTTYPE', req => {
        return cds.run(SELECT.from('mydb.PROJECTTYPE'));
    });
    srv.on('READ', 'RIMS_REQUEST', req => {
        return cds.run(SELECT.from('mydb.RIMS_REQUEST'));
    });
    srv.on('READ', 'Material', req => {
        return cds.run(SELECT.from('mydb.Material'));
    });
    srv.on('CREATE', 'RIMS_REQUEST', req => {
        return cds.run(INSERT.into('mydb.RIMS_REQUEST').entries(req.data));
    });
    srv.on('CREATE', 'Material', req => {
        return cds.run(INSERT.into('mydb.Material').entries(req.data));
    });
 
    srv.on('UPDATE', 'Material', req => {
        return cds.run(UPDATE('mydb.Material').set(req.data).where({ ID: req.data.ID }));
    });
    srv.on('UPDATE', 'RIMS_REQUEST', req => {
        return cds.run(UPDATE('mydb.RIMS_REQUEST').set(req.data).where({ ID: req.data.ID }));
    });

}