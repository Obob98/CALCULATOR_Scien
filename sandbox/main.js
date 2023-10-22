import { logger } from "./module.js"

const initApp = () => {
    logger('lodding imported file \n name: logger')
    console.log('in main')
}

window.addEventListener('DOMContentLoaded', initApp)