---
title: Basics Of GoLang (part-4)
slug: /21-basics-of-golang-part-4
date: 2020-05-30
desc: Understand Web servers, external API, ConCurrency and Channel in GO
# Old URL
# Minute Read
cover:
  img: ../../../photos/21-basics-of-golang-part-4.png
banner: ../../banners/21-basics-of-golang-part-4.png
tags:
  - GO
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import WebServer from './1-web-server.png'
import ExternalAPI from './2-external-api.jpg'
import Concurrency from './3-concurrency.png'
import ConcurrencyB from './4-concurrency-b.jpg'
import Channel from './5-channel.jpg'
import TodoOutput from './6-todo-output.png'

<p><span class='first-letter'>W</span>e covered almost all topics in <LinkPost href='/17-basics-of-golang-part-1' name='Part-1' />, <LinkPost href='/18-basics-of-golang-part-2' name='Part-2' /> and <LinkPost href='/19-basics-of-golang-part-3' name='Part-3' />. If you have not read those parts, I would recommend to check it out first, as creating variables, all control statements and data types are added into the first blog for  <LinkPost href='/17-basics-of-golang-part-1' name='Basics Of GoLang Part-1' />, Functions, Array, Toolkit, Packages, Unit Testing and Structs has explained in <LinkPost href='/18-basics-of-golang-part-2' name='Basics Of GoLang Part-2' /> and Pointers, Error Handling, Methods, Interface has explained in <LinkPost href='/19-basics-of-golang-part-3' name='Basics Of GoLang Part-3' />.</p>

In this blog, we will be covering following topics which will be based on web and server:

1. Web Servers
2. External API
3. ConCurrency
4. Channel

## 1️⃣ Web Servers

<ImgPost src={WebServer} alt='web server in go' width={60} />

**How can we interact with browser❓ 🤔**

1. <mark>Routes</mark>

 GO handle routes using: `net/http` library

 In below snippet, you can see how to define route for homepage.

 ```go
 func main() {
 	http.HandleFunc("/", home) // go the / page and fire the function home
 }
 ```

<u>Go Code:</u>

```go
package main
import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)
// adding the arguments as HandleFunc is expecting
func home(w http.ResponseWriter, r *http.Request) {
	// 1st arg: writer, where we are writing. http.ResponseWriter is built-in type that comes from the http library
	// 2nd arg: request, http.Request is also built-in
	fmt.Println("Home")
}

func todos(w http.ResponseWriter, r *http.Request) {
	// fmt.Fprint(w, "Todoo")  // Output: we can see in the browser as Todoo
	// first, where we want to print text to. and then what we want to print

	t, err := template.ParseFiles("todos.html") // returning 2 things, 1st whatever passes 2nd an error

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		log.Print("template pasrsing error", err)
	}
	// if there is no error, we execute on the var t to: weriter and 2nd arg if we need additional data being passed through
	err = t.Execute(w, nil)
}

func main() {
	http.HandleFunc("/", home) //HandleFunction expecting 2 arguments here
	http.HandleFunc("/todos", todos)
	fmt.Println("Server is running on port: 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))

	// http.ListenAndServe is spinning up over the server
	// so if anything bad happens, log.Fatal will log
	// to check the library doc: hit go doc http.HandleFunc
}

// output:
// Server is running on port: 8080
// if we open localhost:8080, that will open a empty browser
// On terminal we can see next output as: `Home` (once we hit to port then HandlFunc call / with home method)
```

<u>todos.html:</u>

```html
<!DOCTYPE html>
<html>
<style>
  
  * {
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-weight: 100;
    letter-spacing: 1px;
  }
  body {
    background-color: #f3f3f3;
    padding: 25px;
    text-align: center;
  }
  form {
    background: #797979;
    margin: 0 auto 50px;
    padding: 25px;
    width: 500px;
  }
  input {
    border: none;
    display: block;
    font-size: 16px;
    margin: 25px auto;
    outline: none;
    padding: 10px;
    width: 100%;
  }
  input[type="submit"] {
    background: #eaeaea; 
  }
  input[type="submit"]:hover {
    background: white;
    cursor: pointer;
  }
  textarea {
    border: none;
    display: block;
    font-size: 16px;
    margin: 0 auto 25px;
    outline: none;
    padding: 10px;
    width: 100%;
  }
  .list {
    border-top: 1px solid #797979;
    padding: 10px;
  }
  .list div {
    background: #fff;
    display: inline-block;
    height: 200px;
    margin: 10px;
    overflow-y: scroll;
    padding: 10px 25px;
    width: 400px;
  }
  .list div p:first-child {
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
</style>
<head>
<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
<title>{{.PageTitle}}</title>
</head>

<script type='text/javascript'>
</script>
<body>
    <h1>All Todos</h1>
    <form action="/add-todo/" method="post">
      <input type="text" placeholder="Title" name="title">
      <textarea placeholder="Details..." name="content"></textarea>
      <input type="submit">
    </form>
    <div class="list">
      <!-- if block, not means if soemthing doesn't exist, and variable as PageTodos(. is telling its a variable) -->
    {{if not .PageTodos }}
    <!-- So, if there is no todos  -->
      <h2>No Todos</h2>
    {{else}}
    <!-- iterating over the PageTodos using range keyword -->
      {{range .PageTodos}}
      <div>
        <p>{{.Title}}</p>
        <p>{{.Content}}</p>
      </div>
      {{end}}
    {{end}}
    </div>
</body>
</html>
```

**Handling Data to HTML and JS and submitting form:**

```go
package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Home")
}
// creating mock for todos
type Todo struct {
	Title, Content string
}

// pageVariables 
type pageVariables struct {
	PageTitle string
	PageTodos []Todo
}

var todos []Todo

func getTodos(w http.ResponseWriter, r *http.Request) {
	pageVariables := pageVariables{
		PageTitle: "get todo",
		PageTodos:	todos,
	}

	t, err := template.ParseFiles("todos.html")
	
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		log.Print("template pasrsing error", err)
	}
	err = t.Execute(w, pageVariables)
}

func addTodo(w http.ResponseWriter, r *http.Request) {
	// submit the req to AddTodo list, so its sending additional data to http req
	// grab the req
	err := r.ParseForm() //ParseForm returns errror
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		log.Print("request pasrsing error", err)
	}

	todo := Todo {
		Title: r.FormValue("title"), //passing title, because in html, form name for the inout is "title"
		Content: r.FormValue("content"),
	}

	todos = append(todos, todo)
	log.Print(todos)
	// redirect takes writer, response, and where we want to go
	http.Redirect(w,r, "/todos", http.StatusSeeOther)

}

func main() {
	http.HandleFunc("/", home) 
	http.HandleFunc("/todos/", getTodos)
	http.HandleFunc("/add-todo/", addTodo)
	fmt.Println("Server is running on port: 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))

}
```

<u>Output:</u>
<ImgPost src={TodoOutput} alt='todo output' width={50} margin="2rem 0" />

## 2️⃣ External API

<ImgPost src={ExternalAPI} alt='external api in go' />

We will be going to hit an external api and then parse that request using couple of JSON.

<u>main.go:</u>

```go
package main

import (
	"fmt"
	"log"
	"net/http"
	"io/ioutil"
	"encoding/json"
)

// BaseURL is the base endpoint for the star wars API
const BaseURL = "https://swapi.dev/api/"

// Planet Type
type Planet struct {
	Name string `json:"name"`
	Population string `json:"population"`
	Terrain string `json:"terrain"`
}

// Person Type 
type Person struct {
	Name string `json:"name"`
	HomeworldURL string `json:"homeworld"`
	Homeworld Planet // planet struct
}

// allPeople type
type AllPeople struct {
	// People []Person
	// In json there is nothing called Person, So we need to take what's in json:
	// results is there in JSON output, so I am getting by using json library 
	People []Person `json:"results"`
}

func getPeople(w http.ResponseWriter, r *http.Request) {
	// fmt.Fprint(w, "Getting People")
	// handle the get req for enc point
	// http.Get return two things; 1=> response, 2 => error
	res, err := http.Get(BaseURL + "people")

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		log.Print("Failed to req star wars")
	}
	fmt.Println(res) // will give 200 status
	// ReadAll will take which we need to parse
	bytes, err := ioutil.ReadAll(res.Body) 

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		log.Print("Failed to parse req data")
	}
	// fmt.Println(data) // we will get the numbers of array which will be in number, that we need to parse for string, which we will use
	// json.Unmarshal, is parse encoded data and then store the result. It will take two things:
	// 1=> what needs to parse(here, which will be big array of bytes), 2=> variable where we are going to put the reuslt
	
	var people AllPeople
	fmt.Println(string(bytes))
	if err := json.Unmarshal(bytes, &people); err  != nil {
		fmt.Println("error pasring json", err)
	}

	fmt.Println(people)
}

func main() {
	http.HandleFunc("/people", getPeople)
	fmt.Println("Server is running on 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
```

Above snippet, hitting <mark>swapi</mark> API which return JSON with all data.

There is one more API which we need to call for each planet using the same API, which is coming empty object for now. Because there is separate API to make a call.

In below snippet will do the same:

```go
// continue with above code
// getting people for the iteration, and the only struct which we care is People, which has lust of people 
// create a function outside getPeople Function
func (p *Person) getHomeworld() {
	res, err := http.Get(p.HomeworldURL)
	if err != nil {
		log.Print("err fetching homworld", err)
	}
	var bytes []byte
	if bytes, err = ioutil.ReadAll(res.Body); err != nil {
		log.Print("errreading resp= from homworld", err)
	}

	json.Unmarshal(bytes, &p.Homeworld)
}

// inside getPeople function
fmt.Println(people)

for _, pers := range people.People {
		pers.getHomeworld()
		fmt.Println(pers) // output in JSON all list
	}
```

## 3️⃣ ConCurrency

<ImgPost src={Concurrency} alt='concurrency in go' width={60} />

Go supports **Multitasking** using tool called **GoRoutine**.

<p><mark>GoRoutine</mark> is a super lightweight thread managed by the Go runtime that allows Go to asynchronously fire off a lot of different tasks at the same time.</p>

<ImgPost src={ConcurrencyB} alt='concurrency in go' width={60} />

**To implement this:**

You simply put keyword Go before the function you would like to execute. And Go behind the scene knows that it's going to spin up a separate thread to make something happen. So, Go can continue the execution with the rest of program while the slow thing happens.

```go
package main

import (
	"fmt"
	"time"
)

func say(s string) {
	for i := 0; i < 3; i++ {
		fmt.Println(s)
		time.Sleep(time.Millisecond * 300)
	}
}

func main() {
	say("Hello")
	say("There")
}

// Output:
// Hello
// Hello
// Hello
// There
// There
// There
```

But if you write `Go` to call function execution, the output will be little bit quicker

```go
func main() {
	go say("Hello")
	say("There")
}

// Output:
// There
// Hello
// Hello
// There
// Hello
// There
```

<p><mark>GoRoutine</mark> allow the code to be non-blocking. So, if every single function is set to GoRoutine than nothing is going to execute before the GoRoutine has finished execution.</p>

```go
func main() {
	go say("Hello")
	go say("There")
}

// Output: nothing will print here
```

So, it's like spinning another execution and then I execute, And it happens again and again until the GoRoutine is not stopped. So in above example, there is nothing to run for execution.

### Sync ␖

There is library called **sync**, which is going to be a way for synchronise all of our asynchronous functionality.

```go
package main

import (
	"fmt"
	"time"
	"sync"
)

// waitGroup variable
var wg sync.WaitGroup

func printStuff() {
	// it tells waitGroup, things are done.
	defer wg.Done()
	for i := 0; i <3 ; i++ {
		fmt.Println(i)
		time.Sleep(time.Millisecond * 300)
	}
 }

func main() {
	// (wg)waitGroup will take Add function and it will add behind the scene to a queue 
	wg.Add(1)
	// Run the code , how many threads we have
	go printStuff()
	// here, it will tell what's we are waiting for
	wg.Wait()
}
// output:
// we dont see anything print out, GoRouting is spinning up a thread, nothing's blocking then GO shut down
```

## 4️⃣ Channel

<ImgPost src={Channel} alt='channel in go' width={70} margin='2rem 0' />

There is important topic called `channel`. In the above snippet of `sync`, *printStuff* function doesn't return anything. But in routine, we wanted GoRoutines should be able to communicate with each other, To do that we would use channel here.

Channel allows us to open up a channel communication between two different GoRoutines, Pass information back and forth and do a little bit more complex logic.

## Reference 🧐

1. <LinkPost href='https://frontendmasters.com/courses/go-for-js-devs/' name='Go for JavaScript Developers(Frontend Master)' />
2. <LinkPost href='https://golang.org/doc/' name='Docs for GO' />
3. <LinkPost href='https://jordanorelli.com/post/32665860244/how-to-use-interfaces-in-go' name='How to use Interfaces in GO' />
4. <LinkPost href='http://shop.oreilly.com/product/0636920046516.do' name='Books related to GO' />
5. <LinkPost href='https://play.golang.org/' name='Go Sandbox' />
6. <LinkPost href='https://www.youtube.com/playlist?list=PLQVvvaa0QuDeF3hP0wQoSxpkqgRcgxMqX' name='Youtube' />


In this blog we specially focused on connection between web and server, Integrating external API's, concurrency using GoRoutine and channels.

After writing these four blogs, I feel GO is really an awesome language which I learnt after javascript 😉, it's easy to learn and scalable and looking forward to contribute more into this at my work.

I hope you found this blog helpful, If you have any question please reach out to me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋