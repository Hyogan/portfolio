interface BrowserMockupProps {
  url: string
  children: React.ReactNode
}

export default function BrowserMockup({ url, children }: BrowserMockupProps) {
  return (
    <div className="flex-1 w-full rounded-xl overflow-hidden border border-fg/8 bg-[#1C1C1C]">
      {/* Chrome bar */}
      <div className="flex items-center gap-2.5 bg-[#252525] px-3.5 py-2.5">
        <div className="flex gap-[5px]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
        </div>
        <div className="flex-1 flex items-center h-[22px] bg-[#111] rounded-[4px] px-2.5">
          <span className="text-[10px] text-fg/35">{url}</span>
        </div>
      </div>
      {/* Content */}
      <div className="bg-[#171717]">{children}</div>
    </div>
  )
}
