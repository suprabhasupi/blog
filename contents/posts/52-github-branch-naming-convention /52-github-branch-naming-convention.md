---
title: Github Branch Naming Convention 
slug: /52-github-branch-naming-convention 
date: 2021-04-04
desc: Commit message is very important when you work in team. Using CommitLint for validating commit message.
cover:
  img: ../../../photos/52-github-branch-naming-convention.png
banner: ../../banners/52-github-branch-naming-convention.png
tags:
    - JS
priority: 1
---

import LinkPost from '../../../src/components/linkPost'
import ImgPost from '../../../src/components/imgPost'
import Post from './naming-convention.png'

A consistent branch naming convention is part of code review best practices.

<ImgPost src={Post} alt="JIRA issue ID with description" />

1. Use ticket ID in your branch names

    If you use ticket ID, then it will be very easy to track the ticket also the ticket will be unique.

    It doesn't take much time to think about branch name and it more convenient to use it.

2. After prefixing ticket ID, add a short description of the task

    If you work with multiple member on same ticket, then it will be really great to add small description after the ticket ID.



There are 2 main naming convention styles within Git. Hyphen(-) separated or slash(/) separated.

1.  feature/XXX 

example: features/homepage

2.  release/XXX 

example: releases/1.1

3.  hotfix/XXX 

example: hotfix/search

You can also integrate <b>push rules</b> into your project, it seems very cool and easy as well. It definitely improves code commit structuring.

### How we integrate Push rules in GitLab 🤔

Push rules are essentially `pre-receive Git hooks` that are easy to enable in a user-friendly interface. 

In GitLab account go to <mark>Project => Settings => Repository => Push Rules</mark>

You can define it per project as well, so you can have different rules to different projects.

1. **Commit messages with a specific reference**

    Let's assume every commit should reference a JIRA issue.

    Exmaple: JIRA-11

    Then we can write a regular expression that requires JIRA issue in the commit message like `JIRA\-\d+` .

2. **Restrict branch names**

    If your company has a strict policy for branch names, you may want the branches to start with a certain name.This approach enables different GitLab CI/CD jobs (such as feature, hotfix, docker, android) that rely on the branch name.

    Any branch name that doesn’t match your push rule is rejected.

3. **Enabling push rules**
4. **Prevent pushing secrets to the repository**

### Reference 🧐

- <LinkPost href="https://community.atlassian.com/t5/Git-questions/What-branch-name-conventions-do-you-use/qaq-p/510537" name="Atlassian" />
- <LinkPost href="https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks" name="pre-receive Git hooks" />
- <LinkPost href="https://docs.gitlab.com/ee/push_rules/push_rules.html" name="Push Rules" />
