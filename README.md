# Your dream job 💼

### Table of contents :

- [Presentation](#presentation)
- [Prerequisite](#prerequisite)
- [Installation](#installation)
- [Extra informations](#extra-informations)

### Presentation

Your dream job is a web app allowing you to consult awesome jobs of a firm powered with [Welcome kit API](https://developers.welcomekit.co/).
You can access to the website by clicking 👉 [here](https://dream-gwg7gtyxm-csaintfleurant.vercel.app/) 👈

### Prerequisite

- Have [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) installed in your machine (this web app is running with node v14.17.0)

### Installation

- Clone the project `git clone https://github.com/cindy-sf/dream-job.git`
- Go to the project directory `cd dream-job`
- Use the good version of node : `nvm use`

- Finally, install the dependencies by running `npm i`.
- Congratulations, you are ready to launch the project 🎉.
  Now run `npm run dev`.

### Extra informations

Development choices :

- **Technos**
  NextJs for performance (SSR, image optimization, dynamic imports are natively proposed by the framework).
  And also for DX (simplified routing system, faster compilation for example).

- **Tests**
  React Testing Library, to getting as close as possible to the behavior of the user

- **Project architecture**
  Based on [container/view](https://www.patterns.dev/posts/presentational-container-pattern/) design pattern.
  Here the project tree : <br />
  └── /src <br />
  &nbsp;├── /mocks <br />
  &nbsp;├── /components <br />
  &nbsp;├── /pages <br />
  &nbsp;├── /services <br />
  &nbsp;├── /types <br />
  &nbsp;├── /utils

Enjoy 😄 !
