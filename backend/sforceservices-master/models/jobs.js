const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema(
    {
      JobRole: {
        type: String,
        required: true
      },
      JobCategory:{
          type:String
      },
    JobType:{
          type:String
      },
      EducationQualification:{
          type:String
      },
      Gender:{
          type: String
      },
      JobDescription:{
        type: String,
        maxLength: 50
      },
      CompanyYouAreHiringFor:{
          type:String
      },
      imageUrl: {
        type: String,
        
      },
      price:{
        type:Number,  
        
          
      },
      description:String,
      creator: {
        type: Object,
        required: String
      }
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model('Job', JobSchema);
  