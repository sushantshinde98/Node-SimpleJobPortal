const mongoose=require('mongoose');
let jobModel=require('../models/Job');
module.exports={
    createJob:(req,res)=>{
        let Model =new jobModel
        ({
            companyName:req.body.cname,
	        employerName:req.body.ename,
	        employerEmail:req.body.eemail,
	        employerDesignation:req.body.edesignation,
	        employerMobile:parseInt(req.body.emobile),
            hiringPosition:req.body.ehiringfor,
	        jobDescription:req.body.jobdescription,
	        salary:parseFloat(req.body.salary),
            jobLocation:req.body.joblocation,
            requiredTechnology:req.body.requiredtech,
            requiredExperiance:parseInt(req.body.requiredexp),
    
        });
        Model.save().then(()=>{
            res.json({'msg':'success!'})
            console.log('job post created!')
        })
        .catch((err)=>console.log("Not created!"+err));
    },
    applyJob:async(req,res)=>{
        //apply to job with candidate details
        try{
        let id=req.body.jobid;
        let d= new Date();
        let dt=d.toLocaleString();
        let candidate={
            _id:mongoose.Types.ObjectId(),
            candidateName:req.body.cname,
            candidateEmail:req.body.cemail,
            candidateMobile:parseInt(req.body.cmobile),
            candidateDegree:req.body.cdegree,
            candidateDegreePercent:parseFloat(req.body.cdegreepercent),
            candidateYearOfPass:parseInt(req.body.cyearofpass),
            candidateExperience:parseInt(req.body.cyearofexp),
            candidateSkills:req.body.cskills,
            candidateLocation:req.body.clocation,
            appliedAt:dt,

        }
        let jobresult= await jobModel.findByIdAndUpdate({"_id":id},{$push:{"jobApplications":candidate}});
        res.redirect('/index.html');
        //res.json(jobresult);
        console.log('applied to job!'+jobresult);
        }catch (err) {
            console.log("Not applied!" + err);
        }
    },

    
    getAllJobList:async(req,res)=>{
        //fetchAll
        try{
        let result= await jobModel.find({},{"jobApplications":0});
        res.render('job-listing',{'joblist':result})
        //res.json(result);
        console.log('All jobslist Fetched!')
        }catch (err) {
            console.log("joblist Not Fetched!" + err);
        }
    },
    getJobListWithApplications:async(req,res)=>{
        //fetchAll
        try{
        let jobswithapplications= await jobModel.find({});
        res.render('job-applied',{'jobswithapplications':jobswithapplications});
        //res.json(jobswithapplications);
        console.log('All jobslist with applications Fetched!')
        }catch (err) {
            console.log("joblist with appications Not Fetched!" + err);
        }
    },

};