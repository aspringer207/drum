function handleClick(event){
    console.log(event.target.value)
    let clip = this.src;
    clip.play()
}
function onChange(event){
    document.getElementById("volume").volume = event.target.value;
    ()=> setVolume();
}
function setVolume(){
    let input = document.getElementById("volume").volume;
    const soundClips = document.querySelectorAll("audio");
    for (const clip of soundClips){
        clip.volume = input;
    }

}
