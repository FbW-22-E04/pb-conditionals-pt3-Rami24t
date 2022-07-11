//Programming Basics: Conditionals Part 3
//Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!)
//Print your results to the console
//Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points
//1a) Calculate the average score for each team
let aleezas = (89 + 120 + 103) / 3;
let liss = (116 + 94 + 123) / 3;
//1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output
if (aleezas > liss)
    console.log("Aleeza's team wins with a score of:", aleezas)
else if (liss > aleezas)
    console.log("Lis's team wins with a score of:", liss)
else
    console.log("It is a draw! Both teams scored:", liss)
//1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
aleezas = (113 + 120 + 103) / 3;
if (aleezas > liss)
    console.log("Aleeza's team wins with a score of:", aleezas)
else if (liss > aleezas)
    console.log("Lis's team wins with a score of:", liss)
else
    console.log("It is a draw! Both teams scored:", liss)

//1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console
let marys = (97 + 134 + 105) / 3;
if (!(aleezas == marys && marys == liss)) {
    if (aleezas > liss) {
        if (aleezas > marys)
            console.log("Aleeza's team wins with a score of:", aleezas)
        else {
            if (marys > aleezas)
                console.log("Mary's team wins with a score of:", marys)
            else
                console.log("It is a draw between Aleeza's and Mary's teams! Both teams scored:", marys)
        }
    }
    else if (liss > aleezas) {
        if (liss > marys)
            console.log("Lis's team wins with a score of:", liss)
        else {
            if (liss == marys)
                console.log("It is a draw between Lis's team and Mary's team! Both teams scored:", liss);
            else
                console.log("Mary's team wins with a score of", marys);
        }
    }
    else
        console.log("It's a draw between Lis's and Aleeza's teams! Both have scored:", aleezas);
}
else
    console.log("It is a draw between the three teams at a score of", liss);

//1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws
marys = (112 + 134 + 105) / 3;
if (!(aleezas == marys && marys == liss)) {
    if (aleezas > liss) {
        if (aleezas > marys)
            console.log("Aleeza's team wins with a score of:", aleezas)
        else {
            if (marys > aleezas)
                console.log("Mary's team wins with a score of:", marys)
            else
                console.log("It is a draw between Aleeza's and Mary's teams! Both teams scored:", marys)
        }
    }
    else if (liss > aleezas) {
        if (liss > marys)
            console.log("Lis's team wins with a score of:", liss)
        else {
            if (liss == marys)
                console.log("It is a draw between Lis's team and Mary's team! Both teams scored:", liss);
            else
                console.log("Mary's team wins with a score of", marys);
        }
    }
    else
        console.log("It's a draw between Lis's and Aleeza's teams! Both have scored:", aleezas);
}
else
    console.log("It is a draw between the three teams at a score of", liss);


