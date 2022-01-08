
const excerciseData = require('../../data/exerciseData') 

exports.contestDetails = async(req,res,next) => {
    res.status(200).send({status:200,data:excerciseData})
}