# YDR Course Service
All de the online courses in the world

(Docker image repo)https://hub.docker.com/repository/docker/belce/ydr-course-service

## Getting started
1. Clone the repo
2. `npm i`
3. `npm start`

## Commands

### Docker
Build de the docker image
`docker build -t belce/ydr-course-service .`

Push it to docker hub
`docker push belce/ydr-course-service:latest`

Create a pod in kubenetes
`helm upgrade --install ydr-course-service helm/.`

Watch pod logs
`kubectl logs --follow {podName}`

Delete all pods of this chart
`helm uninstall ydr-course-service`


## Db
`psql -h courses.cv6hi7slm2ua.eu-west-3.rds.amazonaws.com -p 5432 -U postgres`

## Technologies
- [TypeORM documentation](https://typeorm.io/#/)
- [nestjs auto CRUD](https://github.com/nestjsx/crud)
- [Class validator lib](https://github.com/typestack/class-validator)

## Readings
- [Db in docker](https://vsupalov.com/database-in-docker/)
- [Db in kubernetes](https://cloud.google.com/blog/products/databases/to-run-or-not-to-run-a-database-on-kubernetes-what-to-consider)
- [Crunchy data](https://access.crunchydata.com/documentation/postgres-operator/4.3.0/installation/postgres-operator/)
- [K8s ns](https://kubernetes.io/es/docs/concepts/overview/working-with-objects/namespaces/)
- [k8s logging](https://medium.com/stakater/logging-in-kubernetes-from-container-to-visualization-99524f733d8d)
- [Connecting to RDS AWS](https://towardsdatascience.com/creating-and-connecting-a-postgresql-database-with-amazons-relational-database-service-rds-dcc9db0cd37f)

#### TypeORM
- [TypeORM migrations](https://github.com/typeorm/typeorm/blob/master/docs/migrations.md#creating-a-new-migration)
- [TypeORM fields](https://github.com/typeorm/typeorm/blob/master/docs/entities.md#column-types-for-postgres)
- [TypeORM relations](https://github.com/typeorm/typeorm/blob/master/docs/relations.md)
- [Postgres fields](https://github.com/typeorm/typeorm/blob/master/docs/entities.md#column-types-for-postgres)
)
- [TypeOrm can not connect to db](https://stackoverflow.com/questions/57951040/why-my-typeorm-cant-connect-database-in-product-mode)
- [TypeORM configure migrations](https://hackernoon.com/quick-and-easy-crud-with-nestjs-nestjsxcrud-and-testmace-t9cn313h)
- [TypeORM many to many](https://github.com/typeorm/typeorm/blob/master/docs/many-to-many-relations.md)
- [TypeORM one to many](https://github.com/typeorm/typeorm/blob/master/docs/many-to-one-one-to-many-relations.md)
- [Currency in postgres](https://rietta.com/blog/postgresql-currency-types/)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
