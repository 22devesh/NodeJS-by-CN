import {userEvents} from "./userEvent.mjs"

const userEvent = new userEvents()

function saveToDatabase(){
    console.log("Saving post to database");
}

function sendNotification(){
    console.log("Sending Notification")
}

function updateTimeline(){
    console.log("updating timeline")
}

userEvent.addListener("postCreated", saveToDatabase)
userEvent.addListener("postCreated", sendNotification)
userEvent.addListener("postCreated", updateTimeline)

userEvent.createPost('This is my first post')
