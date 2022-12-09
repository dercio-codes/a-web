// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import NotFound from '../404.js'


export default function handler(req, res) {
    
    res.status(404).end(NotFound)
  }