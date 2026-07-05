interface PhoneMockupProps {
  children: React.ReactNode
}

export default function PhoneMockup({ children }: PhoneMockupProps) {
  return (
    <div
      className="mx-auto sm:mx-0 shrink-0 overflow-hidden bg-[#1C1C1C]"
      style={{
        width: 180,
        borderRadius: 28,
        border: '6px solid #2A2A2A',
        minHeight: 320,
      }}
    >
      {/* Notch */}
      <div
        className="bg-[#111] mx-auto"
        style={{ height: 24, width: '60%', borderRadius: '0 0 14px 14px' }}
      />
      <div className="bg-[#171717]">{children}</div>
    </div>
  )
}
