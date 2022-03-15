
import { Stripe } from 'stripe'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let result: any;
  let stripeRes
  const { method, body } = req
  switch (method) {
    case 'GET':

      const DEV_KEY = `${process.env.NODE_STRIPE_KEY}`
      const stripe = new Stripe(DEV_KEY, {
        apiVersion: '2020-08-27'
      })
      try {
        const { data } = await stripe.accounts.list()
        stripeRes = data
      } catch (error: any) {
        return res.status(error.statusCode).json({ message: error.message })
      }
      break;

    default:
      break;
  }
  return res.status(200).json(stripeRes)
}
