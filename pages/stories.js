import view from "../utils/view.js"
import Story from "../components/Story.js";

export default async function Stories(path){
    const stories = await getStories(path);
    //stories - array
    // console.log(stories)
    const hasStories = stories.length > 0;
    
    // view.innerHTML = `<div>${path}</div>`;
    view.innerHTML = `<div>${hasStories ? stories.map((story, i) => Story({ ...story, index: i + 1 })).join("") : "No Stories"}
    </div>`
}

async function getStories(path) {
    const isHomeRoute = path === '/';
    const isNewRoute = path === '/new'

    if (isHomeRoute){
        path = '/news';
    } else if (isNewRoute){
        path = '/newest';
    }

    const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
    console.log(response);
    const stories = await response.json();
    console.log(stories);
    return stories;

}

// https://node-hnapi.herokuapp.com

// / (Top) -> /news - // https://node-hnapi.herokuapp.com/news
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show 