import React from 'react'

function Section({ id, title, component }) {
  return (
    <section id={id}>
        <h2>{ title }</h2>
        { component }
    </section>
  )
}

export default Section