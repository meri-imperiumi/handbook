const checklist = document.querySelectorAll('label.task-list-control');
if (checklist) {
  checklist.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      const inputs = checkbox.getElementsByTagName('input');
      if (inputs.length) {
        inputs[0].toggleAttribute('checked');
      }
    });
  });
}
