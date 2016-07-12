//----------------------------------------------------------------------------------------------------------------------
// Configuration for PokemonGoCompanion
//
// @module
//----------------------------------------------------------------------------------------------------------------------

module.exports = {
    debug: true,
    http: {
        port: process.env.SERVER_PORT || 8080
    },
    rethink: {
        host: process.env.RETHINK_DB_HOST || 'pinkie.skewedaspect.com',
        port: process.env.RETHINK_DB_PORT || 28015,
        db: 'pgo'
    }
}; // end exports

//----------------------------------------------------------------------------------------------------------------------
