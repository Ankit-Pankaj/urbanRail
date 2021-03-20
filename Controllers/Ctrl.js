
var data= require("../data.json");

// To get all the data
getAll = function(req, res){
    res.send(data);
    var result= data.filter((item)=>{
        return item.ID==2;
    })
    res.status(200).json(result);
   
}

// To search for a particular station
search =  function(req, res){
    var stationQuery=req.query.station;
    console.log(stationQuery);
    var result= data.filter((item)=>{
        // console.log(item['Station Code']);
        return item["Station Code"]==stationQuery;
    })
    if(result.length){ // if data present
        res.status(200).json(result);
    }
    else{  // if no data present
        res.status(404).json({"Error": "Data Not Found"});
    }
   
}

// To find distance between two stations
distance = function(req, res){
    var from=req.query.from;
    var to=req.query.to;
    // console.log(from, to);
    var dist1= data.filter((it)=>{ // search for distance 1
        return  temp= it.ID==from;
        
    })
    var dist2= data.filter((it)=>{ // search for distance 2
        return temp= it.ID==to;       
    })

    if(dist1.length===0||dist2.length===0){ // if no data present
        res.status(404).json({"Error": "Data Not Found"});
    }
    else{ // if data present
        var distance= Math.round(Math.abs( dist1[0]["Distance in Kms"] - dist2[0]["Distance in Kms"] )*1000)/1000 ;
        res.status(200).json({"Distance": distance })
    }
   
}
module.exports = {getAll, distance, search}