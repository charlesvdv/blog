---
title: Building my personal website using modern tool chain
date: 2019-12-20
description: Building my personal website using Gatsby for server-side static content generation and a CI/CD pipeline for deployment
---

It has been a few years since I started tinkering on the idea of creating myself a personal website and blog.
The goal for me is to first improve my writing skills but also talk about subjects I like. After a few iterations 
and several years, I finally have a website design and a workflow I like to work with. 

## Choosing a static site generator

After trying multiple static site generators ([gatsby](https://www.gatsbyjs.org), [hugo](https://gohugo.io), [11ty](https://www.11ty.dev/), ...), I always come back 
to [gatsby](https://www.gatsbyjs.org/). The main reasons are the nice developer experience and a clear architecture.

### Developer experience

I started using gatsby during `v0.x` days and since then, the developer experience has greatly been improved. I still remember being 
frustrated by the `// TODO: xxx` in the docs or the lack of API definitions. Right now, the project documentation and helps really 
feel like the top-notch experience that any developer would dream of with [recipes](https://www.gatsbyjs.org/docs/recipes/) providing cookbooks for common tasks, 
[guides](https://www.gatsbyjs.org/docs/guides/), [high level design and ideas of the project](https://www.gatsbyjs.org/docs/conceptual-guide/), 
and [much](https://www.gatsbyjs.org/docs/gatsby-internals/) [more](https://www.gatsbyjs.org/tutorial/)...

On top of it, I prefer the *React/JSX* layout model of gatsby compared the template based approached taken by most of the 
static site generators. The composition of components feels more natural and less clunky and the ability to use the 
full power of Javascript in the layout is great compared to non Touring complete templating language 
(like [hugo](https://gohugo.io/templates/)).

The tooling *just works*. It was not the case for me during the `v0.x` and the `v1.x` period but since the `v2.x`,
I didn't had any issues. The errors are now generally clear and the debuggability is easy with some `console.log(..)`.
The CLI is simple to use and provide an easy way bootstrap a new website with starters. The default starter provides 
just what you need without creeping you under features you won't need. I really like the addition of the `<SEO />` 
component to do basic SEO optimization in 2 seconds.

Building a website using modern best practices for performance (minifying, image compression, ...) and SEO optimization 
(sitemaps, progressive webapps, ...) is tough even more when the frontend is not your domain of expertise. 
Fortunately, for most of those tasks, gatsby has an [awesome plugin ecosystem](https://www.gatsbyjs.org/plugins/) 
that does most of the repetitive tasks for you with easy configuration. For example, adding a 
[sitemap](https://support.google.com/webmasters/answer/156184?hl=en) is done in 2secs by adding a new 
dependency and adding a one-liner in your gatsby config. 

### Clear architecture

At its core, gatsby is a server-side rendering engine (SSR) for React with APIs that be hooked during the 
rendering lifecycle and a graqhql client that can query data. The strength of gatsby lies in the two 
components that have been added to the SSR. The extensive APIs allows plugins to plug themselves anywhere 
in the flow to augment the ability of the tool. For example, you have plugins generating HTML from 
Markdown, optimizing images sizes, handling SASS to CSS conversion, ... On top of that, the plugin repository 
is great way to find new ideas to improve your site without much hurdle.

On the other hand, the query engine with [graphql](https://graphql.org/) allows a neat abstraction over the 
source of the data as well as the format of the data. Here, the plugin ecosystem plays also an important 
role because the plugins are providing the data to gatsby. The data can come from a CMS or from Markdown 
stored locally (like this website) for example.

The data pulling from graphql creates a clean abstraction between the location and the format of the data 
and the actual use of it. Compared to the other static site generators, the design ends up less coupled 
and provide more extensibility for the user without feature-creeping the core.

## Developing

Using the [default gatsby starter](https://github.com/gatsbyjs/gatsby-starter-default) project made the development 
pretty straightforward. The project structure is already defined: 

```
$ tree -L 1 ./src
src
├── components
├── images
└── pages
```

After a few pages and this first blog post, the structure has not changed much: 

```
$ tree -L 3 ./src
src
├── assets
│   └── fonts
│       └── ...
├── components
│   ├── background-image-index.js
│   ├── blogpost-list.js
│   ├── blogpost-stub.js
│   ├── header.js
│   ├── layout.js
│   └── seo.js
├── images
│   └── ...
├── pages
│   ├── 404.js
│   ├── about.js
│   ├── blog
│   │   └── building-personal-website.md
│   ├── blog.js
│   └── index.js
├── styles
│   ├── about.scss
│   ├── blogpost.scss
│   ├── blogpost-stub.scss
│   ├── fonts.scss
│   ├── header.scss
│   ├── index.scss
│   ├── layout.scss
│   └── _toolbox.scss
├── templates
│   └── blogpost.js
└── utils
    └── date.js
```

I added an asset directory to store fonts for now (maybe I will move the images folder in there as well).
There is also a new template folder containing a react component used to create page programmatically 
from external data sources (this page for example is created via the `Blogpost` component from a markdown file).

You can also see that the style folder is a new addition. The default starter project doesn't take any decision 
on the styling. You can go with CSS-in-JS, CSS modules, Sass/less, ... For this site, you can see that I went for 
[Sass](https://sass-lang.com/) because the language adds some nice syntactic sugar on top of raw CSS.

## Building & deploying

The full website is open-source and can be found on [Github](https://github.com/charlesvdv/blog). When hosting 
this kind of website, I used to prefer github pages with travis ci because it was convenient and most importantly
free. But this time, I used [netlify](https://www.netlify.com/) and it's night and day compared to the old workflow.
With github pages/travis ci combo, I add to setup a custom pipeline in travis which pushed a new commit on the 
master branch of the repo containing the website code. With netlify, I just choose a repository on netlify and set up 
my custom domain and everything is setup for you.

On top of it, TLS is automatically setup with a **A+** score on [ssllabs](https://www.ssllabs.com/ssltest/) and the 
website is hosted on Netlify CDN for better network latency all around the world.

## Wrapping up

The combination Gatsby + Netlify has been a breeze to develop and setup. I am very happy with the result and hope 
I will be able to continue improving the website content and design. 

Without doing much, this website scores almost a perfect score on [lighthouse](https://developers.google.com/web/tools/lighthouse/) 
for performance, SEO and accessibility without focusing more than 2 minutes on those topics. This really
shows the quality of the tooling and the care taken to simplify the life of the user.