goal: learn about exist selection

### What is the exit selection?
- A list of element that should be removed from the document
- Opposite of _enter (array of data to be used eventually)
- _exit is the excess elements that should be removed
- `_exit` is created when we call the `data()` API
- We added 6 more li elements and commented out `join` and `text` so we can see the `_exit` property from `data` selection. If we look in the inspector, the `_exit` prop should have HTML elements in it now. The first 5 elements are element b/c data is linked to them but the last 3 are li elements since they have no __data__ prop in them. So we new know, we can safely remove those last 3 elements. 
- If we uncomment `join` and `text`, we'll see only 5 li element NOT eight. 
-`join` can also remove elements as well without us having to modify the HTML document. This means we never have to worry about having too many or too little element since `join` handles these issues well. 