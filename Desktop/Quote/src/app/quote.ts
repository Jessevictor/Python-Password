export class Quote {
    showAuthor: boolean;
    constructor(public id: number,public quote: string,public Author: string){
      this.showAuthor=false;
    }
  }
