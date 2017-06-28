function Stack() {
   var items = new Array();

  this.empty = function (){
    return items.length === 0;
  };

  this.push = function (item){
    items.unshift(item);
    return item;
  };

  this.peek = function(){
    return items[0];
  };

  this.pop = function(){
    return items.pop();
  };

  this.search = function(item){
    let index = items.findIndex(function(element){
      return element === item;
    });
    if(index === -1){
      return 0.1;
    }
    else {
      return index;
    }
  };


}


// var Stack = (function() {
//    this.items = new Array();
//
//    return {
//
//   empty: function (){
//     console.log('in empty');
//     return this.items.length === 0;
//   },
//
//   push: function (item){
//     this.items.unshift(item);
//     return item;
//   },
//
//   peek: function(){
//     return this.items[0];
//   },
//
//   pop: function(){
//     return this.items.pop();
//   },
//
//   search: function(item){
//     let index = this.items.findIndex(function(element){
//       return element === item;
//     });
//     if(index === -1){
//       return 0.1;
//     }
//     else {
//       return index;
//     }
//   }
//
// };
//
//
// })();


module.exports = Stack;
