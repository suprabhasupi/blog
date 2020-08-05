---
title: Basics Of GoLang (part-3)
slug: /19-basics-of-golang-part-3
date: 2020-05-28
desc: Understand Pointers, error handling, methods, interface in GO
# Old URL
# Minute Read
cover:
  img: ../../../photos/19-basics-of-golang-part-3.png
banner: ../../banners/19-basics-of-golang-part-3.png
tags:
  - GO
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import Pointers from './1-pointers.png'
import ErrorHandling from './2-error.png'
import PanicDefer from './3-panic-defer.png'
import Method from './4-method.png'
import Interface from './5-interface.png'

We covered many topics in <LinkPost href='/17-basics-of-golang-part-1' name='Part-1' /> and <LinkPost href='/18-basics-of-golang-part-2' name='Part-2' />. If you have not read those parts, I would recommend to check it out first as creating variable, all control statements and data types are added into the first blog for <LinkPost href='/17-basics-of-golang-part-1' name='Basics Of GoLang Part-1' />, and Functions, Array, Toolkit, Packages, Unit Testing and Structs has explained in <LinkPost href='/18-basics-of-golang-part-2' name='Basics Of GoLang Part-2' />.

We will continue with the following topics in this section:

1. Pointers
2. Error Handling
3. Methods
4. Interface

## 1️⃣ Pointers ►
<ImgPost src={Pointers} alt='pointers in go' width={60} />

A variable that holds into the memory location of that variable instead of copy its value.

To do that we need to use **Pointer**.

1. Pointer type definitions are indicated with a * next to the type name

    Indicate that the variable will point to a memory location.
    `var namePointer *string`

2. Pointer variable values are visible with a * next to the variable name

    `var nameValue = *namePointer`

3. To read through a variable to see the pointer address use a & next to the pointer variable name

    `var nameAddress = &namePointer`

```go
package main
import "fmt"
func main() {
	var name string
	var namePointer *string // actually store a memory location into this name pointer variable noyt just name of string

	fmt.Println(name) // ''
	fmt.Println(namePointer) // <nil> => nil means, we are expecting actual address memory not just string ""
}
```

Now, when you assign *name* and *namePointer* to some string value then *namePointer* will throw an error.

<u>Example:</u>

```go
func main() {
	var name string
	var namePointer *string // actually store a memory location into this name pointer variable noyt just name of string
	
	name  = "Lisa"
	namePointer = "Ake"	 // this will throw an error, cannot use 'Ake' as type *string assignment
}
```

To use the namePointer as string we need to add **&** to the variable,

```go
func main() {
	var name string
	var namePointer *string // actually store a memory location into this name pointer variable noyt just name of string
	
	name  = "Lisa"
	namePointer = &name	 
	// name is Lisa, and namePointer is like go get the address , read through the pointer,
	// to find the address and give back what its look like

	fmt.Println(name) // Lisa
	fmt.Println(namePointer) // 0xc00010a040   =>(its giving the address of the value)
}
```

If you want to find the variable through the address, you will be going to dereference the variable:

```go
func main() {
	var name string
	var namePointer *string // actually store a memory location into this name pointer variable noyt just name of string
	
	name  = "Lisa"
	namePointer = &name	 
	// we can get the variable by address
	var nameValue = *namePointer

	fmt.Println(name) // Lisa
	fmt.Println(namePointer) // 0xc00010a040   =>(its giving the address of the value)
	
	fmt.Println(nameValue) // Lisa
}
```

### <mark>Pass By Reference</mark>

**How do you modify the variable which you can't change directly❓🤔**

We will Understand the concept by using examples:

```go
import (
	"fmt"
	"strings"
)

func changeName(n string) {
	n = strings.ToUpper(n)
}

func main() {
	name := 'Lisa'
	changeName(name)
	fmt.Println(name) // Lisa 
}
```

The value is still same, you don't want to copy the value, you want actual address. So, the symbol for that was an address using `*` and `&` .

```go
import (
	"fmt"
	"strings"
)

// expecting type of variable to be a pointer, to be an address
func changeName(n *string) {
	// need to deference the n,so I really want to modify the actual value that lives here
	*n = strings.ToUpper(*n)
}

func main() {
	name := 'Lisa'
	changeName(&name)
	fmt.Println(name) // LISA 
}
```

Example with both `Struct` and `Pointers`:

Only in **struct**, without having dereference or adding ampersand (&) , you will actually get the address. And you can modify value in memory without having to be more explicit.

```go
// coordinates represents lat and long(call by value)
type Coordinates struct {
	X, Y float64
}

var c = Coordinates{X: 10, Y : 50}

func main() {
	coordinateMemoryAddress := c
	coordinateMemoryAddress.X = 200
	fmt.Println(coordinateMemoryAddress) // {200 50}
}
```

Example for changing email in `User struct`:

```go
type User struct {
	ID                         int
	FirstName, LastName, Email string
}

var u = User{
	ID:        1,
	FirstName: "lis",
	LastName:  "jha",
	Email:     "li@gmail.com",
}

func updateEmail(u *User) {
	u.Email = "Lisa@gmail.com"
	fmt.Println(u.Email)
}

func main() {
	// given pointer user in updateEmail arguments, so we can expect regular struct and we have give `&` for address
	updateEmail(&u)
	fmt.Println("u", u)
}
```

## 2️⃣ Error Handling 🛑

<ImgPost src={ErrorHandling} alt='error handling in Go' width={50} /> 

It's particularly unique functions in GO, because Go is treating every error as a value rather than exception.

There are 2 kind of errors:

1. <mark>Error</mark>

    It indicates that something bad has happened to application like something went wrong. But it might be possible that program does not stop, you need to handle this. i.e. A function that intentionally returns an error if something goes wrong.

2. <mark>Panic</mark>

    It happens at run time and it's something that was fatal to program and program stops execution like, trying to hit an endpoint that doesn't exist.

<u>Error Types:</u>

```go
type error interface (
	Error() string
)
```

Below snippet for `error`, will show how the error comes up:

```go
import (
	"errors"
	"fmt"
)

func isGreaterThanTen(num int) error {
	if num < 10 {
		return errors.New("something bad happened")
	}
	return nil
}

func main() {
	num := 9
	err := isGreaterThanTen(num)
	if err != nil {
		fmt.Println(fmt.Errorf("%d is NOT GREATER THAN TEN", num))
	}
	fmt.Println(err) // something bad happened
}
```

Below snippet for `panic`, throw the error and stops execution of program.

```go
func main() {
	num := 9
	err := isGreaterThanTen(num)
	if err != nil {
		panic(err) //panic: something bad happened
	}
	fmt.Println(err)
}
```

Below snippet for `log`, which is going to log to wherever you are keeping track of your error logs.

```go
func main() {
	num := 9
	err := isGreaterThanTen(num)
	if err != nil {
		log.FatalIn(err) // 2020/05/06 16:20:20 something bad happened
	}
	fmt.Println(err)
}
```

Below snippet, you can also return `error` as type:

```go
func openFile() error { // it returns an error type
	// f -> filename, err -> error
	// open the file
	f, err := os.Open("missingFile.txt") // os is Operating Sysytem
	if err != nil {
		return err
	}
	// close the file
	defer f.Close()
	return nil
}

func main() {
	num := 9
	err := isGreaterThanTen(num)
	if err != nil {
		fmt.Println(fmt.Errorf("%d is NOT GREATER THAN TEN", num))
	}
	fmt.Println(err)
	// as we can not have two same variable name as err, so changing it to 
	someErr := openFile()
	if someErr != nil {
		fmt.Println(fmt.Errorf("%v", err))
	}
}
```

You can use shorthand syntax as shown in below snippet, where you can use the `err` variable for the same function:

```go
func openFile() error { // it returns an error type
	// f -> filename, err -> error
	// open the file
	f, err := os.Open("missingFile.txt") // os is Operating Sysytem
	if err != nil {
		return err
	}
	// close the file
	defer f.Close()
	return nil
}

func main() {
	num := 9
	if err := isGreaterThanTen(num); err != nil {
		fmt.Println(fmt.Errorf("%d is NOT GREATER THAN TEN", num))
	}

	if err := openFile(); someErr != nil {
		fmt.Println(fmt.Errorf("%v", err))
	}
```

## Panic & Defer 😨
<ImgPost src={PanicDefer} alt='panic and defer in go' width={50} />

<p><mark>defer</mark> statements delay the execution of the function or method or an anonymous method until the nearby functions returns.</p>

Taking an example of Opening and closing a file.

If the file is successfully opened, we can call `defer` and then f.Close 

`defer f.Close()`

In Panic, we can throw the error and stop exection of the program.

`panic(err.Error())`

<u>Defer Example:</u>

```go
package main

import (
	"fmt"
)

func doThings() {
	defer fmt.Println("First Line but do this last!")
	defer fmt.Println("Do this second to last!")
	fmt.Println("Things And Stuff should happen first")
}

func main() {
	doThings()
}

// Output:
// Things And Stuff should happen first
// Do this second to last!
// First Line but do this last!
```

In above snippet, we can see the order of the execution is different.

**NOTE**: Defer is last in first out(LIFO) type of structure.

### Recover 😇

<p><mark>Recover</mark> tells <b>GO</b>, what to do when panic happens, and return what was passed to panic.</p>

Recover must be paired with `defer`, which will fire even after a panic. So, usually after `panic` program, execution failed. But by pairing `defer` and `recover` you can do something after panic as well.

```go
package main

import (
	"fmt"
)

func handlePanic() string {
	return "HANDLING THE PANIC"
}

func recoverFromPanic() {
	// recover() will only return a value if there has been a panic
	if r := recover(); r != nil {
		fmt.Println("We panicked but everything is fine.")
		fmt.Println("Panic instructions received:", r)
	}
}

func doThings() {
	defer recoverFromPanic()
	for i := 0; i < 5; i++ {
		fmt.Println(i)
		if i == 2 {
			panic(handlePanic())
		}
	}
}

func main() {
	doThings()
}

// Output:
// 0
// 1
// 2
// We panicked but everything is fine.
// Panic instructions received: HANDLING THE PANIC
```

## 3️⃣ Methods 😅

<ImgPost src={Method} alt="method in go" width={60} />

The difference between **methods & function** is, instead of accepting argument as struct , you are calling a method on an instance of the struct.

```go
// Function 
func describeUser(u *User) string { // we are passing struct, func taking argument u of a User type 
	desc := fmt.Sprintf("Name: %s %s, Email: %s", u.firstName, u.lastName, u.email)
	return desc
}

//Method 
// (u *User) => what the method is going to be called on, so what's the receiving struct of method
func (u *User) describe() string {
	desc := fmt.Sprintf("Name: %s %s, Email: %s", u.firstName, u.lastName, u.email)
	return desc
}

func main() {
	u := User{ID: 1, firstName: "suprabha", lastName: "s", email: "supi@gmail.com"}
	// function call
	desc := describeUser(user)
	
	// method call
	// calling a describe method on an instance of user
	desc := user.describe()
	fmt.Println(desc)
}
```

Method is going to be particularly concerned about state and what kind of state or information that struct is getting passed in with.

## 4️⃣ Interface 💁‍♀️

<ImgPost src={Interface} alt='interface in go' width={50} />

**Interface** are complex aspect of code but they are super powerful and make sure everything is readable.

Interface is a list of methods that are going to describe behaviour of particular types. It describe the kind of behaviour our types can execute.

<u>Method Example:</u>

```go
func (u *User) describe() string {
	desc := fmt.Sprintf("Name: %s %s, Email: %s", u.firstName, u.lastName, u.email)
	return desc
}
```

```go
// describer prints out enitity description
type Describer interface {
	describe() string
}

func describeHumand(human Describer) string {
	// return it, whatever struct is passed is in part our interface describer
	return human.describe()
}

func main() {
	u := User{ID: 1, firstName: "suprabha", lastName: "s", email: "supi@gmail.com"}
	userDescWithInterface := describeHumand(&u)

	fmt.Println(userDescWithInterface) //
}
```

In above snippet, If you are calling describe function then it's also getting called Describer interface because we called describe method in <mark>Describer Interface</mark>.

Interface reduces a lot of duplication in code, it also encapsulates all of its behaviour and attributes.

### Empty Interface ∅

Its written as `interface {}`, Sometime you don't know whats coming in, whether its user or group. You don't know the key value pairs on a map(object) but you know that you accept some type of map structure.

`Empty interface` specifies zero methods. It can be used to hold a value of any type.

Its like `any` from typeScript 😜

```go
type User struct {}
type Admin struct {}
type Parent struct {}

interface {}
var people map[string]interface{}

people = map[string]interface {
	"user": User,
	"admin": Admin,
	"parent": Parent
}
```

In this section, we learnt how to use **pointers** and struct with pointers, **Error handling** has two types panic and Error also explored Panic and Defer concept, **Methods** which get called on an instance of the struct and **Interface** helps code to be more readable.

<p><LinkPost href='/21-basics-of-golang-part-4' name='Next section' /> we are going to discuss following topics: Web Servers, External API, Concurrency and Channel.</p>

I hope you found this blog helpful, If you have any question please reach out to me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋


