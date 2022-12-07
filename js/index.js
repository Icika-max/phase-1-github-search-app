function form(){
    const form = document.getElementById('github-form')
form.addEventListener('submit',function(e){
    e.preventDefault()

    const search= e.target.search.value
    ft(search)
   // alert(originalName)
})
}

function ft(originalName){

fetch(`https://api.github.com/users/${originalName}`,
{
    method:'GET',
    headers: {
        'Accept': 'application/vnd.github.v3+json',
    },
})
.then((result)=> result.json())
.then((data)=>{
    console.log(data)
    const users= document.getElementById('user-list')
    const list =document.createElement("li")
    list.innerHTML=`USERNAME: ${data.login}<br>
                    REPOSITORY: ${data.avatar_url}`;
    users.appendChild(list)
    console.log(data.login)
    console.log(data)



    //document.getElementById('result').innerHTML=`
    //<a target='_blank' href="https://www.github.com/${originalName}<img src="${data.avatar_url}"/></a>
})
}

document.addEventListener('DOMContentLoaded', ()=>{
    form()
})