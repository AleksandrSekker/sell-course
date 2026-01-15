import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover',
  typescript: true,
  appInfo: {
    name: 'Sekker Model Group',
    version: '0.1.0',
  },
});

export async function POST(request: Request) {
  try {
    const { productId } = await request.json();

    const products = [
      {
        id: 1,
        price: 999, // 9.99€ in cents
        name: 'The Complete Modeling Guide',
        description: 'Your Path to Becoming a Professional Model',
        currency: 'eur', // Explicitly set currency to EUR
      },
    ];

    const product = products.find((p) => p.id === productId);

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price, // 999 = 9.99€
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
    });

    if (!session.url) {
      throw new Error('Failed to create checkout session');
    }

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: { message: err.message } }, { status: 500 });
  }
}
