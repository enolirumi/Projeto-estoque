const label = document.querySelectorAll(`.label-main-form`)
const input = document.querySelectorAll(`.input-main-form`)

input.forEach((ei, index) => {
    ei.addEventListener(`blur`, (e) => {
        if(ei.value != ""){
            label[index].classList.add(`label-main-form-fixed`)
        }else{
            label[index].classList.remove(`label-main-form-fixed`)
        }
    })
})