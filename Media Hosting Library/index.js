
var video_title1=document.getElementById('videoTitle')
var channel_name1=document.getElementById('channel')
var thumbnail1=document.getElementById('inp')
var video= document.getElementById('link')
// var view1=document.getElementById('views')
// var duration1=document.getElementById('duration')





function addCard(){

    let video_title=video_title1.value
    let channel_name=channel_name1.value
    let link = video.value
    let date= new Date()
    try{
        let img =URL.createObjectURL(thumbnail1.files[0])

    }
    catch(err){
        alert("Please upload a valid image")
    }
    let img =URL.createObjectURL(thumbnail1.files[0])
    date=date.toLocaleDateString()

    if(video_title===''){
        alert("Please enter a valid video title")
        return
    }
    else if(channel_name===''){
        alert("Please enter a valid channel name")
        return;
    }

    // link ="https://drive.google.com/drive/u/0/my-drive?q=type:video%20parent:0AALvd28s0CNKUk9PVA"

    let html= `<a href="${link}" target="_blank">
                        <div class="videoContainer">
                        <div class="thumbnail">
                            <img alt="" class="pic" src="${img}">
                        </div>
                        <div class="details">
                            <div class="title">${video_title}</div>
                            <div class="sub">
                                <p class="channel" id="Name">${channel_name}</p>
                                <p class="channel">|</p>
                                <p class="channel" id="date">${date}</p>
                            </div>
                        </div>
                    </div></a>`

    video_title1.value=""
    channel_name1.value=""
    video.value=""
    // view1.value=""
    // duration1.value=""

    document.querySelector(".library").style.display = "block";


    document.querySelector(".mediaArea").innerHTML=document.querySelector(".mediaArea").innerHTML + html
}