const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017";
var dbo;
var db;

MongoClient.connect(url,(error,result)=>{
    if(error)
        throw error;
    dbo = result;
    db = dbo.db('registration');
    console.log("Established connection to mongodb database projectsite");
    // let user = 'praveen@gmail.com'
    // fetchRegistration(user);
})

function registration(user,callback){
    db.collection('register').insertOne(user,(error,result)=>{
        if(error)
            throw error;
        callback(result);
    })
}

function fetchRegistration(username,callback){
    db.collection('register').findOne({username : username},(error,result)=>{
        callback(result);
    })
}

function fetchProjects(callback){
    db.collection('projects').find().toArray((error,result)=>{
        callback(result);
    })
};

function fetchProjectDetails(id,callback){
    db.collection('projects').find({projectid : id}).toArray((error,result)=>{
        callback(result);
    })
};

function putReview(id,review,callback){
        var myquery = { projectid: id };
        var newvalues = { $push: {reviews: review } };
        db.collection("projects").update(myquery, newvalues, function(error, result) {
            if (error) {
                console.log(error);
            }
            //console.log(result);
            callback(result);
          });
}

function fetchPremiumProjects(callback){
    db.collection('premiumprojects').find().toArray((error,result)=>{
        callback(result);
    })
};


module.exports.registration = registration;
module.exports.fetchRegistration = fetchRegistration;
module.exports.fetchProjects = fetchProjects;
module.exports.fetchPremiumProjects = fetchPremiumProjects;
module.exports.fetchProjectDetails = fetchProjectDetails;
module.exports.putReview = putReview;