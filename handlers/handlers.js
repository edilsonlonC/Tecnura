'use strict'

function notFoundError (req, res) {
  return res.status(404).send({
    message: 'Page Not Found',
    ok: false
  })
}

function serverError (err, req, res, next) {
	if (err.message === 'unauthorized') return res.status(401).send({
		message: 'unauthorized'
	})
	else if ( err.message === 'NotArguments' ) return res.status(404).send({
		message: 'Arguments are missing'
	})
  return res.status(500).send({
    message: 'Server Error',
    ok: false
  })
}

module.exports = {
  notFoundError,
  serverError
}
