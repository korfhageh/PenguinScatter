var penguinPromise = d3.json("classData.json")
penguinPromise.then(
function(students)
{console.log("worked",students);
},
function(err)
    {console.log("failed",err);}
)

//getting final grade
var finalgrade = function(student)
{
    return student.final[0].grade; 
}

//getting homework mean
var getHomeworkMean = funtion(student)
{
    HWmean = homework.map(funtion(homework){return homework.grade});
    HomeworkMean = d3.mean(HWmean);
    return HomeworkMean;
}

//getting quiz mean
var getQuizMean = function(student)
{
    Qmean = quiz.map(funtion(quiz){return quiz.grade});
    MeanofQuizes = d3.mean(Qmean);
    return MeanofQuizes;
}

//getting Test Mean
var getTestMean
{
    Tmean - test.map(funtion(test){return test.grade});
    MeanofTests = d3.mean(Tmean);
    return MeanofTests;
}

