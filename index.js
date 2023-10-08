const hacking = async () => {
    const target = document.getElementById("username").value.trim();
    const process = document.getElementById("action");

    if (target === "") {
        process.innerHTML = "Please enter a valid username.";
        return;
    }

    process.innerHTML = `Hacking ${target} is in progress...<br>`;
    let hackingAccount = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            process.innerHTML += `> Searching the account ${target} ...<br>`
            resolve();
        },1000)
        setTimeout(()=>{
            process.innerHTML += `> Trying 500K passwords for  ${target} ...<br>`
            resolve();
        },2000)
        setTimeout(()=>{
            process.innerHTML += `> Password match not found!<br>`
            resolve();
        },4000)
        setTimeout(()=>{
            process.innerHTML += `> Another 500K passwords being tried  for  ${target} ...<br>`
            resolve();
        },5000)
        setTimeout(()=>{
            process.innerHTML += `> Password Match! <br>`
            resolve();
        },6000)
        setTimeout(()=>{
            process.innerHTML += `> Accessing target account ${target}...<br>`
            resolve();
        },7000)
        setTimeout(()=>{
            process.innerHTML += `> Stealing the user information ...<br>`
            resolve();
        },8000)
        setTimeout(()=>{
            process.innerHTML += `> Blocking the user access to Account...<br>`
            resolve();
        },9000)
        setTimeout(()=>{
            process.innerHTML += `> Target: ${target} hacked Successfully! <br>`
            resolve();
        },11000)
        
    })


}

function hack() {
    hacking();
}
