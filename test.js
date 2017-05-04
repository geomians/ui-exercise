/* Display and hides the side nav bar */
$( document ).ready( function(){

  // Define elements to reduce lookup
  var $content = $( '.content' );
  var $sidebar = $( '.sidebar' );

  $( ':button[class="sidebarClick"]' ).on( 'click', function(){
      $( $sidebar ).toggle();
      if( $( $content ).hasClass( 'fullWidth' ) ){
        $( $content ).removeClass( 'fullWidth' );
      } else {
        $( $content ).addClass( 'fullWidth' );
      }
  });

});