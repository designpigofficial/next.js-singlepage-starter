# Next.js Single-page Starter

This template uses [Tailwind CSS](https://tailwindcss.com/) [(v2.2)] with Next.js It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

It is mostly unstyled and is intended for use as a boilerplate to save time on setup.

It features 4 commonly-named sections, each of full-screen size, which can be edited, removed, renamed, or expanded upon. The sections are components which are imported into the index.js file.

The navigation is collapsed to a hamburger menu on screen sizes which are smaller than 'large' screen. This can also be changed by adjusting the Tailwind utility classes. The sliding menu side-bar is animated and is customizable.

The animations are made using the Framer-Motion API.

The FadeUp Component is triggered on-scroll using the react-intersection-observer (<https://www.npmjs.com/package/react-intersection-observer>), and can be wrapped around HTML elements to Fade Up into view upon entering the viewport. It can be further customized by following the Framer-Motion documentation.
(<https://www.framer.com/docs/>)

## How to use

Click on "Use this template" above the file list on the main page of this repository and follow the steps outlined. Alternatively, follow these instructions:
(<https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template>)

## List of dependencies:

-prod:
@heroicons/react@1.0.4
framer-motion@4.1.17
next@11.1.2
react-dom@17.0.2
react-intersection-observer@8.32.1
react@17.0.2

-dev:
autoprefixer@10.3.6
postcss@8.3.8
tailwindcss@2.2.16
