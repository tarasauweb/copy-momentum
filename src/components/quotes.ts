const imgPath = `../img/reload.svg`;
class Quotes {
    footerWrapp:HTMLElement;
    arrayQuotes : Array<{}>;
    constructor (footerWrapp:HTMLElement) {
        this.footerWrapp = footerWrapp;
        this.arrayQuotes = [];
        this.getQuotes ();
        this.createQuotesBlock();
    }

    private async getQuotes () {
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
        img.setAttribute('alt' , 'change quotes')
        btn.classList.add('quotes-btn');
        img.setAttribute('src' , imgPath);
        btn.insertAdjacentElement('afterbegin' , img);
        return btn
        // this.footerWrapp.insertAdjacentElement('beforeend' , btn);
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
        quotesBlock.classList.add('quotes__block');
        quotesSubBlock.classList.add('quotes__subblock');
        quotesText.classList.add('quotes__text');
        quotesAuthor.classList.add('quotes__block');
        this.footerWrapp.insertAdjacentElement('beforeend' , quotesBlock)
        return quotesBlock;
    }
}


export default Quotes