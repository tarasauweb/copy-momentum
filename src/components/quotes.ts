const imgPath = `../img/reload.svg`;
class Quotes {
    footerWrapp:HTMLElement;
    arrayQuotes : Array<{}>;
    constructor (footerWrapp:HTMLElement) {
        this.footerWrapp = footerWrapp;
        this.arrayQuotes = [];
        this.createQuotesBlock ();
        this.setQuotes();
    }

    private async getQuotes () : Promise <Array<{quote?:string , author?:string}>> {
        const data = await fetch('https://dummyjson.com/quotes');
        const res = await data.json();
        res.quotes.forEach((item : Array<{}>)=>{
            this.arrayQuotes.push(item)
        })
        return this.arrayQuotes
    }

    private createBtnChangeQuotes () : HTMLElement {
        const btn = document.createElement('button');
        const img = document.createElement('img');
        img.setAttribute('alt' , 'change quotes');
        btn.classList.add('quotes-btn');
        img.setAttribute('src' , imgPath);
        btn.insertAdjacentElement('afterbegin' , img);
        btn.addEventListener('click' , ()=>{
            this.setQuotes();
        })
        return btn
    }

    private createQuotesBlock () : HTMLElement {
        const quotesBtn = this.createBtnChangeQuotes();
        const quotesBlock = document.createElement('div');
        const quotesSubBlock = document.createElement('div');
        const quotesText = document.createElement('div');
        const quotesAuthor = document.createElement('div');
        quotesBlock.insertAdjacentElement('afterbegin' , quotesSubBlock);
        quotesBlock.insertAdjacentElement('afterbegin' , quotesBtn);
        quotesSubBlock.insertAdjacentElement('afterbegin' , quotesText);
        quotesSubBlock.insertAdjacentElement('beforeend' , quotesAuthor);
        quotesBlock.classList.add('quotes');
        quotesSubBlock.classList.add('quotes__subblock');
        quotesText.classList.add('quotes__text');
        quotesAuthor.classList.add('quotes__author');
        this.footerWrapp.insertAdjacentElement('beforeend' , quotesBlock)
        return quotesBlock;
    }

    private setQuotes () {
        const textQuotes = document.querySelector('.quotes__text') as HTMLElement;
        const authorQuotes = document.querySelector('.quotes__author') as HTMLElement;
        const data = this.getQuotes();
        data.then((res)=>{
            const number = this.getRandomNumber(0,res.length - 1);
            textQuotes.innerHTML = res[number].quote as string;
            authorQuotes.innerHTML = res[number].author as string;
        })
    }

    private getRandomNumber (min:number , max:number):number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    returnWidget () {
        const quotesWidget = document.querySelector('.quotes');
        return quotesWidget;
    }
}


export default Quotes