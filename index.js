const account = [
  {
    firstName: "Kelly",
    lastName: "Handsome",
    email: "kelly@gmail.com",
    password: "Handsome440"
  }
];

function addToCart()
{
window.alert("Item successfully added to cart");
}

function getMessage()
{
document.getElementById("list").innerHTML  = "Comimg soon to the website";
}


function newAccount()
{
  if( document.getElementById("password1").value == document.getElementById("password2").value) 
  {
    alert("Your account was created successfully");
  account.push(
    {
      firtName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password1").value
    }
  );
  
 // printValue();
}
else
{
  alert("The passwords did not match, try again")
}
}


function loginValidation()
{
  //let password = (document.loginform.password.value).type=text;

  for(let i = 0; i<account.length; i++)
  {
if(account[i].email == (document.loginform.email.value) && 
account[i].password == ((document.loginform.password.value)))
{
  alert("Welcome back " + account[i].firstName);
  
}
else{
  alert("Incorrect email or password");
}
}
}

