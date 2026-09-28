import { NotFoundState } from "@/components/reusable/not-found-state"

export default function AppNotFound() {
  return (
    <NotFoundState
      title="Page not found"
      description="We couldn't find the page you were looking for. Check the URL or head back home."
    />
  )
}
