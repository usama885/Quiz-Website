////////////   Front-Page  ///////////////
const loginDisplay = document.querySelector(".front-page");
const labelWelcome = document.querySelector(".welcome");
const student = document.querySelector(".student");
const teacherr = document.querySelector(".teacher");

////////////   Question-Form  ///////////////
const question_form = document.querySelector(".question-form");
const closeModal7 = document.querySelector(".close4");
const input_question = document.getElementById("input-question"); //
const option_1 = document.getElementById("input-o1");
const option_2 = document.getElementById("input-o2");
const option_3 = document.getElementById("input-o3");
const option_4 = document.getElementById("input-o4");
const correct_option = document.getElementById("input-co");
const closeModal8 = document.querySelector(".cancelbtn4");
const signUpbtn4 = document.querySelector(".signupbtn4");

////////////   Sign-Up form for Students   //////////////////
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const input_name = document.getElementById("input-name");
const input_picture = document.getElementById("input-picture");
const input_roll_no = document.getElementById("input-roll-no");
const input_father = document.getElementById("input-father");
const input_dateOfBirth = document.getElementById("input-dateOfBirth");
const input_tel = document.getElementById("input-tel");
const input_padress = document.getElementById("input-padress");
const input_email = document.getElementById("input-email");
const input_blood_group = document.getElementById("input-blood-group");
const input_student_id = document.getElementById("input-student-id");
const input_section = document.getElementById("input-section");
const input_gender = document.getElementById("input-gender");
const input_religion = document.getElementById("input-religion");
const input_academic_year = document.getElementById("input-academic-year");
const input_password = document.getElementById("input-password");
// const father = document.getElementById("father");

const closeModal2 = document.querySelector(".cancelbtn");
const signBtn = document.querySelector(".signupbtn");

////////////   log-in Form for student   //////////////////
const modal2 = document.querySelector(".modal2");
const closeModal3 = document.querySelector(".close2");
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const btnLogin = document.querySelector(".login-2");
const closeModal4 = document.querySelector(".cancelbtn-2");
const signUpbtn = document.querySelector(".student-signup");

////////////   log-in Form for Teacher   //////////////////
const modal5 = document.querySelector(".modal5");
const closeModal9 = document.querySelector(".close5");
const inputLoginUsername2 = document.querySelector(".login__teacher__user");
const inputLoginPin2 = document.querySelector(".login__teacher__pin");
const btnLogin2 = document.querySelector(".login-teacher");
const closeModal10 = document.querySelector(".cancelbtn-5");
const teacher_signup = document.querySelector(".teacher-signup");
////////////   Sign-Up form for teachers   //////////////////
const modal3 = document.querySelector(".modal3");
const closeModal5 = document.querySelector(".close3");
const input_2 = document.getElementById("input-2");
const password_2 = document.getElementById("password-2");
const closeModal6 = document.querySelector(".cancelbtn3");
const signUpbtn3 = document.querySelector(".signupbtn3");
////////////   Quiz Containers   //////////////////
const containerApp = document.querySelector(".quiz-container");
const usama = document.querySelector(".usama");
const labelDate = document.querySelector(".date");
const quizEl = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const answerEls = document.querySelectorAll(".answer");
const backEl = document.getElementById("back");
const submitEl = document.getElementById("submit");
const nextEl = document.getElementById("next");
const labelTimer = document.querySelector(".timer");
const questionLeft = document.querySelector(".logout-timer-1");
// const finishEl = document.getElementById("finish");

//////////// Student Portal  ////////////
const student_portal = document.querySelector(".student-portal");
const profile_img = document.querySelector(".profile_img");
const owner = document.querySelector(".owner");
const student_id = document.querySelector(".student-id");
const classs = document.querySelector(".class");
const section = document.querySelector(".section");
const roll_no = document.querySelector(".roll-no");
const academic_year = document.querySelector(".academic-year");
const gender = document.querySelector(".gender");
const religion = document.querySelector(".religion");
const blood_group = document.querySelector(".blood-group");
const email = document.querySelector(".email");
const start_quiz = document.querySelector(".start-quiz");

////////////   Default Data_types  ///////////////
// displayQuiz.style.display = "block";

let currentAccount,
  currentTeacher,
  timer,
  score = 0;

////////////////  Teacher-Login  //////////////

btnLogin2.addEventListener("click", (e) => {
  e.preventDefault();

  currentTeacher = teachers.find(
    // (acc) => acc.owner === inputLoginUsername.value
    (teach) => teach.username === inputLoginUsername2.value
  );
  console.log(currentTeacher);

  if (currentTeacher?.pin === +inputLoginPin2.value) {
    loginDisplay.style.display = "none";
    modal5.style.display = "none";
    modal2.style.display = "none";
    question_form.style.display = "block";
    inputLoginUsername2.value = inputLoginPin2.value = "";
    inputLoginPin.blur();
  } else {
    alert("Invalid Username or Password!");
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
  }
});
///////////////   Student-Login  ///////////////

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  currentAccount = accounts.find(
    // (acc) => acc.owner === inputLoginUsername.value
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount, "Usama");

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message

    loginDisplay.style.display = "none";
    student_portal.style.display = "block";
    modal2.style.display = "none";

    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    profile_img.textContent = `${currentAccount.profile_img}`;
    owner.textContent = `${currentAccount.owner}`;
    student_id.textContent = `${currentAccount.student_id}`;
    // classs.textContent = `${currentAccount.classs}`; skip
    section.textContent = `${currentAccount.section}`;
    roll_no.textContent = `${currentAccount.roll_no}`;
    academic_year.textContent = `${currentAccount.academic_year}`;
    gender.textContent = `${currentAccount.gender}`;
    religion.textContent = `${currentAccount.religion}`;
    blood_group.textContent = `${currentAccount.blood_group}`;
    email.textContent = `${currentAccount.email}`;
  } else {
    alert("Invalid Username or Password!");
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
  }
});

start_quiz.addEventListener("click", (e) => {
  e.preventDefault();
  containerApp.style.display = "block";
  loginDisplay.style.display = "none";
  student_portal.style.display = "none";
  modal2.style.display = "none";

  usama.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;

  // Create current date and time
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    //   // weekday: 'long',
  };
  //// const locale = navigator.language;
  //// console.log(locale);
  labelDate.textContent = new Intl.DateTimeFormat(
    currentAccount.locale,
    options
  ).format(now);

  // Timer;
  if (timer) clearInterval(timer);
  timer = startLogOutTimer();

  // Update UI
  displayQuiz(currentAccount);
});

////////////   Display-Quiz  ///////////////

const displayQuiz = function () {
  let currentQuiz = 0;
  function loadQuiz() {
    deSelectAnswers(); // Sab Answerr ka checked marks deslect o jai gai
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    questionLeft.textContent = `Question ${currentQuiz + 1} of ${
      quizData.length
    }`;
  }
  loadQuiz(); // Strt ma ak bar load lazmi ho ga

  ///////////////   check box select krna ka lya   ///////////////////////
  function getselected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  ///////////////   Sab Answerr ka checked marks ko deslect krna ka lya   ///////////////////////
  function deSelectAnswers() {
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
    });
  }
  ///////////////   Submit Button   ///////////////////////
  submitEl.addEventListener("click", function () {
    const answer = getselected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quizEl.innerHTML = `<div class="last"><h3>Your answered correctly at ${score}/${quizData.length}</h3> <button class="retake" onClick="location.reload()">Reload</button></div>`;
      }
    }
    if (answer === undefined) {
      alert("Please Select One Option");
    }
  });

  ///////////////   Next Button   ///////////////////////
  nextEl.addEventListener("click", function () {
    const answer = getselected();
    if (answer === undefined) {
      if (currentQuiz < quizData.length - 1) {
        currentQuiz++;
        loadQuiz();
      } else if (currentQuiz === quizData.length - 1) {
        alert("This Is Your last Question!");
      }
    }
  });
  ///////////////   Back Button   ///////////////////////
  backEl.addEventListener("click", function () {
    const answer = getselected();
    if (answer === undefined) {
      if (currentQuiz >= 1) {
        currentQuiz--;
        loadQuiz();
      } else if (currentQuiz < 1) {
        alert("This Is Your First Question!");
      }
    }
  });
};

////////////   Quiz-Timer  ///////////////

function startLogOutTimer() {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);

      {
        quizEl.innerHTML = `<div class="last"><h3 class = "quiz-answer-h3">Your answered correctly at ${score}/${quizData.length}</h3> <button class="retake" onClick="location.reload()">Reload</button></div>`;
      }
    }

    // Decrease 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 1000;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
}

/////////////////////////////////////////////////////////////////////////

////////////   Quiz_Date (Todo)  ///////////////

const quiz_q = {};
const quizData = [];

console.log(quizData, "All Quiz");

const todos_3 = JSON.parse(localStorage.getItem("todos_3"));
if (todos_3) {
  todos_3.forEach((todo) => {
    addTodo_3(todo);
  });
}

signUpbtn4.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("fffff");
  addTodo_3();
});

function addTodo_3(todo) {
  let todo_questions = input_question.value;
  let todo_option1 = option_1.value;
  let todo_option2 = option_2.value;
  let todo_option3 = option_3.value;
  let todo_option4 = option_4.value;
  let todo_correct_option = correct_option.value;

  if (todo) {
    todo_questions = todo.question;
    todo_option1 = todo.a;
    todo_option2 = todo.b;
    todo_option3 = todo.c;
    todo_option4 = todo.d;
    todo_correct_option = todo.correct;
  }

  if (
    todo_questions &&
    todo_option1 &&
    todo_option2 &&
    todo_option3 &&
    todo_option4 &&
    todo_correct_option
  ) {
    const z = Object.create(quiz_q);

    // console.log(x);
    z.question = todo_questions;
    z.a = todo_option1;
    z.b = todo_option2;
    z.c = todo_option3;
    z.d = todo_option4;
    z.correct = todo_correct_option;

    quizData.push(z);

    input_question.value = "";
    option_1.value = "";
    option_2.value = "";
    option_3.value = "";
    option_4.value = "";
    correct_option.value = "";

    updateLQ();
    // openLoginPage();
  } else {
    alert("Please Fill out all Options!");
  }
}

function updateLQ() {
  const todos_3 = [];

  quizData.forEach((todoE) => {
    todos_3.push({
      question: todoE.question,
      a: todoE.a,
      b: todoE.b,
      c: todoE.c,
      d: todoE.d,
      correct: todoE.correct,
    });
  });

  localStorage.setItem("todos_3", JSON.stringify(todos_3));
}

////////////   Teachers_Data (Todo)  ///////////////

const teacher = {};
const teachers = [];
console.log(teachers, "teachers");

const todos_2 = JSON.parse(localStorage.getItem("todos_2"));
if (todos_2) {
  todos_2.forEach((todo) => {
    addTodo_2(todo);
  });
}

signUpbtn3.addEventListener("click", (e) => {
  e.preventDefault();
  addTodo_2();
});

function addTodo_2(todo) {
  let todoText_2 = input_2.value;
  let todoPassword_2 = password_2.value;

  if (todo) {
    todoText_2 = todo.text;
    todoPassword_2 = todo.pin;
  }

  if (todoText_2 && todoPassword_2) {
    const y = Object.create(teacher);

    // console.log(x);
    y.owner = todoText_2;
    y.pin = +todoPassword_2;
    y.username = todoText_2
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
    teachers.push(y);

    input_2.value = "";
    password_2.value = "";

    updateLT();
    // open_front_Page();
  } else {
    alert("Please Fill the Both Options!");
  }
}

function updateLT() {
  const todos_2 = [];

  teachers.forEach((todoE) => {
    todos_2.push({
      text: todoE.owner,
      pin: todoE.pin,
      username: todoE.username,
    });
  });

  localStorage.setItem("todos_2", JSON.stringify(todos_2));
}
////////////   Student_Data (Todo)  ///////////////

const account = {};
const accounts = [];
console.log(accounts, "accounts");
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

signBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoOwner = input_name.value;
  let todopicture = input_picture.value;
  let todoPassword = input_password.value;
  let todorollno = input_roll_no.value;
  let todofather = input_father.value;
  let tododateOfBirth = input_dateOfBirth.value;
  let todotel = input_tel.value;
  let todopadress = input_padress.value;
  let todoemail = input_email.value;
  let todobloodgroup = input_blood_group.value;
  let todostudentid = input_student_id.value;
  let todosection = input_section.value;
  let todogender = input_gender.value;
  let todoreligion = input_religion.value;
  let todoacademicyear = input_academic_year.value;

  if (todo) {
    todoOwner = todo.owner;
    todopicture = todo.picture;
    todoPassword = todo.pin;
    todorollno = todo.roll_no;
    todofather = todo.fatherName;
    tododateOfBirth = todo.dob;
    todotel = todo.telephone;
    todopadress = todo.padress;
    todoemail = todo.email;
    todobloodgroup = todo.blood_group;
    todostudentid = todo.student_id;
    todosection = todo.section;
    todogender = todo.gender;
    todoreligion = todo.religion;
    todoacademicyear = todo.academic_year;
  }

  if (
    todoOwner &&
    todopicture &&
    tododateOfBirth &&
    todoPassword &&
    todorollno &&
    todofather &&
    tododateOfBirth &&
    todotel &&
    todopadress &&
    todoemail &&
    todobloodgroup &&
    todostudentid &&
    todosection &&
    todogender &&
    todoreligion &&
    todoacademicyear
  ) {
    const x = Object.create(account);

    x.owner = todoOwner;
    x.username = todoOwner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
    x.picture = todopicture;
    x.pin = +todoPassword;
    x.roll_no = +todorollno;
    x.fatherName = todofather;
    x.dob = tododateOfBirth;
    x.telephone = todotel;
    x.padress = todopadress;
    x.email = todoemail;
    x.blood_group = todobloodgroup;
    x.student_id = todostudentid;
    x.section = todosection;
    x.gender = todogender;
    x.religion = todoreligion;
    x.academic_year = todoacademicyear;
    accounts.push(x);

    input_name.value = "";
    input_password.value = "";
    input_roll_no.value = "";
    input_father.value = "";
    input_dateOfBirth.value = "";
    input_tel.value = "";
    input_padress.value = "";
    input_email.value = "";
    input_blood_group.value = "";
    input_student_id.value = "";
    input_section.value = "";
    input_gender.value = "";
    input_religion.value = "";
    input_academic_year.value = "";

    updateLS();
    // openModal2();
    // openModal2();
    // open_front_Page();
  }
}

function updateLS() {
  const todos = [];

  accounts.forEach((todoE) => {
    todos.push({
      owner: todoE.owner,
      picture: todoE.picture,
      pin: todoE.pin,
      roll_no: todoE.roll_no,
      username: todoE.username,
      fatherName: todoE.fatherName,
      dob: todoE.dob,
      telephone: todoE.telephone,
      padress: todoE.padress,
      email: todoE.email,
      blood_group: todoE.blood_group,
      student_id: todoE.student_id,
      section: todoE.section,
      gender: todoE.gender,
      religion: todoE.religion,
      academic_year: todoE.academic_year,
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
////////////////////////////////////////////////////////////////////////

////////////   Open the main Login Page  ///////////////

function open_front_Page() {
  modal2.style.display = "none";
  modal.style.display = "none";
  modal3.style.display = "none";
  modal5.style.display = "none";
  question_form.style.display = "none";
  loginDisplay.style.display = "block";
}

////////////   Open-Student Login Form  ///////////////

function open_std_login_form(e) {
  e.preventDefault();
  loginDisplay.style.display = "none";
  modal.style.display = "none";
  modal2.style.display = "block";
}

////////////   Open-Student Sign-Up Form  ///////////////

function open_std_signup_form(e) {
  e.preventDefault();
  loginDisplay.style.display = "none";
  modal2.style.display = "none";
  modal.style.display = "block";
}

////////////   Open-Teacher Sign-Up Form  ///////////////

function open_teach_signup_form(e) {
  e.preventDefault();
  loginDisplay.style.display = "none";
  modal5.style.display = "none";
  modal3.style.display = "block";
}

////////////   Question Fill-up form  ///////////////

function openModal4(e) {
  e.preventDefault();
  loginDisplay.style.display = "none";
  question_form.style.display = "block";
}

////////////   Log-in Form of Teacher ///////////////

function open_teach_login_form(e) {
  e.preventDefault();
  loginDisplay.style.display = "none";
  modal3.style.display = "none";
  modal5.style.display = "block";
}
////////////   Button-Handlings  ///////////////

signUpbtn.addEventListener("click", open_std_signup_form);

teacher_signup.addEventListener("click", open_teach_signup_form);

closeModal.addEventListener("click", open_std_login_form);
closeModal2.addEventListener("click", open_std_login_form);
student.addEventListener("click", open_std_login_form);

closeModal5.addEventListener("click", open_teach_login_form);
closeModal6.addEventListener("click", open_teach_login_form);
teacherr.addEventListener("click", open_teach_login_form);

closeModal3.addEventListener("click", open_front_Page);
closeModal4.addEventListener("click", open_front_Page);
closeModal7.addEventListener("click", open_front_Page);
closeModal8.addEventListener("click", open_front_Page);
closeModal8.addEventListener("click", open_front_Page);
closeModal9.addEventListener("click", open_front_Page);
closeModal10.addEventListener("click", open_front_Page);
