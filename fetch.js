console.log( 111111 );
console.log( 222222 );

fetch( 'https://jsonplaceholder.typicode.com/todos/1' )
    .then( response => response.json() )
    .then( json => console.log( json ) );
setTimeout( () => console.log( 'aaaaaa' ) );
console.log( 333333 );
console.log( 444444 );