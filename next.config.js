// next.config.js - can be added to add env variables for example, so prod and test vars are different

const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase) => {
    // if we are in development (npm run dev)
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'kristik991',
                mongodb_password: 'Password1',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'my-site-dev'
            }
        }
    }

    // if we are not in development (npm run build or npm run export)
    return {
        env: {
            mongodb_username: 'kristik991',
            mongodb_password: 'Password1',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-site'
        }
    }
}