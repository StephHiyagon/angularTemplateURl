angular.module('probe',['myHeader'])
  .controller('first',
  function(){
    this.grettings = 'Benvindo!!!';
  }
)

document.addEventListener('DOMContentLoaded', function(){
  angular.bootstrap(document, ['probe']);
})
