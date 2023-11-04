function sayHello() {
  alert("Hello");
}

const textload = () => {
  setTimeout(() => {
    text.textContent = "Coding";
  }, 0);
  setTimeout(() => {
    text.textContent = "Sleeping";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Learning";
  }, 8000);
  setTimeout(() => {
    text.textContent = "Exciting";
  }, 12000);
};
