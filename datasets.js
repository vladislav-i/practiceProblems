//stack
var stack = function() {
    var storage ={};
    var size=0;
    
    // add an item to the top of the stack
    this.push = function(value) {
        storage[size]=value;
        size++;
    };
    
    //remove from stack
    this.pop = function() {
        if (size > 0) {
            size--;
            var removed = storage[size];
            delete storage[size];
            return removed;  
        }
        return;
    };
    
    //find size of stack
    this.size = function() {
        return size;
    };
};
/*
var x =  new stack();
x.push(1); //1
x.push(2); //2
x.push(3); //3
console.log(x.pop()); //3
console.log(x.pop()); //2
console.log(x.pop()); //1
console.log(x.pop()); //undefined*/

//queue
var queue = function() {
    var storage ={};
    var size = 0;
    var count = 0;
    
    
    this.enqueue = function (val) {
        storage[size]=val;
        size++;
    };
    
    this.dequeue = function () {
        if (count < size) {
            var removed = storage[count];
            delete storage[count];
            count++;
            return removed; 
        } 
        return;
    };
    
    this.size = function() {
        return size - count-1;
    };
};
/*
var y =  new queue();
y.enqueue(1); //1
y.enqueue(2); //2
y.enqueue(3); //3
console.log(y.dequeue()); //1
console.log(y.dequeue()); //2
console.log(y.dequeue()); //3
console.log(y.dequeue()); //undefined*/


//hash table

var hashTable = function() {
    
    var buckets = [];
    var storageLimit = 1000;
    
    this.insert = function(key,value) {
        var hash = hashCode(key);
        var bucket = hash % storageLimit;
        var container = buckets[bucket];
        var obj= {};
        obj[key]=value;
        if (container) { 
             for (var i=0; i< container.length; ++i) {
                 if (container[i][key]) {
                     container[i][key] = value;
                     return;
                 }
             }
            container.push(obj);
        } else {
            buckets[bucket] = [obj];
        }
    };
    
    this.find = function(key) {
         var hash = hashCode(key);
         var bucket = hash % storageLimit;
         var container = buckets[bucket];
         if (container) {
             for (var i=0; i< container.length; ++i) {
                 if (container[i][key]) {
                     return container[i][key];
                 }
             }
         }
         return;
    };
    
    this.remove = function(key) {
         var hash = hashCode(key);
         var bucket = hash % storageLimit;
         var container = buckets[bucket];
         if (container) {
             for (var i=0; i< container.length; ++i) {
                 if (container[i][key]) {
                     delete container[i];
                 }
             } 
         }
    };
    
   function hashCode(str) {
      var hash = 0, i, chr, len;
      if (str.length === 0) return hash;
      for (i = 0, len = str.length; i < len; i++) {
        chr   = str.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    }
};

var newTable = new hashTable();

newTable.insert("snikers", "licking");
console.log(newTable.find("snikers"));
newTable.insert("snikers", "meow");
console.log(newTable.find("snikers"));