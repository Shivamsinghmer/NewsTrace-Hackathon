import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-500/10 to-black flex items-center justify-center px-4">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary:
              'bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg',
            card: 'bg-transparent shadow-none',
            headerTitle: 'hidden',
            headerSubtitle: 'hidden',
            socialButtonsBlockButton:
              'border-slate-300 text-slate-700 hover:bg-slate-50',
            formFieldInput:
              'rounded-lg border-slate-300 focus:border-purple-500 focus:ring-purple-500',
            footerActionLink:
              'text-purple-400 hover:text-purple-300 font-medium',
            dividerLine: 'bg-slate-300',
            dividerText: 'text-slate-400',
          },
          baseTheme: dark,
        }}
      />
    </div>
  )
}