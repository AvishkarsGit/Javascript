const myNum = [1,2,3,4,5,6,7,8,9,10];
// const newNum = myNum.filter( (num) => num>4)  
const newNum = myNum.filter((num) =>{
    return num > 4
})

const newArr = [];
myNum.forEach((num)=> {
    if(num>4){
        newArr.push(num)
    }
})
// console.log(newArr);

const books =
    [
        {
            title: 'Book one',
            genre: 'History',
            publish: '1987',
            edition: '2010'
        },
        {
            title: 'Book two',
            genre: 'Economics',
            publish: '1987',
            edition: '2010'
        },
        {
            title: 'Book three',
            genre: 'Development',
            publish: '1987',
            edition: '2010'
        },
        {
            title: 'Book four',
            genre: 'Development',
            publish: '1987',
            edition: '2010'
        },
        {
            title: 'Book five',
            genre: 'Economics',
            publish: '1987',
            edition: '2010'
        },
        {
            title: 'Book six',
            genre: 'Economics',
            publish: '1987',
            edition: '2010'
        },
        {
            title: 'Book seven',
            genre: 'History',
            publish: '1987',
            edition: '2010'
        },
        {
            title: 'Book eight',
            genre: 'Economics',
            publish: '1987',
            edition: '2010'
        },
    ]

    let userBooks = books.filter((bk)=> {
        return bk.genre === 'History'
    })
    console.log(userBooks);