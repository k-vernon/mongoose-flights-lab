import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United", "Delta", "JetBlue"] 
  },
  airport: {
    type: String, 
    default: "DEN",
    enum: ["DEN", "DFW", "AUS", "LAX", "SAN", "ATL", "DFW", "JFK", "PHX"]
  },
  flightNo: {
    type: Number,
    default: function(min, max){
      return Math.floor(Math.random() * 9999) + 10
    },
  },
  departs: {
    type: Date,
    //FIX DATE FUNCTION SO DEFAULT IS ONE YEAR FROM TODAY
    default: function(){
      return new Date().getFullYear() + 1
    }
    
  },
})

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight
}
