class Quotes {
    arrayQuotes : Array<{}>
    constructor () {
        this.getQuotes ();
        this.arrayQuotes = [];
    }

    private async getQuotes () {
        const urlQuotes : string = 'https://type.fit/api/quotes';
        const data = await fetch(urlQuotes);
        const res = await data.json();

        console.log(res[0])
    }
}


export default Quotes