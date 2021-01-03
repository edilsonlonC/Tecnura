module.exports = {
  token: {
    JWTSecret: process.env.JWTSecret || 'secret password jwt',
    expiresIn: process.env.expriresIn || '1h',
    algorithm: process.env.algorithm || 'RS256'
  },
  refrest_token: {
    JWTSecret: process.env.JWTSecret || 'secret password jwt for refresh token',
    expiresIn: process.env.expriresIn || '1h',
    algorithm: process.env.algorithm || 'RS256'
  }

}
