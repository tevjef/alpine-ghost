# Ghost on Alpine Linux

[![](https://badge.imagelayers.io/tevjef/alpine-ghost:latest.svg)](https://imagelayers.io/?images=tevjef/alpine-ghost:latest 'Get your own badge on imagelayers.io') [![Build Status](https://travis-ci.org/tevjef/alpine-ghost.svg?branch=master)](https://travis-ci.org/tevjef/alpine-ghost) [![Docker Pulls](https://img.shields.io/docker/pulls/tevjef/alpine-ghost.svg?maxAge=2592000)](https://hub.docker.com/r/tevjef/alpine-ghost/)

This is a [Docker](https://www.docker.com/) image for [Ghost](https://ghost.org). This image runs with a base of [Alpine-Linux](http://www.alpinelinux.org/) making it extremely small, secure and fast.

This image is also available on [Docker Hub](https://hub.docker.com/r/tevjef/alpine-ghost/).

## Usage
We recommend using our images in conjunction with [Docker-Compose](https://docs.docker.com/compose/). This allows for easier creation of containers with the proper volumes and ports enabled.

We have included an [example docker-compose](https://github.com/tevjef/alpine-ghost/blob/master/examples/docker-compose.example.yml) file to show how this image might be used both for development and production in a different project.

This image works out of the box with no volumes. It differs from the official Docker Ghost image by including a config.js file with some env variables defined.

This image also runs with containers. It will accept a volume from your ghost content folder, as well as a custom config.js file. These must point to /var/lib/ghost/ - See the [example docker-compose](https://github.com/tevjef/alpine-ghost/blob/master/examples/docker-compose.example.yml) for specification.

### Available ENV Variables

- NODE_ENV=[production, development]
- GHOST_DOMAIN: URL for your Ghost blog
- GHOST_FORCE_ADMIN_SSL: Force SSL (secure HTTP or https) for the admin panel

#### Mail ENV VARIABLES

- GHOST_MAIL_TRANSPORT: Type of Transport used for sending mail
- GHOST_MAIL_SERVICE: The Service by which email will be sent
- GHOST_MAIL_HOST: Hostname of the SMTP server (defaults to "localhost", not needed with GHOST_MAIL_SERVICE)
- GHOST_MAIL_NAME: The name of the client server (defaults to machine name)
- GHOST_MAIL_USER: Username for the email service
- GHOST_MAIL_PASS: Password for the email service
- GHOST_MAIL_FROM: Address which the email will be sent from
- GHOST_MAIL_SECURE_CONNECTION: Use SSL (default is false, not needed with GHOST_MAIL_SERVICE)
- GHOST_MAIL_PORT: Port of the SMTP server (defaults to 25, not needed with GHOST_MAIL_SERVICE)
- GHOST_MAIL_IGNORE_TLS: Ignore server support for STARTTLS (defaults to false)
- GHOST_MAIL_DEBUG: Output client and server messages to console

## Getting Started

To run this container with the predefined defaults:

    docker run -p 2368:2368 tevjef/alpine-ghost

Now the Ghost container will be available at your.dockermachine.ip:2368.

See the example compose file for specification of including the ENV variables as well as the volumes.

### Volumes

This image has one volume that can be utilized. By connecting a folder with:

     /var/lib/ghost/

You can not only keep your data persistent, but also upload a custom config.js file. In order to do this connect your volume like this:

     /your/contentfolder:/var/lib/ghost/

## License

The code is available under the [MIT License](https://github.com/tevjef/alpine-ghost/LICENSE).
