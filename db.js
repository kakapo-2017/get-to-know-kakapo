var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  // saveForm: saveForm,
  getCohort: getCohort,
  getIndividual: getIndividual
}


function saveForm () {

}

function getCohort (testDb) {
  var db = testDb || connection
  return db('cohort').select()
}

function getIndividual (id, testDb) {
  var db = testDb || connection
  return db('cohort').where('id', id)
}
