const db = require('../models');
const Report = db.reports;

const addReports = async (req, res)=>{
    let info = {
        userId: req.userId,
        quizeId: req.body.quizeId,
        applicationName: req.body.applicationName
    }
    const report = await Report.create(info);
    if(!report){
        return res.status(400).json({
            success: false,
            err
        });
    }
    return res.status(200).json({
        success: true,
        result: report
    });
}
const viewReport = async (req, res)=>{
    let report = await Report.findAll({})
    if(report){
        res.status(200).json({
            success: true,
            results: report
        });
    }
    else{
        res.status(400).json({
            successs: false,
            results: Error
        });
    }
}

module.exports = {addReports, viewReport}