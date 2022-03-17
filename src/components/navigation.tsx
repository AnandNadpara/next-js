import * as React from 'react'
import { useRouter } from 'next/router';
import { Navigation } from "baseui/side-navigation";

export default function Nav() {
  const router = useRouter()
  const [activeItemId, setActiveItemId] = React.useState('')

  // React.useEffect(() => {
  //   setActiveItemId(router.route)
  // }, [router.route])

  return (
    <Navigation
      items={[
        {
          title: "Home",
          itemId: "/",
          subNav: [
            { title: "Pets", itemId: "/pets" },
          ]
        },
        {
          title: 'About',
          itemId: "/about"
        }
      ]}
      activeItemId={activeItemId}
      onChange={({ event, item }) => {
          event.preventDefault()
          setActiveItemId(item.itemId)
          router.push(`${item.itemId}`)
        }
      }
    />
  )
}