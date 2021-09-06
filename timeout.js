function doSomething() {
    console.log( 'I am coding JavaScript' );
}
setTimeout( doSomething, 4000 );
setTimeout( function () {
    console.log( 'I am first' );
}, 3000 );
setTimeout( () => {
    console.log( 'I am using VS Code' );
}, 4000 );
console.log( 'I am second' );
console.log( 'I am third' );

console.log( 'I am fourth' );
console.log( 'I am fifth' );