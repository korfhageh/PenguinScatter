var penguinPromise = d3.json("classData.json")
penguinPromise.then(    
function(students)
{console.log("worked",students);
//drawmeanvshomework(students)
 setupbuttons(students)
}, 
function(err)
{console.log("failed",err);}

)
var drawmeanvshomework = function(students)
{
    var xScale = d3.scaleLinear()
				 .domain([0,100])
				 .range([0,500])
    var yScale = d3.scaleLinear()
				 .domain([0,100])
				 .range([500,0]);
    
    d3.select("svg")
    .selectAll("circle")
    .data(students)
    .enter()
    .append("circle")
    .attr("r", 2)
    .attr("cx", function(student)
         {
        
        return xScale(getHWavg(student))
    }
         )
    .attr("cy", function(student)
         {
        
        return yScale(getFinal(student))
    })
  
    
}

var drawHWMeanvsQuizMean = function(students)
{
    var xScale = d3.scaleLinear()
				 .domain([0,100])
				 .range([0,500])
    var yScale = d3.scaleLinear()
				 .domain([0,10])
				 .range([500,0]);
    
    d3.select("svg")
    .selectAll("circle")
    .data(students)
    .enter()
    .append("circle")
    .attr("r", 2)
    .attr("cx", function(student)
         {
        
        return xScale(getHWavg(student))
    }
         )
    .attr("cy", function(student)
         {
        
        return yScale(getQuizavg(student))
    })

}

var drawTestMeanvsQuizMean = function(students)
{
    var xScale = d3.scaleLinear()
				 .domain([0,100])
				 .range([0,500])
    var yScale = d3.scaleLinear()
				 .domain([0,10])
				 .range([500,0]);
    
    d3.select("svg")
    .selectAll("circle")
    .data(students)
    .enter()
    .append("circle")
    .attr("r", 2)
    .attr("cx", function(student)
         {
        
        return xScale(getTestavg(student))
    }
         )
    .attr("cy", function(student)
         {
        
        return yScale(getQuizavg(student))
    })

}

var drawTestMeanvsFinalMean = function(students)
{
    var xScale = d3.scaleLinear()
				 .domain([0,100])
				 .range([0,500])
    var yScale = d3.scaleLinear()
				 .domain([0,100])
				 .range([500,0]);
    
    d3.select("svg")
    .selectAll("circle")
    .data(students)
    .enter()
    .append("circle")
    .attr("r", 2)
    .attr("cx", function(student)
         {
        
        return xScale(getTestavg(student))
    }
         )
    .attr("cy", function(student)
         {
        
        return yScale(getFinal(student))
    })

}

var setupbuttons = function(students)
{
    d3.select("#FinalvsHWMean")
    .on ("click", function()
        {
        drawmeanvshomework(students)
    })
    d3.select("#HWMeanvsQMean")
    .on("click", function()
       {
        drawHWMeanvsQuizMean(students)
    })
    d3.select("#TestMeanvsQuizMean")
    .on("click", function()
       {
        drawTestMeanvsQuizMean(students)}
        )
    d3.select("#TestMeanvsFinalMean")
    .on ("click", function()
        {
        drawTestMeanvsFinalMean(students)
    })
}




//getting homework mean
var getHWavg = function(student)
{
var homework = student.homework;
var allhwgrades = homework.map(function(HW){return HW.grade});
var meangrades = d3.mean(allhwgrades);
return Math.round(meangrades);
}

//getting test mean
var getTestavg = function(student)
{
tests = student.test;
allTestgrades = tests.map(function(test){return test.grade});
meangrades = d3.mean(allTestgrades)
return Math.round(meangrades);
}

//getting final grade
var getFinal = function(student)
{return student.final[0].grade;}

//getting quiz mean
var getQuizavg = function(student)
{
    quizes = student.quizes;
    allQuizgrades = quizes.map(function(quiz){return quiz.grade});
    meangrades = d3.mean(allQuizgrades);
    return Math.round(meangrades);
}


