import React from 'react'

function Section({ title, component }) {
  return (
    <section>
        <h2>{ title }</h2>
        { component }
    </section>
  )
}

export default Section