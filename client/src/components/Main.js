import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useCats } from "../hooks"

export default props => {
  const { cats, get } = useCats()

  useEffect(() => {
    get()
  }, [])

  return (
    <div className="container">
      <aside>
        <h1 className="title">las vegas</h1>
      </aside>
      <main>
        <h2>las vegas</h2>
        <div className="categories">
          {cats.map(parent => (
            <div key={"p-c-category-" + parent.id}>
              <h4>
                <Link to={"/" + parent.slug}>{parent.name}</Link>
              </h4>
              <div className="sub">
                {parent.sub.map(child => (
                  <Link key={"child-cat-" + child.id} to={"/" + child.slug}>
                    {child.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
