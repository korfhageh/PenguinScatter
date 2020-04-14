var penguinPromise = d3.json("classData.json")
penguinPromise.then(
function(students)
{console.log("worked",students);},
function(err)
{console.log("failed",err);}

)

//getting homework mean
var getHWavg = function(student)
{
homework = student.homework;
allhwgrades = homework.map(function(HW){return hw.grade});
meangrades = d3.mean(allhwgrades);
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


//scaling
var xScale =d3.scaleLinear()
.domain([0,100])
.range([0,500])

var yScale = d3.scaleLinear()
.domain([0,100])
.range([500,0])

var tooltip = d3.select("circle")
.append("img")

.style("opacity", 0)

.attr("class","tooltip")

var clearplot = function(student)
{
    d3.select("#Final vs HWMean")
    .selectAll(circle)
    .remove()
}
var createplot = function(students)
{
    d3.select("#Final vs HWMean")
    .on "click", function(students)
    {
        clearplot();
    }
}

var clearplot = function(student)
{
    d3.select("#HWMean vs QMean")
    .selectAll(circle)
    .remove()
}
var createplot = function(students)
{
    d3.select("#HWMean vs QMean")
    .on "click", function(students)
    {
        clearplot();
    }
}

var clearplot = function(student)
{
    d3.select("#Test Mean vs Quiz Mean")
    .selectAll(circle)
    .remove()
}
var createplot = function(students)
{
    d3.select("#Test Mean vs Quiz Mean")
    .on "click", function(students)
    {
        clearplot();
    }
}

var clearplot = function(student)
{
    d3.select("#Test Mean vs Final Mean")
    .selectAll(circle)
    .remove()
}
var createplot = function(students)
{
    d3.select("#Test Mean vs Final Mean")
    .on "click", function(students)
    {
        clearplot();
    }
}


.on("mouseover", student.img)
.on("mouseout", function()
   {
    d3.select("img")
}
   )

