

function call(id){
    const currentCoin=parseInt(document.getElementById('coin-count').innerText);
    if(currentCoin<20)
    {
        alert('You do not have sufficient coin');
    }
    else
    {
        const message1=document.getElementById(id).parentNode.parentNode.querySelector('h3').innerText;
        const message2=document.getElementById(id).parentNode.parentNode.querySelectorAll('p')[1].innerText;
        const message='calling '+message1+" "+message2
        alert(message);

        const updatedCoinCount=currentCoin-20;
        document.getElementById('coin-count').innerText=updatedCoinCount;

        
    }
}




const hearts=document.getElementsByClassName('heart-icon')
for(const heart of hearts){
    heart.addEventListener('click',function(){
    const currentHeartCount=parseInt(document.getElementById('heart-count').innerText)
    const updatedCount= currentHeartCount+1;
    document.getElementById('heart-count').innerText=updatedCount;        
    })
}

const copys=document.getElementsByClassName('copy-btn')
for(const copy of copys){
    const currentCopyCount=parseInt(document.getElementById('copy-count').innerText)
    const updatedCopyCount=currentCopyCount+1;
    document.getElementById('copy-count').innerText=updatedCopyCount;
}



document.getElementById('national-emergency-helpline-btn').addEventListener('click',function(){
    call('national-emergency-helpline-btn')
})

document.getElementById('police-helpline-btn').addEventListener('click',function(){
    call('police-helpline-btn')
})

document.getElementById('fire-service-btn').addEventListener('click',function(){
    call('fire-service-btn')
})
document.getElementById('ambulance-service-btn').addEventListener('click',function(){
    call('ambulance-service-btn')
})
document.getElementById('women-child-helpline-btn').addEventListener('click',function(){
    call('women-child-helpline-btn')
})
document.getElementById('anti-corruption-helpline-btn').addEventListener('click',function(){
    call('anti-corruption-helpline-btn')
})
document.getElementById('electricity-helpline-btn').addEventListener('click',function(){
    call('electricity-helpline-btn')
})
document.getElementById('brac-helpline-btn').addEventListener('click',function(){
    call('brac-helpline-btn')
})
document.getElementById('railway-helpline-btn').addEventListener('click',function(){
    call('railway-helpline-btn')
})


