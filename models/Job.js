const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var job = new Schema({
	companyName:{type:String,required:true},
	employerName:{type:String,required:true},
	employerEmail:{type:String,required:true},
	employerDesignation:{type:String,required:true},
	employerMobile:{type:Number,required:true},
	hiringPosition:{type:String,required:true},
	jobDescription:{type:String,required:true},
	salary:{type:Number,required:true},
	jobLocation:{type:String,required:true},
	requiredTechnology:{type:String,required:true},
	requiredExperiance:{type:Number,required:true},
	createdAt: { type: Date, default: Date.now },
	jobApplications:[{}]
}, {
	collection: 'job'
});

var jobModel= mongoose.model('jobModel',job);
module.exports=jobModel;
