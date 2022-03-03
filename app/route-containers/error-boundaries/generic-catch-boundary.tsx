import { useCatch } from 'remix'

export default function GenericCatchBoundary() {
  const caught = useCatch()

  return (
    <div>
      <h1>
        {caught.status} {caught.statusText}
      </h1>
    </div>
  )
}
