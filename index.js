var x = 0

function func(a){
    

if (x%2==0){
a.innerHTML = 'dark mood  ' + x + ' times, wow'    
a.style.background ='gray'
a.style.color='white'
document.getElementById('body').style.background = 'black'
document.getElementById('avc').style.color='white'



}
else{
    //document.getElementById('ddd').innerHTML = 'light mood  ' + x + ' times, wow'
a.innerHTML = 'light mood  ' + x + ' times, wow'    
a.style.background ='gray'
a.style.color='black'
document.getElementById('body').style.background = 'white'
document.getElementById('avc').style.color='black'


}
x++
}

function onInput(a){
    
    if (x%2==0){
        document.getElementById('avc').style.color='black'
document.getElementById('avc').innerHTML = 'you write ' +  a.value + ' this, wow'
}
else {
    document.getElementById('avc').style.color='white'
document.getElementById('avc').innerHTML = 'you write ' +  a.value + ' this, wow'

}

   
}
