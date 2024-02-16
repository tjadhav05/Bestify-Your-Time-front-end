export class questions {
  questionid!: string;
  questid!: number;
  quizname!: string;
  question!: string;
  category!: string;
  ans!: string;
  marks!: number;
  timer!: string;
  option: any;
}
export class option {
      quizename!: string;
       time!: number;
  }
export class answer{
  questid!:number;
  option!:string;
  selectedoption:any;
}
