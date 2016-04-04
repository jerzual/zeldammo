const TwitterStrategy = require('passport-twitter').Strategy
const GoogleStrategy = require('passport-google-auth').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const LocalStrategy = require('passport-local').Strategy

export default function strategies() {
  return [TwitterStrategy,GoogleStrategy,FacebookStrategy,LocalStrategy];
}
