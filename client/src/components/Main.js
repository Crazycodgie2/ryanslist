import React, { useEffect } from "react"
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
            <div> 
              <h4>
                <Link to={"/" + parent.slug}
              </h4>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
