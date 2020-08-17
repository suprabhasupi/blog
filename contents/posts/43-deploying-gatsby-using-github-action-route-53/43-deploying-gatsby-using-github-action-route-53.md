---
title: Deploying Gatsby using Github Action & route 53
slug: /43-deploying-gatsby-using-github-action-route-53
date: 2020-08-17
desc: How to deploy Gatsby using Github Action & route 53 🤔
priority: 1
# Old URL
# Minute Read
cover:
    img: ../../../photos/43-deploying-gatsby-using-github-action-route-53.png
banner: ../../banners/43-deploying-gatsby-using-github-action-route-53.png
tags:
    - Gatsby
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import Setting from './1-setting.png'
import Secrets from './2-secrets.png'
import NewSecret from './3-new-secret.png'
import CheckValueName from './4-check-value-name.png'
import Actions from './5-actions.png'
import HostedZone from './6-hosted-zone.png'
import IP from './7-ip.png'

Deployed my <LinkPost href='http://blog.suprabha.me' name='personal blog' /> using `Route 53` and `Github action` .

Lets take this process into two step:

1. Github Action
2. Route 53

## 1️⃣ Github Action 🧨

This GitHub Action will run `gatsby build` at the root of your repository and deploy it to GitHub Pages for you!

Create `.github` folder in root of the project and under `.github` folder create `workflows` folder. Then add the below snippet into `main.yml`

`.github/workflows/main.yml:`

```yml
name: Gatsby Publish

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: enriikke/gatsby-gh-pages-action@v2
        with:
          access-token: ${{ secrets.PERSONAL_BLOG }}
          deploy-branch: gh-pages
```

## Configure the access-token 🎗

1. Open github website with the repo (e.x: <LinkPost href='https://github.com/suprabhasupi/blog' name='https://github.com/suprabhasupi/blog'/>)
2. Click on Settings tab
    <ImgPost src={Setting} alt='Setting wrapper' margin='2rem 0' />

3. Go to Secrets
    <ImgPost src={Secrets} alt='Secrets wrapper' margin='2rem 0' width={50} />

4. Click on New Secret button
    <ImgPost src={NewSecret} alt='New Secret wrapper' margin='2rem 0' />

5. Enter the name and Value, Get the value by:
    1. Click on <LinkPost href='https://github.com/settings/profile' name='Profile settings' />
    2. Click on `developer settings` which is in left tab (include image)
    3. Click on Personal Access Token 
    4. Click on `Generate new token` button
    5. Give `Note` name
    6. In Select scopes, checked `repo` 
    7. Click `Generate token` button
    8. Now, Copy the value
6. Paste the value into `New Secret` Value
7. Now, Use the Secret name and place into the project

You can see the below image where I have used the same secret name into the `main.yml` file.
<ImgPost src={CheckValueName} alt='Check value name' margin='2rem 0' />

Once you push code into master, You can see the deployment status into `Actions` tab.
<ImgPost src={Actions} alt='Actions Tab' margin='2rem 0' />

You can check the status as pass ✅ and fail  ❌ in actions.

## 2️⃣ Configure AWS Route 53 🚀

1. Log into the AWS console and go to the <LinkPost href='https://console.aws.amazon.com/route53/home' name='Route 53 dashboard' />.
2. Click **Hosted zones**
<ImgPost src={HostedZone} alt='Hosted Zone Tab' margin='2rem 0' width={30} />

1. Click the domain you would like to use or create new hosted zone
2. Click **Create Record Set**
3. Under the **Type** dropdown, select **A — IPv4 addresses**
    <ImgPost src={IP} alt='IP address in aws Tab' margin='2rem 0' width={50} />

4. Enter the following four IP addresses into the *value* text area. Then click **Save Record Set**.

    ```
    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153
    ```

  Yeah, this is it. Now you can check your live website on the URL which you have mentioned into route53 🜸.

## Reference 🧐

- <LinkPost href='https://github.com/marketplace/actions/gatsby-publish' name='Gatsby Publish' />
- <LinkPost href='https://www.youtube.com/watch?v=JIMord7-G10' name='Gatsby Publishing on Youtube' />

