---
title: Deploying Gatsby on Netlify 💻
slug: /42-deploying-gatsby-on-netlify
date: 2020-08-16
desc: How to deploy Gatsby blog on Netlify 🤔
priority: 1
# Old URL
# Minute Read
cover:
    img: ../../../photos/42-deploying-gatsby-on-netlify.png
banner: ../../banners/42-deploying-gatsby-on-netlify.png
tags:
    - Gatsby
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import NewSite from './1-new-site.png'
import SelectGithub from './2-select-github.png'
import InstallNetlify from './3-install-netlify.png'
import SelectProject from './4-select-project.png'
import DeploySite from './5-deploy-site.png'
import CheckBuildStatus from './6-check-build-status.png'

## How can you deploy Gatsby on Netlify? 🤔

1. Go to <LinkPost href='https://www.netlify.com' name='Netlify' />
2. Singup or login via github/gitlab or your choice 😅. I will be login via github.
3. Click `New Site` from Git
    <ImgPost src={NewSite} alt='New Site Gatsby' margin="2rem 0" />
4. Select Github or any option
    <ImgPost src={SelectGithub} alt='New Site Gatsby' margin="2rem 0" />
5. Give access to netlify for selected Repos
    <ImgPost src={InstallNetlify} alt='Install Netlify' width={50} margin="2rem 0" />
6. Pick a repository (example: `gatsby-intro`)
7. Click on repo name with right accordian button
    <ImgPost src={SelectProject} alt='Select Project from github' margin="2rem 0" />
8. Click on Deploy Site
    <ImgPost src={DeploySite} alt='Deploy Site' margin="2rem 0" />
9.  You can check the building status here
    <ImgPost src={CheckBuildStatus} alt='Check Build status' margin="2rem 0" />
10. Once its get deployed, you will see published status ✅ or ❌

You can also deploy specific branch in `Netlify`. Once you create pull reuest it will automatically create the building part.

URL of netlify is different, that we can changes from general settings in change site name.


