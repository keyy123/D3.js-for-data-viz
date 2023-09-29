Goal: learn how to load data from external sources!

1. JSON and CSV files (or XML or text) are common ways to get data from (most common)
2. Data can be hard-coded in a JS file
3. Get data from an API endpoint (resource)

### What is D3 fetch?
- A package that handle http [requests](https://github.com/d3/d3-fetch)
- D3 Fetch has fxns to do HTTP requests using native `fetch` API under the hood to make it even easier. It can even get data from a request into usable form 
- We don't need to use D3 Fetch functions so they are mostly optional 
- D3 Fetch lib is included in full version of D3 so no need to install if you used fill CDN

### What is JSON? 
- JSON is a format for storing data (JavaScript Object Notation ) 
- Literally, It is made the same we make objects and array in JS
- We'll have a file called `data.json` for the upcoming example
- ```
data.json
[10, 20, 30, 40, 50]
```
- Our objective is to load this file into our project w/o hard coding it. We'll use D3 to do the request for our json file.  
- We'll need to use the d3 objects `json()` API and input the location of the file (relative/absolute)
- `json` takes in only 1 argument: The path to the data
- json(): promise

exercise 1 - call data.json file using d3

1. use `json()` api to call json file locally 
2. make a promise using the data from the json file 
3. log the parsed data to the console
4. go to localhost and see the console in the inspector


### How to use the network panel?
- We can use the *network* panel of the devTools to check the contents of a request
- Network panel let us see all requests made in a project, how long each request took, request type, and response. 
- It's mainly a debugging tool
- If we select `XHR` in the network panel, devTools will only show the results for JS requests
- If we click on the request, we see many properties: header, previews, resposne, initiator, and timing sections. 
- We want to focus on *preview* and *response* for now. 
- preview section renders the response as if it was in a browser env
- response section renders the raw text of the response


### How do we use `async await` syntax to increase our request readbility?
- We know `json()` returns a `promise`
- We should use async, await keywords to make the promises easier to read. 
```
const res = await fetch(url);
```

exercise 2 - refactor using async await syntax
1. make a function using async keyword and no parameters
2. In fxn body, make a variable that uses await and `json()` api to fetch json file 
3. print the results to the console
4. call function ot initiate the request

### What is CSV?
- CSV files are used like JSON files but with some caveats
- CSV = Comma-separated values AKA a text file with values that is split by a comma
- CSVs are commonly used by spreadsheet software like Excel
- 2 ways to work directly with CSVs: Text editors or spreadsheet program (Excel or Google Sheets)

### How to make CSV requests? 
- The file extension for CSVs is .csv or .xlsx
- YOu can literally make a csv by placing values and using , like columns
- In this case, the first row has values `name` and `age`. The second, John | 20
- D3 has a `csv` api that takes 1 argument: path to csv and returns the data similar to `json` api
- `csv` parses and returns csv data with an `column` prop that is an array

```
basic example
data.csv
name,age
John,20
```

exercise 3: 
- modify our request function to get the data from our CSV file!
