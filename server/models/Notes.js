import mongoose from "mongoose";
const Schema = mongoose.Schema

export const NotesSchema = new Schema(
  {
    message: {type: String, minlength: 1, maxlength: 1000, required: true},
// relationships
    shipId: {type: Schema.Types.ObjectId, required: true, ref: 'Account'},
    senderId: {type: Schema.Types.ObjectId, required: true, ref: 'Account'},
    recipientId: {type: Schema.Types.ObjectId, required: true, ref: 'Account'}
  },
  {}
)

// virtuals are opt in, so you must include them in the service layer when you make a query we do this with .populate('banana')
// you can narrow the fields populated in a string list after the banana eg .populate('banana', 'name, picture') when you change the banana word you must use the exact match in both the virtual, and the functions where you call for populate.
// req.body.creatorId = req.userInfo.id this is where you gather basic info from the user and stamp the info on the object.
// the controller methods .get .put etc. determine the name of the id used in the functions further down. so req.userInfo.id is "id" because of the '/:id' in the ctor.
// remove(noteId, userId){
// const note = await this.getNoteBYId(noteId)
// if NotesSchema.toString()
// }
// NotesSchema.virtual('banana', {
//   justOne: true,
//   foreignField: '_id',
//   localField: 'creatorId',
//   ref: 'Account'
// })
NotesSchema.virtual('sender', {
  justOne: true,
  foreignField: '_id',
  localField: 'senderId',
  ref: 'Account'
})

NotesSchema.virtual('recipient', {
  justOne: true,
  foreignField: '_id',
  localField: 'recipientId',
  ref: 'Account'
})

NotesSchema.virtual('ship', {
  justOne: true,
  foreignField: '_id',
  localField: 'shipId',
  ref: 'Account'
})

// on the controller side auth0 checks that the creator is authorized, it checks the creator id, but in the service we need to check the other ID's to verify good recipient and ship id's. you want to stop the function if the recipient or ship are bad. you get the 
// when choosing which service to use on multi-relational objects, use the service for the actual object you are expecting returned
// urls are typically not case sensitive so convention is to us kabob case

// client side notes: be careful not to import the server side files! watch the paths pop.error on the client side, console error as well 

// in the authController on the client side there is an authservice.on that allows you to run functions on successful login

// hackathon notes: poster has only auth to edit and delete legends of the hidden temple