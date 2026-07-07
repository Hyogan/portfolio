import Image from 'next/image'
import SocialLinks from './SocialLinks'
import Logo from '@/components/ui/Logo'

interface ProfileCardProps {
  role: string
  bio: string
}

export default function ProfileCard({ role, bio }: ProfileCardProps) {
  return (
    <div className="bg-card text-card-fg rounded-[1.75rem] p-6 sm:max-w-[200px]  md:max-w-[340px] mx-auto lg:mx-0 shadow-[0_24px_50px_-20px_rgba(239,182,63,0.2)]">
      {/* Photo on orange background */}
      <div className="relative rounded-2xl overflow-hidden mb-5 bg-orange" style={{ aspectRatio: '3 / 3.2' }}>
        <Image
          src="/assets/Mypic_no_bg.png"
          alt="Arsène Nelson Fogue"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 320px"
          className="object-cover object-bottom"
        />
      </div>

      <h1 className="font-extrabold text-xl text-center mb-1">Arsène Nelson Fogue</h1>
      <p className="text-center text-sm text-card-fg/55 mb-3">{role}</p>

      <div className="flex justify-center mb-4">
        <span className="h-10 w-10 rounded-full bg-bg flex items-center justify-center">
          <Logo size={28} noBg className="object-contain" />
        </span>
      </div>

      <p className="text-sm text-center text-card-fg/55 leading-relaxed mb-5 px-2">{bio}</p>

      <SocialLinks />
    </div>
  )
}
