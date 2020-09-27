import { handleSubmit } from './js/formHandler'
import {checkForWebAddress} from './js/addressChecker'

import './styles/resets.css'
import './styles/base.css'
import './styles/footer.css'
import './styles/form.css'
import './styles/header.css'

console.log(checkForWebAddress);

export {
    handleSubmit,
    checkForWebAddress
}