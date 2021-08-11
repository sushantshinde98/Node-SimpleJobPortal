const express=require('express');
const path=require('path');
const jobcontroller = require('../controllers/jobController');
const router=express.Router();


//controller calling-Routes

//api to post job
router.post('/job-posting',jobcontroller.createJob);

//api to apply a job
router.post('/job-apply',jobcontroller.applyJob);


//api to fetch all jobs
router.get('/job-listing',jobcontroller.getAllJobList);

//api to fetch all jobs with apllied candidates
router.get('/job-applied',jobcontroller.getJobListWithApplications);

module.exports=router;