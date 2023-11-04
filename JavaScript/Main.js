function sayHello() {
  alert("Hello");
}

const textload = () => {
  setTimeout(() => {
    text.textContent = "Coding";
  }, 0);
  setTimeout(() => {
    text.textContent = "Learning";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Sleeping";
  }, 8000);
  setTimeout(() => {
    text.textContent = "Growing up";
  }, 12000);
};
