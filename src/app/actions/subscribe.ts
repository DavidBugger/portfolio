'use server'

import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Please enter a valid email address')
})

export async function subscribeToNewsletter(prevState: any, formData: FormData | { email: string }) {
  try {
    // Handle both FormData and direct object
    const email = formData instanceof FormData 
      ? formData.get('email') as string
      : formData.email;

    // Validate email
    const validated = schema.safeParse({ email })
    if (!validated.success) {
      return { 
        success: false, 
        message: 'Please enter a valid email address' 
      }
    }

    // Save to Supabase
    const supabase = await createClient()
    const { error } = await supabase
      .from('subscribers')
      .insert([{ email }])
      .select()

    if (error) {
      if (error.code === '23505') { // Unique violation
        return { 
          success: true, 
          message: 'You are already subscribed! Thank you!' 
        }
      }
      throw error
    }

    return { 
      success: true, 
      message: 'Thank you for subscribing to our newsletter!' 
    }
  } catch (error) {
    console.error('Subscription error:', error)
    return { 
      success: false, 
      message: 'An error occurred. Please try again.' 
    }
  }
}