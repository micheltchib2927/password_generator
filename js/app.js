let generate_btn = document.querySelector(".generator-button")
let copy_btn = document.querySelector(".copy")
let pw_area = document.querySelector(".pw-container")
let popup = document.querySelector(".popup-container")
let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
let password = ""

const generate_password = () => {
    password = ""
    for (let i = 0; i < (Math.floor(Math.random() * (15 - 8)) + 8); i++) {
        password += chars[Math.floor(Math.random() * (chars.length))]
    }
}

generate_btn.addEventListener("click", async () => {
    generate_password()
    pw_area.textContent = password
})

copy_btn.addEventListener("click", () => {
    pw_area.select()
    navigator.clipboard.writeText(pw_area.textContent)
    popup.style.animation = "emerge 2s ease"
})