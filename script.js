let xhr = new XMLHttpRequest();
let client_id = "agy3m667icgyejd2uj324kf03h5psb";
let url = "https://api.twitch.tv/kraken/streams/?game=Overwatch"

xhr.open("GET", url, true);
xhr.onload = function() {
    if(this.status >= 200 && this.status < 400) {
        let response = JSON.parse(this.response)
        console.log(response)
        for (let i=0; i<response.streams.length; i++) {
            let container = document.querySelector('.video_container');
            let div = document.createElement('div');
            div.innerHTML = `
            <div class="preview_image_container">
                <img class="preview_image" src=${response.streams[i].preview.medium} alt="">
            </div>
            <div class="information_container">
                <div class="profile_image_container">
                    <img class="profile_image" src=${response.streams[i].channel.logo} alt="">
                </div>
                <div class="intro">
                    <div class="channel">${response.streams[i].channel.name}</div>
                    <div class="name">頻道追蹤人數：${response.streams[i].channel.followers}</div>
                </div>
            </div>
            `
            div.classList.add('streamer_video')
            container.append(div)
        }
    }
}
xhr.onerror = function() {

}
xhr.setRequestHeader('Accept', 'Accept: application/vnd.twitchtv.v5+json')
xhr.setRequestHeader('Client-ID', client_id)
xhr.send()