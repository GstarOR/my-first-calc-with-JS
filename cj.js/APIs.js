//So APIs are just like connectors which help to give various information/data without exposing the code for generation such information
//We have various lists of APIs; {Free: "catfacts"}, {Paid: "Razorpay API", "JudgeO API", "ChatGPT API", "Stripe API"}
//fetch() helps to return an API as a new Promise. The .text() makes an formats a primative or object to text.
//.json() creates a jsvascript object like when JSON.parse()  is in use.
//we make use of the frre ones for u to access as well.
// fetch("http://catfact.com/factts")
// .then((res)=>{console.log(res.text())})
// .catch("API Failed")
//u'd notice that it showed result pending becuase the .text() as well returns a promise just as the .json()
fetch("https://catfact.ninja/fact")
.then((res) => res.text())
.then(txt => {
    //console.log(txt);
    return JSON.parse(txt);
})
//.then(data => {console.log(data);
//console.log(data.fact)})
.catch("API failed");
//if you find it confusing try asking chatgpt or any AI that can give you what youre looking for.
//let's do this directly using the .json() that'll convert the given information to a javascript object.
fetch("https://catfact.ninja/fact")
.then((ces)=>ces.json())
//.then((set)=>console.log(set))
.catch("API unfilfilled")
//what you do with an API depends on what you want we can as wellonly get the breed if that's what we want
//lets use the async/await method for this
async function catFacts()
{
    const fet = await fetch("https://catfact.ninja/fact");
    const txt1 = await fet.text();
    console.log(txt1);
    const jS = JSON.parse(txt1);
    console.log(jS);
    console.log(jS.length);
}
catFacts();
//usng the async/await promise we could as well achieve the same result as in promise chainnig
//lets do the second example
async function catBreed()
{
   let fetchi = await fetch("https://catfact.ninja/breeds");
   let jsoni = await fetchi.json();
   console.log(jsoni);
}
catBreed();
// since catfacts.ninja/breeds only allow a list of breeds we tend to see alot of cat breeds listed within which each page carries 25 breeds.
//we'll learn more about https method in the next page.
