
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
    case 'POST':
      const {
        STRIPE_SK,
        accountId,
        statement_descriptor,
        statement_descriptor_kana,
        statement_descriptor_kanji,
      } = body
      console.log(
        STRIPE_SK,
        accountId,
        statement_descriptor,
        statement_descriptor_kana,
        statement_descriptor_kanji,
      );
      const DEV_KEY = `${STRIPE_SK}`

      const stripe = new Stripe(DEV_KEY, {
        apiVersion: '2020-08-27'
      })
      try {
        stripeRes = await stripe.accounts.update(
          accountId,
          {
            settings: {
              payments: {
                statement_descriptor,
                statement_descriptor_kana,
                statement_descriptor_kanji,
              }
            }
          }
        );
      } catch (error: any) {
        res.status(error.statusCode).json({ message: error.message })
      }
      break;

    default:
      break;
  }
  // const { data } = result
  // res.status(200).json({ applicationFees: "ss" })
  res.status(200).json({ stripeRes })
}
