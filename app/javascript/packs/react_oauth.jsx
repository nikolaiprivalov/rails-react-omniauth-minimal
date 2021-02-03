// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const LogoutButton = ({ request }) => (
  <button onClick={() => request('users/sign_out')}>Logout</button>
)

const railsApiRequest = (endpoint) => {
  console.log(endpoint)

  axios.delete(endpoint)
    .then(response => {
      console.log(response)
    })
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <>
      <LogoutButton request={railsApiRequest}/>
    </>,
    document.body.appendChild(document.createElement('div')),
  )
})
