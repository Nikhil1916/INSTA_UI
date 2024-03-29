import { data } from "./data.js";

const feedsContainer = document.querySelector(".feeds");
const storyContainer = document.querySelector(".stories");
function addFeeds() {
    data.forEach((res)=>{
        const feed = document.createElement("div");
        feed.setAttribute("class", "feed");
        feed.innerHTML = `
                    <div class="user-disc">
                        <img src="${res?.user_image}" class="user-img" />
                        <div class="user-info">
                            <p class="dark">${res?.user_full_name}</p>
                            <p class="light">${res?.user_name}</p>
                        </div>
                    </div>
                    <img  class="posted-img" src="${res?.posted_image_url}" />
                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nobis neque quo excepturi, inventore quis.</p>
                    <div class="actions">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                          </svg>
    
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                          </svg>
    
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                          </svg>
                    </div>
        `
        feedsContainer.appendChild(feed);
    });
}

addFeeds();

function addReels() {
    data.forEach((res)=>{
        const story = document.createElement("div");
        story.setAttribute("class","story");
        story.innerHTML = `
            <img src="${res?.user_story}" />
            <p>${res?.user_full_name}</p>
        `
        storyContainer.appendChild(story);
    })
}

addReels();