/*
  Temporary home page — replaced in commit 2 with a redirect to /fr.
  Exists only to give the dev server something to render while we build.
*/
export default function Page() {
  return (
    <main className="flex flex-1 items-center justify-center">
      <p className="text-orange font-black text-2xl tracking-tight">
        Arsène.dev — building…
      </p>
    </main>
  )
}
