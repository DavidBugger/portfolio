'use client'

import { useFormStatus, useFormState } from 'react-dom'
import { subscribeToNewsletter } from '@/app/actions/subscribe'
import { useEffect } from 'react'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-r-md disabled:opacity-50"
    >
      {pending ? 'Subscribing...' : 'Subscribe'}
    </button>
  )
}

export default function SubscribeForm() {
  const [state, formAction] = useFormState(subscribeToNewsletter, {
    success: false,
    message: '',
  })

  // Reset form on success
  useEffect(() => {
    if (state.success) {
      const form = document.querySelector('form')
      form?.reset()
    }
  }, [state])

  return (
    <div className="w-full max-w-md mx-auto">
      <form action={formAction} className="flex">
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <SubmitButton />
      </form>
      {state.message && (
        <p className={`mt-2 text-sm ${state.success ? 'text-green-600' : 'text-red-600'}`}>
          {state.message}
        </p>
      )}
    </div>
  )
}