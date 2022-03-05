---
title: Git Reflog
slug: /74-git-reflog
date: 2022-03-06
desc: Lifesaver Git Reflog, It keeps tracks of everything which you do locally.
cover:
  img: ../../../photos/74-git-reflog.png
banner: ../../banners/74-git-reflog.png
tags:
  - Other
priority: 1
---

<p><span class='first-letter'>B</span>y the name <b>git reflog</b> - Manages reflog information. It keeps tracks of everything which you do locally.</p>

### Let’s understand the git reflog and git log 👀

`git reflog` keep tracks of everything you have done locally.

<u>example: </u>

- keep track of commit history,
- if you have done hard reset,
- it keeps track of git commit --amend as well

For `git log`, it never track the above commits(like reset and --amend).

The `git reflog` shows all your trials and errors. The `git log` just shows a clean and polished version of your work history.

So let’s say you have amend the commit, hence there will be new commit. If you do a reset and skip back a few commits in your history, those commits you skipped over won't show up in the log.

**There is more to talk, let’s discuss it 😅**

While working on repo, and habits of pushing code into `main` branch 😅

I started working on one feature without taking pull from `main` branch, after making changes when I tried to push changes to the `main` branch. I got following errors:

```sh
$ git push origin main
// I got to know I had to take pull from main (which some how I missed)
// and without taking pull I pushed forcefully
```

And then I did the unthinkable 😂

```sh
$ git push origin main -f
// successfully pushed to main branch
```

Later one of my colleague took pull from the main branch, and she was 😳😳🤯🤯. 

Then I got to know that by force pushing my changes, I have removed her commit form the remote branch and the icing on the cake was that she has pulled the changes and now her work vanished from her local machine too! 🙈

We were not able to see those commits using `git log`(almost 5-6 commit ID’s were missing) 😥

To revert back my commit, I had to find the last commit ID which has been removed from commit history. If I would have not closed my **terminal tab**, then there was a chance to get the last commit ID.

**How would not closing terminal tab have been helpful 🤔**

So, while doing forcefully push, you get the message:

```sh
+ aauuii1...789011 HEAD -> branchname (forced update)
```

Here, `aauuii1`  is previous HEAD, and `789011` is new which just pushed forcefully.
So you can easily revert to that commit ID 🙌🏻

But seems, I am not that lucky, as I already closed my terminal tabs 🤦‍♀️  

After 🔍 , I got to know the context about `git log` and `git reflog`. 

`git reflog` tells you the chronological history of what you did.

Their I found this 👇 command, 

```sh
$ git reflog show remotes/origin/branchname
```

It shows the forced update (`789011`) and previous commit (`aauuii1`).

After getting the last commit ID, I created new branch and reset to the commit ID

```sh
$ git checkout -b branch_name
$ git reset --soft aauuii1

// yayy! Its done 😍
```

`git reflog` allows you to go back and find those commits as it'll give you the commit ids. It is really a life saver 🥁

### Moral of the story 🥇

Never give up, with little patience and some googling skill you might end up saving hours of work 💛
