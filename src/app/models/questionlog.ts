export interface iQuestionBank{
    questid:number,
    quizname:string,
    question:string,
    category:string,
    ans:string,
    marks:number,
    timer:String,
    optionA:string,
    optionB:string,
    optionC:string,
    optionD:string,
    highscore:any,
    imgurl:any,
    status:boolean
   
}
export interface Highscore{
    scoreid:number,
    username:string,
    score:number,
    
}