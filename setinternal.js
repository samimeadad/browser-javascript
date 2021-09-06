console.log( 'first' );
let x = 1;
const timeId = setInterval( () => {
    console.log( x++ );
    if ( x > 10 ) {
        clearInterval( timeId );
    }
}, 1000 );
console.log( 'second' );