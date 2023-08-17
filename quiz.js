





// sign up sign in sign out section....................................

 
function register() {
    var userSignUp = document.getElementById("signup-user");
    var passSignUp = document.getElementById("signup-Password");
  
    localStorage.setItem("user-name", userSignUp.value);
    localStorage.setItem("password", passSignUp.value);
  
    userSignUp.value = "";
    passSignUp.value = "";
  
    var h1 = (document.getElementById("sign-up-message").innerHTML +=
      "Account created Successfully");
  }
  
  
  function goToSignIn() {
    location.href = "./signInQuiz.html";
  }
  

  
  function signIn() {
    var userName = document.getElementById("user-signIn");
    var password = document.getElementById("password-signIn");
    var storedUserName = localStorage.getItem("user-name");
    var storedPassword = localStorage.getItem("password");
    console.log({
      storedUserName,
      storedPassword,
      userName: userName.value,
      password: password.value,
    });
    if (storedUserName === userName.value && storedPassword === password.value) {
      
        location.href = "./quiz.html";
    } else {
      alert("Wrong Password");
      
    }
  };
  
  
  
  function signOut(){
  
      location.href = "./signInQuiz.html";
  }

  

  //============================================================================





// main page to select quiz by click on button..............................
      var htmlBtn = document.getElementById("html-btn")
      var cssBtn = document.getElementById("css-btn")
      var javascriptBtn = document.getElementById("Javascript-btn")

//got the div where all quiz will show
var quizDiv = document.getElementById("quiz-div");
quizDiv.style.display = 'none';  
 

// html quiz section

//press html button to show html quiz

function htmlQuiz1(){

     
    quizDiv.style.display = "block";
      

    cssBtn.disabled = true;

    javascriptBtn.disabled = true;

};



// html quiz data
var htmlQuiz = [

    {
        question : "1.What does HTML stand for?",
        A : " Hyper Text Markup Language ",
        B :" Hot Mail ",
        C :  " How to Make Lasagna ",
        correct : " Hyper Text Markup Language "
    },

    {
        question :"2. How is document type initialized in HTML5.?",

        A : " </DOCTYPE HTML> ",
        
        B : " </DOCTYPE>",
        C : " <!DOCTYPE HTML>",
        D : " </DOCTYPE html>",
        correct : " <!DOCTYPE HTML>"
         
    },

    {
       question : "3. Which of the following HTML Elements is used for making any text bold ? ",

        A : " <p> ",
        B : " <i> ",
        C :  " <li> ",
        D :  " <b> ",
     correct : " <b> "
 
    },

    {
       question : "4. Which of the following HTML element is used for creating an unordered list? ",
       A : " <ui>",
       B : "<i>",
       C : "<em>",
       D : "<ul>",
       correct : "<ul>"
    },

    {
        question : "5. Which of the following characters indicate closing of a tag? ",
        A : ".",
        B : "/",
        C : "//",
        D : "!",
        correct : "/" 
        
    },

    {
       question : " 6. What is the font-size of the h1 heading tag?",
       A        : " 3.5 em",
       B        : " 2.17 em",
       C        : " 2 em",
       D        : " 1.5 em",
       correct  : " 2 em"

    },

    {
       question : "7. How many heading tags are there in HTML5?",
       A        : " 2",
       B        : "3",
       C        : "5",
       D        : "6",
       correct  : "6"
    
    },

    {
      question :  "8. How many attributes are there in HTML5?",
      A        : "2",
      B        :  "4",
      C        : "1",
      D        : " None of the Above",
      correct  : "None of the Above"

    },

    {
       question : "9. Which of the following attributes is used to add link to any element?",
       A        : "link",
       B        : " ref",
       C        : " href",
       D        : " newref",
       correct  :   " href"
    },

    {
        question : "10.  Which of the following is the correct way of creating an hyperlink in HTML?",
        A        : " <a>www.geeksforgeeks.org <Geeksforgeeks /a>",
        B        : " <a href=“www.geeksforgeeks.org” Geeksforgeeks /a>",
        C        : " <a href= “www.geeksforgeeks.org”>Geeksforgeeks</a>",
        D        : " <a link=“www.geeksforgeeks.org” Geeksforgeeks> </a>",
        correct  : " <a href= “www.geeksforgeeks.org”>Geeksforgeeks</a>"

    }

];



// got the element where all html question will show
var quest = document.getElementById("question");

// got that elements where all options will show
var option1 = document.getElementById('A');
var option2 = document.getElementById('B');
var option3 = document.getElementById('C');
var option4 = document.getElementById('D');

var index = 0;
var score = 0;


// next button function for html quiz
function nextQuestion(){
    //got options elements by name
    var options = document.getElementsByName("answer");
    // var btn = document.getElementById("btn");
    //stating loop for all options which are in array of objects
    for(i = 0; i < options.length; i++){
        if(options[i].checked){
            //in this line got the value of that option where user clicked
            var selected =   options[i].value;
            var userAnswer = htmlQuiz[index - 1]  [selected];
            // correct answer in the object 
            var correctAnswer =    htmlQuiz[index - 1].correct;
            // matching user answer with correct answer and increment in score
            if(userAnswer === correctAnswer){
                score++;
            }
            
        }
        //to uncheck options
        options[i].checked = false;
        //to disabled the button till user select the option
        btn.disabled = true;
    }
    //showing data in elements question and options
    if(index < htmlQuiz.length ){
        quest.innerHTML = htmlQuiz[index].question;
        option1.innerText = htmlQuiz[index].A;
        option2.innerText = htmlQuiz[index].B;
        option3.innerText = htmlQuiz[index].C;
        option4.innerText = htmlQuiz[index].D;
        // when user click next button and index will increment to show next question
        index++;
    }
    else{
        //will show average of score when quiz ends

        var resultDiv = document.getElementById("result-div1");
        var reultpara = document.getElementById("result-html")
        reultpara.innerHTML = "quiz is ended and your average result is " + (score / htmlQuiz.length) * 100 + "%";
        var okBtn = document.createElement("button");
        var btnText = document.createTextNode("OK");
        okBtn.appendChild(btnText);
        resultDiv.appendChild(okBtn);

        okBtn.addEventListener("click" , htmlQuizClear);
        

        cssBtn.disabled = false;
        javascriptBtn.disabled = false;
    };
    
    
};


nextQuestion();

// when user select the option function will enable next button
function enableBtn() {

    var btn = document.getElementById("btn");
    btn.disabled = false;
};


function htmlQuizClear(){

    quizDiv.style.display = "none";
};

//====================================================================/////////



// css quiz section.................................

var htmlBtn = document.getElementById("html-btn")
var cssBtn = document.getElementById("css-btn")
var javascriptBtn = document.getElementById("Javascript-btn")

//got the div where all quiz will show
var quizDiv2 = document.getElementById("quiz-div2");
quizDiv2.style.display = 'none';  


//press css button to show html quiz

function cssQuizStart(){


quizDiv2.style.display = "block";


htmlBtn.disabled = true;

javascriptBtn.disabled = true;

};

var cssQuiz = [
    {
      question: "1. Which property is used to change the font size of an element?",
       
        A: "font-size",
        B: "text-size",
        C: "font-style",
        D: "text-style",
      
        correct: "font-size"
    },
    {
      question: "2. Which property is used to specify the space between the lines of text?",
      
        A: "text-indent",
        B: "text-spacing",
        C: "line-height",
        D: "word-spacing",
      
        correct: "line-height"
    },
    {
      question: "3. Which property is used to change the color of the text?",
      
        A: "color",
        B: "text-color",
        C: "font-color",
        D: "text-style",
      
        correct: "color"
    },
    {
      question: "4. Which property is used to align the text to the right?",
      
        A: "text-align",
        B: "align",
        C: "text-style",
        D: "text-right",
      
        correct: "text-align"
    },
    {
      question: "5. Which property is used to create space around an element's content, inside the border?",
      
        A: "padding",
        B: "margin",
        C: "spacing",
        D: "border-spacing",
      
        correct: "padding"
    },
    {
      question: "6. Which property is used to change the background color of an element?",
      
        A: "background-color",
        B: "color",
        C: "background",
        D: "bg-color",
      
        correct: "background-color"
    },
    {
      question: "7. Which property is used to specify the space between the element's border and the content?",
      
        A: "padding",
        B: "margin",
        C: "border",
        D: "spacing",
      
        correct: "padding"
    },
    {
      question: "8. Which property is used to specify the font for an element?",
      
        A: "font-family",
        B: "text-font",
        C: "font-style",
        D: "font",
      
        correct: "font-family"
    },
    {
      question: "9. Which property is used to add a line below the text?",
      
        A: "text-decoration",
        B: "decoration-line",
        C: "text-line",
        D: "line-decoration",
      
        correct: "text-decoration"
    },
    {
      question: "10. Which property is used to specify the indentation of the first line in a text-block?",
      
        A: "text-indent",
        B: "indentation",
        C: "line-indent",
        D: "first-line-indent",
      
      correct: "text-indent"
    }
  ];
  

  var quizDiv2 = document.getElementById("quiz-div2");
  quizDiv2.style.display = "none";

  function cssQuizStart(){

    quizDiv2.style.display = "block";

    htmlBtn.disabled = true;
    javascriptBtn.disabled = true;
  }

// got the element where all css question will show
var quest2 = document.getElementById("question2");

// got that elements where all options will show
var option1Css = document.getElementById('A2');
var option2Css = document.getElementById('B2');
var option3Css = document.getElementById('C2');
var option4Css = document.getElementById('D2');

var index2 = 0;
var score2 = 0;


// next button function for css quiz
function nextQuestionCss(){
    //got options elements by name
    var options2 = document.getElementsByName("answer2");
    //stating loop for all options which are in array of objects
    for(i = 0; i < options2.length; i++){
        if(options2[i].checked){
            //in this line got the value of that option where user clicked
            var selected2 =   options2[i].value;
            var userAnswer2 = cssQuiz[index2 - 1]  [selected2];
            // correct answer in the object 
            var correctAnswer =    cssQuiz[index2 - 1].correct;
            // matching user answer with correct answer and increment in score
            if(userAnswer2 === correctAnswer){
                score2++;
            }
            
        }
        //to uncheck options
        options2[i].checked = false;
        //to disabled the button till user select the option
        btn2.disabled = true;
    }
    //showing data in elements question and options
    if(index2 < cssQuiz.length ){
    quest2.innerHTML = cssQuiz[index2].question;
    option1Css.innerText = cssQuiz[index2].A;
    option2Css.innerText = cssQuiz[index2].B;
    option3Css.innerText = cssQuiz[index2].C;
    option4Css.innerText = cssQuiz[index2].D;
// when user click next button and index will increment to show next question
    index2++;
    }
    else{
        //will show average of score when quiz ends

        var resultDiv = document.getElementById("result-div2");
        var reultpara = document.getElementById("result-css")
        reultpara.innerHTML = "quiz is ended and your average result is " + (score2 / cssQuiz.length) * 100 + "%";
        var okBtn = document.createElement("button");
        var btnText = document.createTextNode("OK");
        okBtn.appendChild(btnText);
        resultDiv.appendChild(okBtn);

        okBtn.addEventListener("click" , cssQuizClear);
        
        
        htmlBtn.disabled = false;
        javascriptBtn.disabled = false;
    };

    
};

nextQuestionCss();


// when user select the option function will enable next button
function enableBtn2() {

    var btn2 = document.getElementById("btn2");
    btn2.disabled = false;
};

function cssQuizClear(){

    quizDiv2.style.display = "none";
}

//=========================================================//


// javascript quiz section.........

var quizDiv3 = document.getElementById("quiz-div3");
  quizDiv3.style.display = "none";

  
  function javascriptQuizStart(){

    quizDiv3.style.display = "block";

    htmlBtn.disabled = true;
    cssBtn.disabled = true;

  };



// javascript quiz data

var javascriptQuiz = [
    {
      question: "1. Which keyword is used to declare a variable in JavaScript?",
      
        A: "var",
        B: "let",
        C: "const",
        D: "variable",
        answer: "var"
    },
    
    {
      question: "2. What is the correct way to write a JavaScript array?",
      
        A: '["apple", "banana", "orange"]',
        B: '["apple"; "banana"; "orange"]',
        C: '["apple", "banana", "orange"]',
        D: '("apple", "banana", "orange")',
      
      answer: '["apple", "banana", "orange"]'
    },
    {
      question: "3. Which function is used to print a value to the console in JavaScript?",
      
        A: "console.log()",
        B: "console.write()",
        C: "console.print()",
        D: "console.display()",
      
      answer: "console.log()"
    },
    {
      question: "4. What is the correct way to write a JavaScript if statement?",
      
        A: "if (x === 5) {}",
        B: "if x === 5 {}",
        C: "if (x = 5) {}",
        D: "if x = 5 {}",
      
      answer: "if (x === 5) {}"
    },
    {
      question: "5. What does the 'typeof' operator do in JavaScript?",
      
        A: "Returns the type of a variable",
        B: "Defines a new type",
        C: "Compares two values",
        D: "Performs type conversion",
      
      answer: " Returns the type of a variable"
    },
    {
      question: "6. Which operator is used for concatenating strings in JavaScript?",
      
        A: "+",
        B: "-",
        C: "*",
        D: "/",
      
      answer: "+"
    },
    {
      question: "7. What is the purpose of the 'return' statement in a JavaScript function?",
      
        A: "To terminate the function execution",
        B: "To specify the function's input parameters",
        C: "To store a value for later use",
        D: "To exit the program",
      
      answer: "To terminate the function execution"
    },
    {
      question: "8. Which method is used to add an element to the end of an array in JavaScript?",
      
        A: "push()",
        B: "pop()",
        C: "shift()",
        D: "unshift()",
      
      answer: "push()"
    },
    {
      question: "9. What is the purpose of the 'this' keyword in JavaScript?",
      
        A: "Refers to the current object",
        B: "Refers to the previous object",
        C: "Refers to the next object",
        D: "Refers to the global object",
      
      answer: "Refers to the current object"
    },
    {
      question: "10. What does the 'NaN' value represent in JavaScript?",
      
        A: "Not a Number",
        B: "Null",
        C: "Undefined",
        D: "Infinity",
      
      answer: "Not a Number"
    }
  ];



  // got the element where all css question will show
var quest3 = document.getElementById("question3");

// got that elements where all options will show
var option1Javascript = document.getElementById('A3');
var option2Javascript = document.getElementById('B3');
var option3Javascript = document.getElementById('C3');
var option4Javascript = document.getElementById('D3');

var index3 = 0;
var score3 = 0;


// next button function for javascript quiz
function nextQuestionJavascript(){
    //got options elements by name
    var options3 = document.getElementsByName("answer3");
    //stating loop for all options which are in array of objects
    for(i = 0; i < options3.length; i++){
        if(options3[i].checked){
            //in this line got the value of that option where user clicked
            var selected3 =   options3[i].value;
            var userAnswer3 = javascriptQuiz[index3 - 1]  [selected3];
            
            // correct answer in the object 
            var correctAnswer3 =    javascriptQuiz[index3 - 1].answer;
            console.log(correctAnswer3)
            // matching user answer with correct answer and increment in score
            if(userAnswer3 === correctAnswer3){
                score3++;
            }
            
        }
        //to uncheck options
        options3[i].checked = false;
        //to disabled the button till user select the option
        btn3.disabled = true;
    }
    //showing data in elements question and options
    if(index3 < javascriptQuiz.length ){
    quest3.innerHTML = javascriptQuiz[index3].question;
    option1Javascript.innerText = javascriptQuiz[index3].A;
    option2Javascript.innerText = javascriptQuiz[index3].B;
    option3Javascript.innerText = javascriptQuiz[index3].C;
    option4Javascript.innerText = javascriptQuiz[index3].D;
// when user click next button and index will increment to show next question
    index3++;
    }
    else{
        //will show average of score when quiz ends
        var resultDiv = document.getElementById("result-div3");
        var reultpara = document.getElementById("result-javascript")
        reultpara.innerHTML = "quiz is ended and your average result is " + (score3 / javascriptQuiz.length) * 100 + "%";
        var okBtn = document.createElement("button");
        var btnText = document.createTextNode("OK");
        okBtn.appendChild(btnText);
        resultDiv.appendChild(okBtn);

        okBtn.addEventListener("click" , javascriptQuizClear);

        
        htmlBtn.disabled = false;
        cssBtn.disabled = false;
    };

    
};

nextQuestionJavascript();


function enableBtn3() {

    var btn3 = document.getElementById("btn3");
    btn3.disabled = false;
};


function javascriptQuizClear(){

    quizDiv3.style.display = "none";
    
}
 
  

  
