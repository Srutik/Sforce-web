const Job = require('../models/jobs');

  
exports.createJobPost = (req,res,next) =>{
    const  JobRole = req.body.JobRole;
    const JobCategory = req.body.JobCategory;
    const JobType = req.body.JobType;
    const EducationQualification = req.body.EducationQualification;
    const Gender = req.body.Gender;
    const JobDescription = req.body.JobDescription;
    const CompanyYouAreHiringFor = req.body.CompanyName;
    // const imageUrl = req.file.path;
    const price = req.body.price;
    let creator;
    const job = new Job({
        JobRole: JobRole,
        JobCategory: JobCategory,
        JobType: JobType,
        EducationQualification: EducationQualification,
        Gender: Gender,
        JobDescription: JobDescription,
        CompanyYouAreHiringFor: CompanyYouAreHiringFor,
        JobRole: JobRole,

    //   imageUrl: `http://localhost:8080/${imageUrl}`,
    //   price:price,
    //   description: description,
      creator: {name:'Manager'}
    });
    job.save()
    .then(result =>{
      return res.status(201).json({message:'Job Post added successfully !', Post : result})
    })
      .catch(err => {
        if (!err.statusCode) {       
          err.statusCode = 500; 
        }
        next(err);
      });  
};



exports.getJob = (req,res,next) =>{
  const jobId = req.params.jobId;
  Job.findById(jobId)
  // .populate({
  //   path: "items.product_id"
  // }).populate({
  //   path: "items.ingredientId"
  // }).populate({
  //   path: "items.categoryId"
  // })
  .then(job=>{
      if(!job){
          return res.status(404).json({message:"please post a job first :)"})
      }
      return res.status(200).json({message:"Your Job Post", job:job})
  })
  .catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });

}


exports.getJobs = (req, res, next) => {
  const CurrentPage = req.query.page || 1;
  const perPage = 20;
  let totalItems;
  Job.find()
  // .populate({
  //   path: "items.product_id"
  // }).populate({
  //   path: "items.ingredientId"
  // }).populate({
  //   path: "items.categoryId"
  // })
    .countDocuments()
    .then(count => {
      totalItems = count;
      return Job.find()
    //   .populate({path:"items",populate:{
    //     path: "product_id"
    //   }
    // })
        .skip((CurrentPage - 1) * perPage)
        .limit(perPage)
    })
    .then(jobs => {
      res.status(200)
        .json({
          message: 'Fetched jobs Successfully',
          Jobs: jobs,
          totalItems: totalItems
        });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });  
};

