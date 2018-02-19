# JS BASE KIT

This is a starter kit for building web apps with Webpack, Babel, React, Flow and SCSS.
When running the development server this uses React Hot Module Reloading also for CSS. When building for production styles are extracted into their own `.css` files.

This repo is mostly concerned with building stuff with Webpack and Babel, not
so much with serving your files in production, so your sort of need to provide
your own webserver for that. Remember that your production markup needs to
include the generated `.css` file.

## Get started

 * To use, simply clone this repostiory and then set the git remote to you own. Something like:
```
 $ git clone git@github.com:ahem/js-base-kit.git
 $ git remote remove origin
 $ git remote add origin git@github.com:MY-USER/MY-REPO.git
 $ rm `README.md`
 $ sed -i 's/"name": "js-base-kit"/"name": "MY_PACKAGE_NAME"/' package.json
 $ npm install
 $ npm update
 $ git push
```
 * Start dev server with `npm run dev`
 * Build for production with `npm run build`

## CSS Modules

I like [CSS modules](https://github.com/css-modules/css-modules) so I
configured this to use them. If you don't like that, then just disable them in
webpack.config.babel.js. Simply replace the entire `css-loader` block with just
the string `'css-loader'`.

