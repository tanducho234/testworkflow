// config/rateLimitConfig.js
const rateLimitConfig = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 10 requests per windowMs
  };
  
  module.exports = rateLimitConfig;