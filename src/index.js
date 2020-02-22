import App from './App'

import { locoDOM } from 'locomotor'

let props = { todo: 'called' }

locoDOM.render(
  <App {...props} />,
  document.getElementById('app')
)