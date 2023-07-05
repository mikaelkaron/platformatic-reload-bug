/// <reference types="@platformatic/service" />
import { openIDClientPlugin } from 'fastify-openid-client'
import fp from 'fastify-plugin'

export const ISSUER = Symbol('issuer')

export default fp(async (fastify) => fastify.register(openIDClientPlugin, {
  issuer: {
    decorator: ISSUER,
    method: 'discover',
    issuer: 'https://karon.auth0.com/.well-known/openid-configuration'
  }
}))