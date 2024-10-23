const cds = require('@sap/cds');
 
 
module.exports = async ( srv) => {
    // srv.on('READ', 'WELL', req => {
    //     return cds.run(SELECT.from('mydb.WELL'));
    // });
   
    // srv.on('READ', 'WBS', req => {
    //     return cds.run(SELECT.from('mydb.WBS'));
    // });

    // srv.on('READ', 'COLLECTIONLOC', req => {
    //     return cds.run(SELECT.from('mydb.COLLECTIONLOC'));
    // });

    // srv.on('READ', 'REQUESTTYPE', req => {
    //     return cds.run(SELECT.from('mydb.REQUESTTYPE'));
    // });
    // srv.on('READ', 'PROJECTTYPE', req => {
    //     return cds.run(SELECT.from('mydb.PROJECTTYPE'));
    // });
    // // srv.on('READ', 'Material', req => {
    //     return cds.run(SELECT.from('mydb.Material'));
    // });
    srv.on('CREATE', 'RIMS_REQUEST',async req => {
        await cds.run(INSERT.into('mydb.RIMS_REQUEST').entries(req.data));
        return
    });
    srv.on('CREATE', 'WELL', async req => {
        await cds.run(INSERT.into('mydb.WELL').entries(req.data));
        return cds.run(SELECT.from('mydb.WELL').where({WellCode : req.data.WellCode}))
    });
    srv.on('CREATE', 'Material', req => {
        return cds.run(INSERT.into('mydb.Material').entries(req.data));
    });
    
    srv.on('UPDATE', 'Material', req => {
        return cds.run(UPDATE('mydb.Material').set(req.data).where({ ID: req.data.ID }));
    });
    // srv.on('UPDATE', 'RIMS_REQUEST', req => {
        //     return cds.run(UPDATE('mydb.RIMS_REQUEST').set(req.data).where({ ID: req.data.ID }));
        // });
        
    }
    // srv.on('READ', 'RIMS_REQUEST', req => {
    //     return cds.run(SELECT.from('mydb.RIMS_REQUEST'));
    // });