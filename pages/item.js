import view from "../utils/view.js";
import Story from "../components/Story.js";
import baseUrl from "../utils/baseUrl.js";
import Comment from "../components/Comment.js";

export default async function Item () {
    let story = null;
    let hasComments = false;
    let hasError = false;
    let errorMessage = ""

    try {
        story = await getStory()
        hasComments = story.comments.length > 0;    
    } catch (error) {
        hasError = true;
        errorMessage = error;
        console.error(error)
    }

    if (hasError){
        view.innerHTML = `
        <div class="error">
            Error fetching story!
            Try looking into this error: ${errorMessage}
        </div>
        `
    }

    view.innerHTML = `
        <div>
            ${Story(story)}
        </div>
        <hr/>
        ${hasComments ? story.comments.map(comment => Comment(comment)).join("") : "No Comments"}
    `
}

async function getStory(){
    console.log(window.location.hash)
    console.log(window.location.hash.split('?id='))
    const storyId = window.location.hash.split('?id=')[1]
    console.log(storyId);
    
    //fetch from the api server
    // const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
    const response = await fetch(`${baseUrl}/item/${storyId}`)
    console.log('response for storyId ', response)

    const story = await response.json();
    console.log('individual story response.json() ', story)

    return story;

}