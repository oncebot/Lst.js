# Lst.js
Lst.js is a collection of simple array and object helper functions.


### Installation
Just adding the Lst.js file will allow you to use it on any webapp with the Lst object.

### Available functions

```
Lst.clone(list)
=> list is an array of objects or a single object
=> Returns a deep clone of the array or object
```

```
Lst.index(list,identiier_object) 
=> list is an array of objects
=> object is a single key/value pair like {id:1}, where id is unique for each items in the array
=> Returns index for the matching key/value pair
```

```
Lst.find(list,object)
=> list is an array of objects
=> object is a single key/value pair like {id:1}, where id is unique for each items in the array
=> Returns the actual item from the array for the matching key/value pair
```

```
Lst.add(list,item,index = null)
=> list is an array of objects
=> item is the actual item you want to add
=> index is the index you want to add the item, if null it will be added at the end of the list
=> Returns the list with the new item
```

```
Lst.remove(list,object)
=> list is an array of objects
=> object is a single key/value pair like {id:1}, where id is unique for each items in the array
=> Returns the list without the item
```

```
Lst.update(list,object,data)
=> list is an array of objects
=> object is a single key/value pair like {id:1}, where id is unique for each items in the array
=> data an object with the key/values that you want to update in the current list for that specific object
=> Returns the updated list 
```

```
Lst.min(list,key)
=> list is an array of objects
=> key is the prop name that you want to find the value for
=> Returns the min value
```

```
Lst.max(list,key)
=> list is an array of objects
=> key is the prop name that you want to find the value for
=> Returns the max value
```


```
Lst.select(list,keys)
=> list is an array of objects
=> keys is an array of prop names that you want to output as the new list.
=> Returns a new list with only the props specified in the argument
```

.....There are a lot more functions and the  documentation will be updated soon.



### License

```
MIT License

Copyright (c) 2018 Biraj Ghosh <biraj@oncebot.com>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

[Oncebot](https://oncebot.com)