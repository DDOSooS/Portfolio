import React from 'react'
import "./about.css"

export default function About() {
  return (
    <section className="about section" id="about">
      
      <h2 className="section__title">
        About Me
      </h2>

      <span className="section__subtitle">
        My introduction
      </span>
      <div className="about--container container grid">
        <img src="../../assets/about.jpg" alt="" className="about--img" />
        <div className="about--data">
        </div>
      </div>

    </section>
  )
}
