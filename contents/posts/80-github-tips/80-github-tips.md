---
title: Github Tips
slug: /80-github-tips
date: 2023-01-29
desc: Learn the efficient way to start standard projects and push it to Github/Gitlab
cover:
  img: ../../../photos/80-github-tips.png
banner: ../../banners/80-github-tips.png
tags:
  - Other
priority: 1
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>T</span>his article is for beginners as well as for the experts 😉, 
as this is going to help you to avoid all the pitfalls that could lead to failure state.</p>

Here, you will learn efficient way to start the projects and push it into Github/Gitlab.

Let’s see what we are going to learn in this article:

1. Synchronize Local with Remote 
2. Working on Branch
3. Status of your work
4. Land your work

## Setup Git

Make sure to configure the **user information** which will be used across all repositories.

> Set the user name:
    `$ git config --global user.username`


> Set the Email Address:
    `$ git config --global user.email`

Once you have done the setup, will be able to push the changes into github.

### 1. Synchronize Local with Remote

It is important to always ensure that you have the repository on your local machine. There are two things can happen:

A. **You can create your *own repository* **

1. Go to the repository directoy

    ```sh
    $ cd project-name
    ```
    
2. Initialize the git

    ```sh
    $ git init
    ```

B. **If you are working from others repository**

1. To clone the repository locally.
    ```sh
    $ git clone [git@github.com](mailto:git@github.com):suprabhasupi/suprabha.me.git
    ```
    
    Yuppy! Now have cloned the repository local.

### 2. Branch

Git branches are effectively a pointer to a snapshot of your changes.
You can create a new branch anytime when you have to work on any feature, fix, or any chore issues. 

**Why do you need to create a branch?** 

You create a branch to ensure that `main` branch should always a production ready code.
You can create a new branch by following command:

`$ git branch branch_name`

The above command will create a new branch. So to confirm the branch names you can enter following command:

```sh
$ git branch

main
branch_name
```

To switch from `main` to `branch_name`, or any other branch:

```sh
$ git checkout branch_name
```

If you want to create a new branch and switch into it, you can use following command:

```sh
$ git checkout -b branch_name
```
The above command will create a new branch and switched to `branch_name` branch.

### 3. Status

When you want to track the work you've done, such as which files you've updated
Here is the command to check status of your work:

```sh
$ git status
```

### 4. Land your work

Let’s add, commit and push your work into the remote repository.

> add a single file:
    `$ git add file_name`

> add all files:
    `$ git add .`

> commit your code with valid message:
    `$ git commit -m “initial commit“`

> push your work:
    `$ git push origin branch_name`

> to check your commit log:
    `$ git log`

> merge local_branch to another_branch:
    `$ git merge branch_name`

<hr />

### Here are a few tips that can help you save time when working with Git:

1. **Let’s say you have deleted a file a month back, but one day you needed it. How can you get the latest state of the file which has been already deleted?**
    
    **Ans:** This is the command which help you to find the commit log of that particular file:
    ```sh
    $ git log --full-history -- ${file_path}
    ```
    The above command finds the commitID that deleted the file. 
    After checking the commits, and backed up one more by entering the below command:
    ```sh
    $ git checkout HEAD~1
    ```
    This loads the file right before it was deleted 🙌
    

2. **Resolve Conflict**
    
    Let’s say, you took a pull from main branch and you had a conflict. 
    There are few command which will help you in terms of fixing or aborting the conflict.
    
    This command will help to see list of commits which caused conflict
    ```sh
    $ git log --merge
    ```
    
    > Once you fix the conflict, make sure to commit and push.
    
    The below command helps to exit from the merge process and back to original state.
    ```sh
    $ git merge --abort
    ```
    
3. **How to check staged changes of any tracked files. Let’s say you have added the file and now you wanted to checkout the changes. This is the following command you can use:**
    ```sh
    $ git add file1.jsx
    $ git diff --cached file1.jsx
    ```
    

4. **Do you know you can store temporary commits as well in local?**

    Yes, you can stash your changes and when you want those changes back you can get it back.
    
    *Check out these important commands:*
    
    > To save temporary the updated changes:
        `$ git stash`
    
    > To check the list of stash stack:
        `$ git stash list`
    
    > Get the last stash changes from stash stack:
        `$ git stash pop`
    
    > Delete the last stash changes from the stash stack:
        `$ git stash drop`


Thanks for reading the article!

Hope you found this article useful. If you have any questions, feel free to reach out to me <LinkPost href="https://twitter.com/suprabhasupi" name="@suprabhasupi" />
