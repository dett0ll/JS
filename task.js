document.addEventListener('DOMContentLoaded', () => {

    //when the page loads submit button by default should be disabled. Also, it should not submit empty values
    document.querySelector('#submit').disabled = true;
    //But when any keys are pressed in the input, it should enable
    document.querySelector('#task').onkeyup = () =>{
        if (document.querySelector('#task').value.length > 0){
            document.querySelector('#submit').disabled = false;
        }
        else{
            document.querySelector('#submit').disabled = true;
        }
        
    }
    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#task').value;
        const li = document.createElement('li');
        li.innerHTML = task;
        document.querySelector('#tasks').append(li);
        document.querySelector('#task').value=''; //we do not want the value we entered to remain in the input field so to clear that value
        document.querySelector('#submit').disabled = true;
        return false; //it will prevent it from submitting and instead will displat the value
    }   
});
       