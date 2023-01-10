import { Flight } from "../models/flight.js";

function index(req, res){
  Flight.find({})
  .then(flights => {
    res.render("flights/index", {
      title: "All Flights",
      flights: flights,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index
}