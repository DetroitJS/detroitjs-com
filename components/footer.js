import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
    <div className="tc mt3">
      <Link href="/">
        <a className="f6 dib ph2 link mid-gray dim">Home</a>
      </Link>
      <a className="f6 dib ph2 link mid-gray dim" href="https://www.meetup.com/Detroit-Javascript">Meetup</a>
      <a className="f6 dib ph2 link mid-gray dim" href="https://gitter.im/Detroitjs/Lobby">Chat</a>
      <a className="f6 dib ph2 link mid-gray dim" href="https://github.com/detroitjs">Github</a>
      <a className="f6 dib ph2 link mid-gray dim" href="https://twitter.com/detroit_js">Twitter</a>
      <Link href="/code-of-conduct">
        <a className="f6 dib ph2 link mid-gray dim">Code of Conduct</a>
      </Link>
      <Link href="/learning">
        <a className="f6 dib ph2 link mid-gray dim">Learn JavaScript</a>
      </Link>
    </div>
    <style jsx>{`
footer {
background-color: #f7df1e;
background-image: url("data:image/svg+xml,%3Csvg width='304' height='304' viewBox='0 0 304 304' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M44.1 224c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H0v-2h44.1zm160 48c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H82v-2h122.1zm57.8-46c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H304v2h-42.1zm0 16c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H304v2h-42.1zm6.2-114c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4h-86.2c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4h86.2zm-256-48c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H0v-2h12.1zm185.8 34c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4h86.2c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4h-86.2zM258 12.1c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9V0h2v12.1zm-64 208c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9v-54.2c-2.282-.463-4-2.48-4-4.9 0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.42-1.718 4.437-4 4.9v54.2zm48-198.2c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9V82h64v-2h-62V21.9zm16 16c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9V66h48v-2h-46V37.9zm-128 96c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9V210h16v10.1c-2.282.463-4 2.48-4 4.9 0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.42-1.718-4.437-4-4.9V208h-16v-74.1zm-5.9-21.9c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H114v48H85.9c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H112v-48h12.1zm-6.2 130c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H176v-74.1c-2.282-.463-4-2.48-4-4.9 0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.42-1.718 4.437-4 4.9V242h-60.1zm-16-64c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H114v48h10.1c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H112v-48h-10.1zM66 284.1c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9V274H50v30h-2v-32h18v12.1zM236.1 176c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H274v44.1c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9V146h-10.1zm-64 96c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H208v-80h16v-14h-42.1c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H226v18h-16v80h-12.1zm86.2-210c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H272V0h2v32h10.1zM98 101.9c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9V144H53.9c-.463-2.282-2.48-4-4.9-4-2.76 0-5 2.24-5 5s2.24 5 5 5c2.42 0 4.437-1.718 4.9-4H98v-44.1zM53.9 34c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H80V0h2v34H53.9zm60.1 3.9c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9V64H80v64H69.9c-.463-2.282-2.48-4-4.9-4-2.76 0-5 2.24-5 5s2.24 5 5 5c2.42 0 4.437-1.718 4.9-4H82V66h32V37.9zM101.9 82c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H128V37.9c-2.282-.463-4-2.48-4-4.9 0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.42-1.718 4.437-4 4.9V82h-28.1zm16-64c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H146v44.1c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9V18h-26.1zm102.2 270c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H98v14h-2v-16h124.1zM242 149.9c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9V162h16v30h-16v66h48v46h2v-48h-48v-62h16v-34h-16v-10.1zM53.9 18c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H64V2H48V0h18v18H53.9zm112 32c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H192V0h50v2h-48v48h-28.1zm-48-48c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5 0-.342.034-.677.1-1h2.07c-.11.313-.17.65-.17 1 0 1.657 1.343 3 3 3s3-1.343 3-3c0-.35-.06-.687-.17-1H178v34h-18V21.9c-2.282-.463-4-2.48-4-4.9 0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.42-1.718 4.437-4 4.9V32h14V2h-58.1zm0 96c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H137l32-32h39V21.9c-2.282-.463-4-2.48-4-4.9 0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.42-1.718 4.437-4 4.9V66h-40.172l-32 32H117.9zm28.1 90.1c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9v-76.513L175.586 80H224V21.9c-2.282-.463-4-2.48-4-4.9 0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.42-1.718 4.437-4 4.9V82h-49.586L146 112.414V188.1zm16 32c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9v-99.513L184.586 96H300.1c.398-1.96 1.94-3.502 3.9-3.9v2.07c-1.165.413-2 1.524-2 2.83s.835 2.417 2 2.83v2.07c-1.96-.398-3.502-1.94-3.9-3.9H185.414L162 121.414V220.1zm-144-64c2.282.463 4 2.48 4 4.9 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.718-4.437 4-4.9v-3.513l48-48V48h32V0h2v50H66v55.413l-48 48v2.687zM50 53.9c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9v42.686l-48 48V210h28.1c.463 2.282 2.48 4 4.9 4 2.76 0 5-2.24 5-5s-2.24-5-5-5c-2.42 0-4.437 1.718-4.9 4H2v-62.586l48-48V53.9zm-16 16c2.282-.463 4-2.48 4-4.9 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.42 1.718 4.437 4 4.9v18.686l-32 32v2.828l34-34V69.9zM12.1 32c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H9.414L0 43.414v-2.828L8.586 32H12.1zm265.8 18c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4h18.686L304 40.586v2.828L297.414 50H277.9zm-16 160c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H288V136.587l16-16v2.827l-14 14V210h-28.1zm-208 32c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H64v-22.586L40.586 194H21.9c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4h19.513L66 216.586V242H53.9zm150.2 14c.463-2.282 2.48-4 4.9-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.437-1.718-4.9-4H96v-56.598L56.598 162H37.9c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4h19.502L98 200.598V256h106.1zm-150.2 2c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4H80v-46.586L48.586 178H21.9c-.463 2.282-2.48 4-4.9 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.437 1.718 4.9 4h27.513L82 208.586V258H53.9zM97 100c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-48 32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm32 48c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm32-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0-32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm32 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16-64c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 96c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-144c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-96 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm96 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16-64c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-32 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM49 36c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-32 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm32 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM33 68c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-48c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 240c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16-64c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16-32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm80-176c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm32 48c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0-32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm112 176c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-16 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM17 180c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0-32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM17 84c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm32 64c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm16-16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 39.793V0h-2v40.586L8.586 64H0v2h9.413L34 41.414v-1.62zM2 300.1V258h14v46h2v-48H0V302.17c.313-.11.65-.17 1-.17 1.306 0 2.417.835 2.83 2H5.9c-.398-1.96-1.94-3.502-3.9-3.9zM34 241v63h-2v-62H0v-2h34v1zM17 18h1V0h-2v16H0v2h17zm273-2V0h-2v18h16v-2h-14zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1c.323-.066.658-.1 1-.1 2.76 0 5 2.24 5 5s-2.24 5-5 5c-.342 0-.677-.034-1-.1v-2.07c.313.11.65.17 1 .17 1.657 0 3-1.343 3-3s-1.343-3-3-3c-.35 0-.687.06-1 .17V92.1zM80 272h2v32h-2v-32zm37.9 32c-.463-2.282-2.48-4-4.9-4-2.42 0-4.437 1.718-4.9 4h2.07c.413-1.165 1.524-2 2.83-2s2.417.835 2.83 2h2.07zM5.9 0c.066.323.1.658.1 1 0 2.76-2.24 5-5 5-.342 0-.677-.034-1-.1V3.83C.313 3.94.65 4 1 4c1.657 0 3-1.343 3-3 0-.35-.06-.687-.17-1H5.9zm294.2 0c-.066.323-.1.658-.1 1 0 2.42 1.718 4.437 4 4.9V3.83c-1.165-.413-2-1.524-2-2.83 0-.35.06-.687.17-1h-2.07zm3.9 300.1c-1.96.398-3.502 1.94-3.9 3.9h2.07c.302-.852.978-1.528 1.83-1.83v-2.07z' fill='%23454545' fill-opacity='0.11' fill-rule='evenodd'/%3E%3C/svg%3E");
}
`}</style>
  </footer>
)

Footer.displayName = 'Footer'

export default Footer
