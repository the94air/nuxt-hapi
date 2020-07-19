'use strict';

const Hapi = require('@hapi/hapi');
const nuxtPlugin = require('@nuxtjs/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register({
      plugin: nuxtPlugin,
      options: {
        dev: true,
        rootDir: __dirname
      }
    });

    server.route({
      method: 'GET',
      path: '/',
      handler: (request, h) => {
        return `
          <div>
            <p>hahaha ᕕ( ᐛ )ᕗ <a href="/test">Go nuxt!</a></p>
          </div>
        `;
      }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();