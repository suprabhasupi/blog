---
title: Basics Of GoLang (part-2)
slug: /18-basics-of-golang-part-2
date: 2020-05-25
desc: Understand Functions, array, toolkit, packages, unit testing, structs in GO
# Old URL
# Minute Read
cover:
  img: ../../../photos/18-basics-of-golang-part-2.png
banner: ../../banners/18-basics-of-golang-part-2.png
tags:
  - GO
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import FunctionImg from './1-function.png'
import Toolkit from './2-toolkit.png'
import Packages from './3-packages.png'
import UnitTesting from './4-unit-testing.png'
import Structs from './5-structs.jpg'

<p><span class='first-letter'>W</span>e covered basics concept in <LinkPost href='/17-basics-of-golang-part-1' name='Part-1' />. If you have not read the <LinkPost href='/17-basics-of-golang-part-1' name='Part-1' />, I would recommend to check it out first as creating variable, all control statements and data types are added into the previous part of <LinkPost href='/17-basics-of-golang-part-1' name='Basics Of GoLang Part-1' /></p>

Now we will continue with the following topics:

1. Functions
2. Array
3. ToolKit
4. Packages
5. Unit Testing
6. Structs

## 1️⃣ Functions ⨐

<ImgPost src={FunctionImg} alt='Go Function' width={50} />

In `GO` Function is also same as JS function, which return value. 

```go
func printAge(age int) int {
	return age
}
```

In above snippet, function expect arguments, and on the right side we have given int, i.e. we are expecting result should be in integer value.

We can also expect two value to be returned by name :

```go
func printAge() (sameAge int, myAge int) {
	sameAge =20
	myAge = 21
	return 
}

func main() {
	fmt.Println(printAge()) // 20, 21
	// we can also aggigned in variable at the same time
	// age1, age2 := printAge()
}
```

If we are not sure how may integers you are passing in argument. You just know, you want to do something with these values, then in that case use spread(`...`) operator:

```go
func printAge(ages ...int) int { 
    // first arguments represnt collection of value which are passing and right indicates ..., its gonna be some unknown quantity
	// as ages is now numbers of quantity wo will do for loop
	// here we are modifying the value, and we know what we are returning so , I have removed int from right side.
	for _, value := range ages {
		fmt.Println(value)	
	}
    return len(ages)
}

func main() {
	printAge(12,14,16,26) // 20, 21
}
```

**Another example:**

```go
package main
import "fmt"
func average (numbers ...float64) float64{
	total := 0.0
	for _,value := range numbers {
		total += value
	}
	return total / float64(len(numbers) )
}

func main() {
	fmt.Println(average(10,5,7))
}
```

## 2️⃣ ARRAY ［ ］

In *JavaScript*, we used array as `[], [1,2,’hey’, true]`

In **GO**, 

```go
var scores [5]float64
//this will only contain float length of 5 as 
[float64, float64, float64, float64, float64]
```

Length is also part of the type definition.

```go
[5]float 64 ≠ [6]float64 // it has two different type signature and memory allocation
```

**How we define values in Array❓ 🤔**

```go
var score [5]float64 = [5]float64{9, 1.6, 3, 2.2, 4.5}
// each of the new value withing curly braces, the comma separated values with those braces will be allocated to wach index
//shorthand syntax
scores := [5]float64{9, 1.6, 3, 2.2, 4.5}
// ..., withing higher brackets can replace that explicit number
scores := [...]float64{9, 1.6, 3, 2.2, 4.5}
```

### A.  <mark>Make</mark>

**Make** initialises and allocates space in memory for a slice, map or channel.

```go
// buggy code
  var myArray [5]int
	var mySlice []int

	myArray[0] = 1
	mySlice[0] = 1

	fmt.Println(myArray)
    fmt.Println(mySlice) 
    // it will throw error as, we haven't given ane length while initialization
	// error saying: index out of range [0] with length 0
```

So, we can give length via `make` .

```go
var mySlice []int = make([]int,5)
```

`make` can take upto three arguments, 

1. array with set of  type
2. length
3. max capacity which array can hold

We use cap to find the the capacity of an array.

```go
var mySlice []int = make([]int,5,10)
fmt.Println(cap(mySlice)) // 10 
```

**How to slice from an array❓ 🤔**

```go
fruitArray := [5]string{"banana", "pear", "apple", "kumquat", "peach"}

var splicedFruit []string = fruitArray[1:3] // ==> ["pear", "apple",]

	fmt.Println(len(splicedFruit)) // 2
	fmt.Println(cap(splicedFruit)) // 4, because each slice is associated with  its underlying array it has to be allocated some in memory
	//	So, the slice works form 1st, if we start from "pear" the count will be 4
 
```

`Cap` value is starting from 1st index in above example as its slicing from 1st array, and taking whole array so length is 4.

### B.  <mark>Append</mark> ✚

**How to append data into array❓ 🤔**

```go
fruitArray := [5]string{"banana", "pear", "apple", "kumquat", "peach"}

var splicedFruit []string = fruitArray[1:3] // ==> ["pear", "apple"]

fruitToAdd := append(splicedFruit, "mango", "grapes")
fmt.Println(fruitToAdd) //["pear", "apple", "mango", "grapes"]
fmt.Println(len(fruitToAdd)) // 4
fmt.Println(cap(fruitToAdd)) // 4
```

Now, what if we append more fruits to the slicedFruit, more then the capacity. (as capacity was 4 and we have added 4 element into an array)

```go
fruitArray := [5]string{"banana", "pear", "apple", "kumquat", "peach"}

var splicedFruit []string = fruitArray[1:3] // ==> ["pear", "apple"]

fruitToAdd := append(splicedFruit, "mango", "grapes", "orange")
fmt.Println(fruitToAdd) //["pear", "apple", "mango", "grapes", "orange"]
fmt.Println(len(fruitToAdd)) // 5
fmt.Println(cap(fruitToAdd)) // 8
```

So, First the capacity was 4, but when we inserted more items more than its capacity then GO doubled the capacity from 4 to 8.

### C.  <mark>Map</mark> ➰

`Map` in **GO** is similar to JS Object, an Object shape with key value pairs.

The value in the []brackets represent type of the key and value in right side represent type of the value.

```go
var userEmails map[int] string = make(map[int]string) // key in int and value in string

userEmails[1] = "test1@gmail.com"
userEmails[2] = "test2@gmail.com"

fmt.Println(userEmails) // map[1:test1@gmail.com 2:test2@gmail.com]
```

`Shorthand syntax for above example:`

```go
userEmails := map[int]string{
	1: "test1@gmail.com",
	2: "test2@gmail.com",
}
fmt.Println(userEmails) // [1:test1@gmail.com 2:test2@gmail.com]
```

Similarly, if we want to mutate the 1st element:

```go
userEmails[1] = "test3@gmail.com" // [1:test3@gmail.com 2:test2@gmail.com]
```

**How to verify element existing in array❓ 🤔**

Even if the value doesn’t exist, Go won’t throw any error.

```go
userEmails := map[int]string{
	1: "test1@gmail.com",
	2: "test2@gmail.com",
}
email1, ok := userEmails[1] 
fmt.Println("Email:", email1, "Present?", ok) // test1@gmail.com true

email2, ok := userEmails[3] 
fmt.Println("Email:", email2, "Present?", ok) //  False
```

Above example shows how can we verified any element exist in an array or not. So, the second argument in `(email1, ok)`, which is boolean that indicated whether it’s present or not.

combine the above syntax with for loop:

```go
if _, ok := userEmails[4]; ok {
	fmt.Println("Emails exists")
} else {
	fmt.Println("Emails doesn't exists")
}
// email, ok will get assigned by lookup of userEmails[4] variable.
// So if its ok, then the condition will work else go to else statement 
```

### C.  <mark>Delete</mark> ␡

<p> <b>Delete</b> will take two arguments</p>

1. From map where you want to delete
2. Key which we are looking to delete

```go
delete(userEmails, 2) // will delete the 2nd key
fmt.Println(userEmails) // [1: test3@gmail.com]
```

## 3️⃣ ToolKit 🧰

<ImgPost src={Toolkit} alt='toolkit in go' width={50} margin="2rem 0" />

<b>Tools and Commands:</b>

1. GO run is building and compiling the code behind the scenes
    ```sh
    $ go run main.go
    ```
2. GO build will just compile into binary that we can test and deploy
    ```sh
    $ go build
    ```
3. If we have any third party libraries, will make sure that GO has access to code
    ```sh
    $ go install
    ```
4. `fmt` command is from fmt library. GO `fmt` is actually going to clean up lot of spacing
    ```sh
    $ go fmt main.go
    ```
5. To know what are the packages has been installed to directory we can check via GO list
    ```sh
    $ go list
    ```

6. GO vet will show error if we have defined the variable but not used
    ```sh
    $ go vet
    ```
7.  It will split out the local documentation and function signature looks like and additional details
    ```sh
    $ go doc fmt.Println
    ```
8. Go get is similar to NPM install, its going to fetch a third party package and installed it locally with rest of GO directories
    ```sh
    $ go get golang.org/x/lint/golint
    ```
9. If we save or commit the code then it make sure that GO code is up to par
    ```sh
    $ golint
    ```

## 4️⃣ Packages 📦

<ImgPost src={Packages} alt='go packages' width={70} />

Check how can we create our own package.

To make any functions exportable in GO, Use capital letter for function name.

Go has a convention that anything exported needs to be commented above of function name.

<u>utils/maths.go:</u>

```go
package utils
import "fmt"
func printNum(num int) {
	fmt.Println("current Num:", num)
}
// need to add comment here, as Add function in exportable
// Add add mutiple numbers
func Add(num ...int) int {
	total := 0
	for _,v := range nums {
		printNum(v)
		total += v
	}
	return total
}
```

In above snippet, added the `Add` function, which can be used many places.

Now, how the local package can be used into the code.

<u>packages.go</u>

```go
package main
import ("fmt"
	    "root-folder-path/where-the-file-present/utils"
		)

func calculateNumber() {
	totalValue := utils.Add(1,2,3,4)
	return totalValue
}

func main() {
	total := calculateNumber()
	fmt.Println(total)
}
```

In above snippet, we have imported “root-folder-path/where-the-file-present/utils” where utils is name of the folder which has utils Go files. This file contains exported methods for example in above case we are using Add method from math.go file.

```go
import ("fmt"
		math "root-folder-path/where-the-file-present/utils"
		)
```

And now we use math instead of utils.

## 5️⃣ Unit Testing 🧪
<ImgPost src={UnitTesting} alt='unit testing Go' width={60} />

Testing framework is inbuilt in GO.

The file structure should be like, fileName: `fileName.go`, the Test fileName should be `fileName_test.go`

To run the code, 

```sh
$ go test
```

<u>average_test.go:</u>

```go
// package name hsould match with actual package name which we are working on
package utils
// importing from buiyl-in source code from go 
import "testing"
// func name should start from T test and capital name of file A average, which we are testing
// argument which passing as pointer and type is testing.T which is coming from testing library
func TestAverage(t *testing.T) {
	// asserting here
	expected := 4
	actual := utils.average(1,2,3)
}

if actual != expected {
	t.Error("Average incorrect! Expected %d, actual %d", expected, actual)
}
```

## 6️⃣ Structs ⛩

<ImgPost src={Structs} alt='structs in go' width={60} />

A `struct` is going to define the attributes that live on particular type that we define ourselves.

Types are `string, int, booleans`, etc

<u>Example:</u>

```go
type User struct {
	ID        int
	firstName string
	lastName  string
	email     string
}

// similarly,
type User struct {
	ID                         int
	firstName, lastName, email string
}
```

Then, to instantiate an instance of the struct type:

```go
func main() {
	u := User{ID: 1, firstName: "suprabha", lastName: "s", email: "supi@gmail.com"}
	fmt.Println(u) //{1 suprabh s supi@gmail.com}
}
```

In above example, If the attributes in the User struct has been all capitalised as 

```go
// User is a user type
type User struct {
	ID        int
	FirstName string
	LastName  string
	Email     string
}
```

In above snippet, struct and and all struct attribute are capitalise, so only these attributes are exportable or accessed from the instance of the struct.

<mark>Custom Types:</mark>

Below if the struct type for multiple users, example admin, user, new user etc.

```go
type User struct {
	ID                         int
	firstName, lastName, email string
}

// Group represents a set of users
type Group struct {
	role            string
	users           []User // we can use User as a type name
	newestUser      User
	spaceaAvailable bool
}

func describeUser(u User) string { // we are passing struct, func taking argument u of a User type 
	desc := fmt.Sprintf("Name: %s %s, Email: %s", u.firstName, u.lastName, u.email)
	return desc
}

func describeGroup(g Group) string {
	desc := fmt.Sprintf("This User group has %d. The new user %s %s. Accepting 
		new users: %t", len(g.users), g.newestUser.firstName, g.newestUser.lastName, g.spaceaAvailable)
	return desc
}

func main() {
	u1 := User{ID: 1, firstName: "suprabha", lastName: "s", email: "supi@gmail.com"}

	u2 := User{ID: 2, firstName: "suprabha1", lastName: "s1", email: "supi1@gmail.com"}

	g := Group{
		role: "admin",
		users: []User{u1, u2},
		newestUser: u2,
		spaceaAvailable: true
	}

fmt.Println(describeUser(u1)) //Name: suprabha s, Email: supi@gmail.com
fmt.Println(describeGroup(g)) //This User group has 2. The new user suprabha1 s1. Accepting new users: true
}
```

In this section, we learnt **Functions**, **Array** and its all properties as make, map, append, delete, Go **ToolKit** with all the commands, **Packages** and custom packages, **Unit Testing** and **Structs** as instance.

<p><LinkPost href='/19-basics-of-golang-part-3' name='Next section' /> we are going to discuss following topics: Pointers, Error Handling, Methods and Interface.</p>

I hope you found this blog helpful, If you have any question please reach out to me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋


