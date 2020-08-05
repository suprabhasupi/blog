---
title: Basics Of GoLang (part-1)
slug: /17-basics-of-golang-part-1
date: 2020-05-20
desc: Understand Setup, Printing, types, variables, control statement in GO
# Old URL
# Minute Read
cover:
  img: ../../../photos/17-basics-of-golang-part-1.png
banner: ../../banners/17-basics-of-golang-part-1.png
tags:
  - GO
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import TypingGo from './1.gif'
import DataTypes from './2-data-types.png'
import Variables from './3-variables.png'
import ControlStatement from './4-control-statement.png'
import Switch from './5-switch.jpg'
import ForLoop from './6-for.png'

<p><span class='first-letter'>I</span> am working at <LinkPost href='https://www.gojek.com/' name='Gojek' /> as a Frontend Engineer, and using GO for backend and wanted to learn something new, So started looking forward to exploring some new technology.</p>

### Why I picked GO❓ 🤔

It’s because I wanted to learn something in backend by which I can build web apps end to end. In **GO** we can do anything, it's simple to learn and very semantic. Also, I can contribute in my code base 😋

**GO** is an open source programming language that makes it easy to build simple, reliable, and efficient software.

## Features: 🤓

1. Fast compile times
2. Ease of development
3. Fast execution

<ImgPost src={TypingGo} alt='GO typing' width={50} />

This blog contains content only for beginners, as it has basic concepts of **GO**. I have separated this course in few parts:

These are the topics which I'm going to cover in the first part:

1. Go Setup
2. Printing 
3. Types
4. Variables
5. Control Statement

## 1️⃣ Go Setup 🖥

Install <LinkPost href='https://golang.org/dl/' name='GO' />,

After installing GO into the system, verify GO was installed successfully

**We can check path of `GO` by:**

```sh
$ which go

/usr/local/go/bin/go
```

**Add these to your .bash_profile:**

```sh
export GOPATH=#HOME
export GOBIN=#GOPATH/bin
export PATH=$PATH:$GOBIN
```

Verify the above changes by:

```sh
$ echo $PATH

/Users/suprabha/.nvm/versions/node/v10.15.3/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/go/bin:/usr/local/go/bin
```

**Check version:**

```sh
$ go version

go version go1.12.7 darwin/amd64
```

Few weird parts in compared to JS are listed below: 😮

1. Loop: `do while` loop doesn’t exist in **GO**.
2. **What fmt package return?**
	=> It returns number of bytes and an error.
3. **Error handling**
	It's explicit. We have to do it manually. Error are like value, we have to decide what we have to do with that value.
4. There should be only one main function, which should have one main func function only.
5. **GO** is multi threaded.
6. For experiment and printing, you can use this <LinkPost href='https://play.golang.org/' name='link' />

## 2️⃣ Printing 🖨

**Print**: Printing to STDOUT

The most common use of formatting is to print to a terminal window through STDOUT.

<blockquote>

fmt.Print()    ⇒ prints output to the stdout console

fmt.Println()  ⇒ Returns number of bytes and an error

fmt.Printf()   ⇒  Allows users to print formatted data
</blockquote>

<u>Example:</u>

```go
fmt.Println("Hello, Suprabha") // Hello World
fmt.Print("Hello, Suprabha") // Hello, Suprabha (cursor in last). Will output to the         terminal with the cursor immediately after the last space
var mystring = "Hello world"
fmt.Printf("The string is %s", mystring) // The string is Hello world
```

**Fprint**: Printing to io.Writer

Need to print to a non-STDOUT output (such as STDERR or a buffer) then you can use the Fprint functions. The “F” in these functions comes FILE which was the argument type used in C’s fprintf() function.

Use Fprint to write things to the file.

<blockquote>

fmt.Fprint()    ⇒ Prints the output to an external source (file, browser)

fmt.Fprintln() ⇒ Does not print to the stdout console
</blockquote>

<u>Example:</u>

```go
f, _ := os.Create("C:\\programs\\file.txt")
w := bufio.NewWriter(f)
fmt.Fprint(w, "Hello") // writing files
```

**Sprint**: Formatting to a string

<blockquote>

fmt.Sprint() ⇒ Stores output on a character buffer

fmt.Sprintln() ⇒ Does not print to stdout console

fmt.Sprintf() ⇒ Returns the string you want to print
</blockquote>

<u>Example:</u>

```go
product := 42
myString := fmt.Sprintf("Product with ID '%d' could not be found.", product
```

### Conversion characters ๏

Conversion characters tell Golang how to format different data types. Some of the most commonly used specifiers are:

- **v** – formats the value in a default format
- **d** – formats decimal integers
- **g** – formats the floating-point numbers
- **b** – formats base 2 numbers
- **o** – formats base 8 numbers
- **t** – formats *true* or *false* values
- **s** – formats string values

<u>Example:</u>

```go
var mystring = "Hello Suprabha"
fmt.Printf("The string is %s", mystring)
var mydata int = 14          
fmt.Printf("The decimal value is %d", mydata)
var mydata float32 = 8.11
fmt.Printf("The floating point is %g", mydata)
```

## 3️⃣ Types 

<ImgPost src={DataTypes} alt='data types im GO' width={50} />

### 1. Integer 

The integer can be used based on memory. Like how much memory we want to allocate for some variable. Integer can be negative or positive value.

<mark>Type Name</mark>
: int, int8, int16, int32, int64

Below Type name indicates unassigned integer which value is gonna assigned above 0, 0.

<mark>Type Name</mark>
: unit, uint8, uint16, uint32, uint64

```go
var age int = 21
```

### 2. Float

It helps us to manage how precisely we want to have decimals.

<mark>Type Name</mark>
: float32, float64

```go
var result float64 = 4.0
```

### 3. String ＂＂

Everytime we write in double quotes.

<mark>Type Name</mark>
: string

```go
var name string = 'supi'
```

### 4. Boolean 

It's for conditional operator.

<mark>Type Name</mark>
: bool

```go
var canWalk bool = age > 21
```

<mark><b>REFLECT</b> (import part)</mark>

It allows to dig into the syntax a little bit and ask some question about what's the data type.

```go
import ("reflect")
// check type here
fmt.Println(reflect.TypeOf("Hello")) // string
// convert type:
var a = 5;
fmt.Println(reflect.TypeOf(a * 5.5))  // it will throw an ERROR
fmt.Println(reflect.TypeOf(float64(a) * 5.5)) // It will fixed, as we converted a(int) to float
```

## 4️⃣ Variables 🤠

<ImgPost src={Variables} alt='go variables' width={60} />

**How we assign variables❓🤔**

```go
var name string = 'supi' //1. here, we defined the type, so later we can not change it
var name = 'supi'  //2.
var name string // 3. we havent written anything on right side, its like let in JS
var name, name1 = "suprabha", "supi" // 4.
fmt.Println(name, name1) // suprabha supi
name := "supi" //5.here we dropped the var, this is function blocked.
```

ByDefault, data type has some value, like integer has 0, string has "", boolean get false, and float get 0.0

```go
var a int
fmt.Println(a) // 0
```

## 5️⃣ Control Statement

<ImgPost src={ControlStatement} alt='go control statement' width={35} />

### 1. If-Else Statement

```go
if someVar > 100 {
	fmt.Println("Greater than 100")
} else if someVar == 100 {
	fmt.Println("Equals 100")
} else {
	fmt.Println("Less than 100")
}
```

*Assignment operator with **shorthand syntax**:*

```go
err := someFunction()
```

In above snippet, `err` is representing error. Assigning a variable which is gonna error to some function, So if this function returns an error, we will save it to this variable and we can use it.

```go
if err != nil {
	fmt.Println(err.Error())
}
```

If `err` is not `nil`, means something has happened.

```go
if err := someFunction(); err != nil {
	fmt.Println(err.Error())
}
```

Above snippet, allows us to both define a variable and then check about the variable in a conditional sense before executing code within curly braces. So, here `err`, is scoped in if block statement, so we can not use err variable any where else.

### 2. Switch Statements

<ImgPost src={Switch} alt='go switch statement' width={50} />

```go
var city string

switch city {
	case "Des Moines":
		fmt.Println("You live in Iowa")
	case "Minneapolis,", "St Paul": // either city is present then will come here 
		fmt.Println("You live in Minnesota")
	case "Madison":
		fmt.Println("You live in Wisconsin")
	default:
		fmt.Println("You're not from around here.")
}
```

We can also add conditional statement in case, for example `case 9 < 10`

<mark>fallthrough</mark>: If one case is true, then that case will be executed with the next case. (Only one case)

```go
var city string

switch city {
	case "Des Moines":
		fmt.Println("You live in Iowa")
		fallthrough // even city is Des Moines, and its comes here, it will continue going down
	case "Minneapolis,", "St Paul": // either city is present then will come here 
		fmt.Println("You live in Minnesota")
	default:
		fmt.Println("You're not from around here.")
}
```


### 3. For Loops
<ImgPost src={ForLoop} alt='for loop in go' width={60} />

It's looks like similar to JS loop. And only here, we will see semicolon(;) in GO.

```go
//option 1
for i := 1; i <= 100; i++ {
	fmt.Println(i)
}

// option 2
// we can kill both of the statemnt left and right, it most look like while.
i := 1

for i <= 100 { // until i is not less equal to 100, print i
	fmt.Println(i)
	// This will behave like a while loop
	i += 1
}

// option 3
// Really powerful version of for loop uses the range keyword.
var mySentence = "This is a sentence"
// here index, letter are getting assigned to whatever's on the right side. So, index and letter is gettibg assigned to **range** keyword
// i.e . we are iterating over mySentence, which is string
for index, letter := range mySentence {
	fmt.Println("Index:", index, "Letter:", letter)
}
// here, the o/p will show index: 0,1,2 and letter will also be in number
```

If we set some value then we have to use it otherwise Go, will throw an error.

<u>Example: </u>

```go
for index, letter := range mySentence {
	fmt.Println("Letter:", letter) // will throw error, index declared but not used
}
```

So, in that scenario, where we need to use the syntax but not variable name, then we can define with _

```go
for _, letter := range mySentence {
	fmt.Println("Letter:", letter) // will throw error, index is not used
}
```

In this section, we learnt how to `setup GO`, `Printing methods`, different `Types`, how to create `Variable` and usage, `Control Statement` where covered `if else`, `switch` and `for loop`.

<p><LinkPost href='/18-basics-of-golang-part-2' name='Next section' /> we are going to discuss following topics: Functions, Array, Toolkit, Packages, Unit Testing and Structs.</p>

I hope you found this blog helpful, If you have any question please reach out to me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋



