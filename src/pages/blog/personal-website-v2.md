---
title: blog v2
date: 2021-05-29
description: Describing the update I made to the website and the reason why. Talking 
    mostly about web and hosting stuffs.
---

I want to revive my blog to post about projects I am working on as well 
as improve my writing skills. One of the easiest thing I can blog on to start with 
is how I rewrote part of this blog.

This website was created almost 2 years ago after a few unsuccessful attempts.
You can read about the architecture and technology stack on my previous 
[post](../building-personal-website). This gist is a [jamstack](jamstack.org)
architecture using [Gatsby](https://www.gatsbyjs.com/) and [Netlify](https://www.netlify.com/) 
to host it.

Now let's focus on what changed. For the curious and those who want to see some code, 
almost every changes discussed below can be found on this 
[commit](https://github.com/charlesvdv/blog/commit/e28c2269ee411cdb8f00fdd4886d9749cb6ed335).

## Migrating Gatsby v3

This website was initially built with Gatsby v2. Gatsby v3 was released in March 2021
([Gatsby v3 release blogpost](https://www.gatsbyjs.com/blog/gatsby-v3/)) with some exiting
improvements. The most important one for me is the improved performance and usability for 
website visitor mainly due to a better support for images. This support is provided by a new plugin
`gatsby-plugin-image` which I am now using on this website.

After a `yarn upgrade-interactive` to update all of the project dependencies, I was really happy 
to see that everything was working out of the box. Only a few warning due to the usage of 
`gatsby-image` which was deprecated. 

The painless migration really give me great confidence that Gatsby was a right choice 
for building this hobbyist website.

## Going from *SASS* to *tailwind*

One of the biggest chunck of work for the v2 of this website. I removed every `.scss` files 
and re-did the layout and style using [tailwind](https://tailwindcss.com/). It was the first 
time I was using tailwind for any project. One thing I can say is that I love it! 

The setup is pretty straightforward with some documentation especially made for Gatsby. 
The documentation is awesome and the core concept is really easy to grasp.
As tailwind classes are simple mapping to actual *CSS*, there is no magic and everything 
feels like home. The responsive design support is also pretty easy to integrate. You don't have to write 
complex media queries or hack things around. 

During the development of this site, 
I also stubbled upon the [tailwind typography](https://github.com/tailwindlabs/tailwindcss-typography)
plugin. This plugin provides an easy way to format *raw HTML* into a nice to read articles.
I use it extensively in this blog to render the converted Markdown source files.
For example, the text you are reading is fully styled using tailwind typography. The plugin works 
simply by adding `prose` in the root HTML class you want to render. 

```html
<div class='prose'>
    <!--- raw HTML content --->
</div>
```

## Moving to Cloudflare

This website was hosted initially on [netlify](netlify.com). I decided to migrate it 
to [Cloudflare Pages](https://pages.cloudflare.com/). I did the migration for a single 
reason, cloudflare proposes free client-side and server-side analytics. Netlify is 
a great product but I wasn't ready to pay 9€/month for their analytics offering given 
that my website is probably receiving less than 100 visitors/months.

The migration was seamless. Cloudflare Pages is a great product with a really simple interface.

## Using fontsource

[Fontsource](https://fontsource.org/) is a project to self-host your font with ease. 
The fonts are bundled as npm packages. When using a bundler, you just have to import
the package in a source file to import auto-magically the `@font-face` declarations.

The main advantages are (compared to Google Fonts or other font providers): 

- **performance** you avoid one unnecessary network roundtrip to fetch the CSS files 
    describing the fonts.
- **privacy** most of the third-party providers will track the user of the website
    if fonts are loaded from their website.

## Wrapping up

I am really happy with the updates I made for this update. Everything feels simpler 
and the look is better. If you want to check out the website source code for 
some inspiration, the code is on my [github](https://github.com/charlesvdv/blog).