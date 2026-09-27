const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for(const key in myObject){
    console.log(`${key} :- ${myObject[key]}`)
} 

console.log(" ")

const programming = ["js", "cpp", "ruby", "py"]

for(const key in programming){
    // console.log(key)
    console.log(programming[key])
}

// In js the array indices are considered to be the default keys 


```js
/*
INTERVIEW NOTES: for...in vs for...of, Objects vs Maps

1. for...of
- Iterates over values of an iterable.
- Works with Arrays, Strings, Maps, Sets, etc.
- Arrays: gives elements directly, NOT indices.
- Maps: gives [key, value] pairs by default.
- Requires the iterable protocol (Symbol.iterator).

Example:
for (const value of arr) console.log(value);


2. for...in
- Iterates over enumerable property keys of an object.
- For arrays, gives index keys (usually "0", "1", "2"...).
- To access array elements: arr[key].
- Does NOT use Symbol.iterator.

Example:
for (const key in obj) {
    console.log(key, obj[key]);
}


3. Object vs Map
Object:
- Stores data as properties (key-value pairs).
- Property keys are strings or Symbols.
- Normal objects are NOT iterable by default.
- for...in can enumerate enumerable property keys.
- Object.entries(obj) returns [key, value] pairs.

Map:
- Stores data as Map entries (key-value pairs).
- Keys can be of any type.
- Provides a built-in iterator over its entries.
- for...of map gives [key, value] pairs.
- map.keys() iterates over keys; map.values() over values.
- for...in does NOT iterate over Map entries.


4. Why does for...of work on Map but not a plain object?
for...of uses the iterable protocol (Symbol.iterator).
Map implements this protocol; plain objects don't by default.

Use:
for (const [key, value] of Object.entries(obj)) { ... }
to iterate over an object's entries.


5. Why doesn't for...in work on Map?
for...in enumerates enumerable object properties.
Map entries are stored in Map's internal data, not as ordinary
enumerable properties. Hence, for...in doesn't see those entries.

IMPORTANT:
Iterable != Enumerable.
Iterable means it provides an iterator.
Enumerable means its properties can be listed by property
enumeration mechanisms like for...in.


INTERVIEW ONE-LINER:
for...of uses an object's iterator to obtain values, whereas
for...in enumerates enumerable property keys. A Map provides
an iterator for its entries, but its entries are not ordinary
enumerable properties.
*/
```
