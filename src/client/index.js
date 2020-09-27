import { handleSubmit } from './js/formHandler'
import {checkForWebAddress} from './js/addressChecker'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log(checkForWebAddress);

export {
    handleSubmit,
    checkForWebAddress
}