import type { Request, Response } from "express"

export const jwt = require('jsonwebtoken')

export function generateAccessToken(username: string) {
    const payload = {username};
      
      const secret = process.env.TOKEN_SECRET as string;
      const options = { expiresIn: '1h' };
    
      return jwt.sign(payload, secret, options);
}