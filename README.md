<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h2 align="center">Event driven microservices</h2>

  <p align="center">
    An async & Event driven microservice architecture demo app.
    <br />
    <br />
    <br />
</p>


<!-- TABLE OF CONTENTS -->
## Table of Contents
- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Intial Setup and Starting](#intial-setup-and-starting)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

An event driven microservice architecture sample application. This sample application demonstrates the use of an eventing system like Apache kafka to handle async communication among services. Each service can be found in the services folder. Refer the services [document's](https://docs.google.com/document/d/1l3FYuQa9Mc5SieATx1ru9KJmljXns-yjJZXf9OGKYFo/edit?usp=sharing) Implementation section for detailed explanation.


<!-- BUILT WITH -->
### Built With
The major frameworks, libraries and tools will be listed here.
* [NodeJS](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/)
* [Mongo](https://mongodb.com/)
* [Apache Kafka](https://kafka.apache.org/)

<!-- FOLDER STRUCTURE -->
## Folder Structure
```bash
.
├── README.md
├── config.yml
├── docker-compose.yml
├── lerna.json
├── package-lock.json
├── package.json
└── services
    ├── order
    │   ├── Dockerfile
    │   ├── README.md
    │   ├── __tests__
    │   │   └── order.test.js
    │   ├── package-lock.json
    │   ├── package.json
    │   └── src
    │       ├── config.js
    │       ├── controller.js
    │       ├── event-handler.js
    │       ├── index.js
    │       ├── order.model.js
    │       ├── product.model.js
    │       └── router.js
    ├── product
    │   ├── Dockerfile
    │   ├── README.md
    │   ├── package-lock.json
    │   ├── package.json
    │   └── src
    │       ├── config.js
    │       ├── controller.js
    │       ├── event-handler.js
    │       ├── index.js
    │       ├── model.js
    │       └── router.js
    └── user
        ├── Dockerfile
        ├── README.md
        ├── package-lock.json
        ├── package.json
        └── src
            ├── config.js
            ├── controller.js
            ├── index.js
            ├── model.js
            └── router.js
```

<!-- GETTING STARTED -->
## Getting Started

Follow the steps below to get started.


<!-- PREREQUISITES -->
### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Node.JS v12+
* npm
* Docker

<!-- INITIAL SETUP -->
### Intial Setup and Starting

1. Clone the repo
```sh
git clone https://github.com/n0wfal/event-based-services.git
```
2. Install NPM packages
```sh
cd event-based-services && docker-compose up -d
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/n0wfal/event-based-services/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing
Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->
## Contact

Nowfal Nazar - nowfal_n@yahoo.com

Project Link: [https://github.com/n0wfal/event-based-services](https://github.com/n0wfal/event-based-services)