import * as Events from "events"

export class userEvents extends Events.EventEmitter{
    //event
    createPost(contnet){
        console.log("post is createad")
        this.emit("postCreated");
        
    }
}
