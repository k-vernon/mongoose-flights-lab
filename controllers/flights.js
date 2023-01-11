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

function newFlight(req, res){
  res.render('flights/new', {
    title: "Add Flight"
  })

}

function create(req, res){
  for (let key in req.body){
    if(req.body[key] === "") delete req.body[key]
  }
  console.log(req.body)
  Flight.create(req.body)
  .then(flight => {
    console.log(movie)
    res.redirect("/flights")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index,
  newFlight as new,
  create,
}