<a id="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<div>
    <h1>Pet Phobia</h1>
    <p>Group Integrates:</p>
    <ul>
        <li>Edwin Allauca</li>
        <li>Sebastián Carrera</li>
    </ul>
</div>

## About The Project

![Captura de pantalla 2024-07-08 121340](https://github.com/Retrofiyer/PetPhobia/assets/90810854/ad978a6d-714c-4fc1-a009-8467cc6199f6)

This project is dedicated to helping individuals who suffer from pet phobia, particularly towards cats and dogs. Pet phobia can significantly impact a person's quality of life, limiting their ability to interact with animals and even affecting their social interactions and mental well-being. This initiative aims to provide professional support and guidance to help individuals overcome their fear and understand that pets can be harmless, friendly, and excellent companions.

Project focused:
* Offer professional counseling and therapeutic interventions to help individuals understand and manage their pet phobia. This support will be tailored to each person's specific needs and phobia severity.
* Develop educational programs that inform individuals about pets, their behaviors, and the benefits of pet ownership. These programs aim to dispel myths and provide accurate information to reduce fear and anxiety.
* Implement controlled exposure therapy sessions where individuals can gradually and safely interact with cats and dogs under professional supervision. This method helps desensitize them to their fear and build positive associations with pets.


### Built With

- [![NodeJs][node.js]][node-url]
- [![Bootstrap][bootstrap.com]][bootstrap-url]
- [![HTML][html.com]][html-url]
- [![CSS][css.com]][css-url]
- [![Docker][docker.com]][docker-url]
- [![AWS][aws.com]][aws-url]

<!-- GETTING STARTED -->
## Getting Started

To start running this project we will perform the following steps.

### Prerequisites for running Local

* npm
  ```sh
  npm install npm@latest -g
  ```
### Installation for running Local

Clone the repo
   ```sh
   git clone https://github.com/Retrofiyer/PetPhobia.git
   cd PetPhobia
   ```
Run Cat Microservice
1. Access /CatMicroservice
   ```sh
   cd CatMicroservice
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create an .env and place
    ```sh
   CAT_API_KEY=API_CAT_KEY
   CAT_API_URL=https://api.thecatapi.com/v1/images/search
   ```
5. Run CatService
   ```sh
   npm start
   ```

Run Dog Microservice
1. Access /DogMicroservice
   ```sh
   cd DogMicroservice
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create an .env and place
    ```sh
   DOG_API_KEY=API_DOG_KEY
   DOG_API_URL=https://api.thedogapi.com/v1/images/search
   ```
5. Run DogService
   ```sh
   npm start
   ```

Run Login Microservice

1. Access /LoginMicroservice
   ```sh
   cd LoginMicroservice
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run DogService
   ```sh
   npm start
   ```

Run root proyect
   ```sh
   npm start
   ```

### Prerequisites run docker

<!-- LINKS & IMAGES -->
[node.js]: https://img.shields.io/badge/Node.js-black?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/
[html.com]: https://img.shields.io/badge/HTML-black?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[css.com]: https://img.shields.io/badge/CSS-black?style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-black?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com/
[docker.com]: https://img.shields.io/badge/Docker-black?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://www.docker.com/
[aws.com]: https://img.shields.io/badge/AWS-black?style=for-the-badge&logo=amazon-aws&logoColor=white
[aws-url]: https://aws.amazon.com/
