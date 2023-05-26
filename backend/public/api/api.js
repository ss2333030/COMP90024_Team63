const axios = require("axios")
const {requests} = require("./requests.js")
// Function sending the number for all transportation use
const renderSudoTransport = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_transport_sum_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}
// Function sending the number for all transportation use
const renderSudoClimate = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_climate_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}
// Function sending the number for all bicycle
const renderSudoBic = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_bicycle_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}
// Function sending the number for bus users
const renderSudoBus = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_bus_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number for scooter users
const renderSudoScooter = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_scooter_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number for train users
const renderSudoTrain = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_train_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}
// Function sending the number for tram users
const renderSudoTram = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_tram_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number for walking people
const renderSudoWalk = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_walk_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}



// Function sending the unemployment rate
const renderSudoUnemp = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_unemp_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the total number of people having health problem
const renderSudoHealth = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_health_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}
// Function sending the total number of twitters from the request 
const renderSudoAlchohol = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_alchohol_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}
// Function sending the number of obesity people
const renderSudoObesity = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_obesity_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number of smokers
const renderSudoSmoker= async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_smoker_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the total number of twitters from the request 
const renderCoffeeTwitter = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.coffee_total_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number of twitters about coffee in each LGA from the request 
const renderCoffeeLGA = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.coffee_lga_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number of twitters about coffee in each state from the request 
const renderCoffeeState = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.coffee_state_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the total number of twitters about coffee from the request 
const renderCoffeeMast = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.coffee_mast_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the total number of twitters about negative attitude in work from the request 
const renderWorkTwitter = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.work_total_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the total number of twitters about negative attitude in work from the request 
const renderNegativeTwitter = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.nega_total_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number of twitters about negative attitude in work in each LGA from the request 
const renderNegativeLGA = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.nega_lga_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number of twitters about negative attitude in work in each state from the request 
const renderNegativeState = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.nega_state_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the total number of twitters about entertainment from the request 
const renderEnterTotal = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.enter_total_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number of twitters about entertainment in each LGA from the request 
const renderEnterLGA = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.enter_lga_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number of twitters about entertainment in each state from the request 
const renderEnterState = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.enter_state_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number of empl20plus business in each LGA
const renderSudoBigB = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_bigB_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number of empl20plus business in each state
const renderSudoBigBState = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_bigB_state_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number of empl119 business in each LGA
const renderSudoSmallB = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_smallB_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number of empl119 business in each state
const renderSudoSmallBState = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_smallB_state_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the total number of business in each LGA
const renderSudoTotalB = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_totB_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}


// Function sending the total number of business in each state
const renderSudoTotalBState = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_totB_state_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}


// Function sending the total number of business in all areas
const renderSudoTotalSum = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_totSum_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the standard deviation for each LGA
const renderBusiSD = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_bSD_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the sum of SD in each state
const renderBusiSDState = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.sudo_bSD_state_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number of post about coffee in mastodon
const renderMastCoffee = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.mastodon_coffee_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the total number of posts in mastodon
const renderMastTotal = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.mastodon_total_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number of posts about negative work attitude in mastodon
const renderMastNega = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.mastodon_nega_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

// Function sending the number of post about work in mastodon
const renderMastWork = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const response = await axios.get(requests.mastodon_work_request)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
}

module.exports ={
    renderCoffeeTwitter,
    renderCoffeeLGA,
    renderCoffeeState,
    renderCoffeeMast,
    renderEnterLGA,
    renderEnterState,
    renderEnterTotal,
    renderWorkTwitter,
    renderNegativeLGA,
    renderNegativeTwitter,
    renderNegativeState,
    renderSudoTotalSum,
    renderSudoTotalB,
    renderSudoSmallB,
    renderSudoBigB,
    renderBusiSD,
    renderSudoBigBState,
    renderSudoSmallBState,
    renderSudoTotalBState,
    renderBusiSDState,
    renderMastCoffee,
    renderMastTotal,
    renderMastNega,
    renderMastWork,
    renderSudoHealth,
    renderSudoObesity,
    renderSudoSmoker,
    renderSudoAlchohol,
    renderSudoUnemp,
    renderSudoClimate,
    renderSudoBic,
    renderSudoBus,
    renderSudoScooter,
    renderSudoTrain,
    renderSudoTram,
    renderSudoWalk,
    renderSudoTransport
}