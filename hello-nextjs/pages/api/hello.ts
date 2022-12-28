import { NextApiRequest, NextApiResponse } from 'next'

/**
 * handling CORS issue example
 * https://github.com/vercel/next.js/blob/canary/examples/api-routes-cors/pages/api/cors.ts
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method == 'GET'){
    res.status(200).json({ text: 'Hello' });
  }
  else if(req.method == 'POST'){
    // bla bla bla
  }
}