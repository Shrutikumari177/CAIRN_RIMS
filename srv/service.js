const cds = require('@sap/cds');
 
 
module.exports = async ( srv) => {
    
    //     srv.on('CREATE', 'RIMS_REQUEST', async (req) => {
    //     const tx = cds.transaction(req);
    
    //     const lastRequest = await tx.run(SELECT.one.from('mydb.RIMS_REQUEST').columns('max(RequestCode) as maxReqCode'));
    //     console.log(lastRequest);
    //     const nextReqNo = lastRequest.maxReqCode ? lastRequest.maxReqCode + 1 : 40001;
    
    //     req.data.RequestCode = req.data.RequestCode || nextReqNo;
    
    //     if (req.data.Materials && Array.isArray(req.data.Materials)) {
    //         req.data.Materials.forEach(material => {
    //             material.RequestCode_RequestCode = req.data.RequestCode;
    //         });
    //     }
    
    //     await tx.run(INSERT.into('mydb.RIMS_REQUEST').entries(req.data));
    //     return cds.run(SELECT.from('mydb.RIMS_REQUEST').where({ RequestCode: req.data.RequestCode }));
    // });

    srv.on('CREATE', 'RIMS_REQUEST', async (req) => {
        const tx = cds.transaction(req);
    
        // Fetch the last RequestCode as a string and convert it to an integer for incrementing
        const lastRequest = await tx.run(SELECT.one.from('mydb.RIMS_REQUEST').columns('max(RequestCode) as maxReqCode'));
        
        const nextReqNo = lastRequest.maxReqCode ? (parseInt(lastRequest.maxReqCode) + 1).toString() : "40001";
    
        // Assign the generated RequestCode to the new request as a string
        // req.data.RequestCode = req.data.RequestCode || nextReqNo;
        let paylod = req.data;
        paylod.RequestCode = nextReqNo;
        // console.log("gjdgsdj", nextReqNo, req.data,lastRequest.maxReqCode);
    
        // Update Materials with the RequestCode if provided
        if (req.data.Materials && Array.isArray(req.data.Materials)) {
            req.data.Materials.forEach(material => {
                material.RequestCode_RequestCode = nextReqNo;
            });
        }
    
        await tx.run(INSERT.into('mydb.RIMS_REQUEST').entries(paylod));
        return cds.run(SELECT.from('mydb.RIMS_REQUEST').where({ RequestCode: nextReqNo }));
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
    
        
    }
    