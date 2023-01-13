import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number,
    min: 0
  } 
})

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
    default: function(){
      const today = new Date();
      const oneYearLater = today.getFullYear() + 1;
      today.setFullYear(oneYearLater);
      return today;
    }
    
  },
  tickets: [ticketSchema],
  meals: [{type:Schema.Types.ObjectId, ref: 'Meal'}]
})

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight,
}
