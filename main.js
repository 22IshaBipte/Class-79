var friend_array=[]
function submit()
{
    var name_1 = document.getElementById("friends_name1").value
    var name_2 = document.getElementById("friends_name2").value
    var name_3 = document.getElementById("friends_name3").value
    var name_4 = document.getElementById("friends_name4").value

    friend_array.push(name_1)
    friend_array.push(name_2)
    friend_array.push(name_3)
    friend_array.push(name_4)

    console.log(friend_array)
    document.getElementById("result").innerHTML=friend_array
    document.getElementById("submit").style.display="none"
    document.getElementById("sort").style.display="block"
}

function sorting(){
    friend_array.sort()
    console.log(friend_array)
    document.getElementById("result").innerHTML=friend_array
}
