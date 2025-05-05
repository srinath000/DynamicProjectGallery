document.addEventListener('DOMContentLoaded', function () {
    
    const titles = ['Task 1: Expectation Document', 'Task 2: Basic HTML Styling', 'Task 3: CSS Hover', 'Task 4: Welcome to JS',
        'Task 5: Calculator with JS', 'Task 6: GitHub Integration', 'Task 7: Console Output', 'Task 8: String Operation',
        'Task 9: Conditions', 'Task 10: Call-Stack with Array', 'Task 11: Star with Loops', 'Task 12: Class Work',
        'Task 13: Class Work - Objects', 'Task 14a: Class Work - Objects 2', 'Task 14b: Class Work - Functions',
        'Task 15: Class Work - Class & Bootstrap', 'Task 16: Class Work - JSON'];
    
    
    const nav = document.querySelector('nav');
    titles.forEach((title, index) => {
        const button = document.createElement('button');
        button.textContent = title;
        button.addEventListener('click', () => loadContent(index + 1));
        nav.appendChild(button);
    });
});

function loadContent(taskNumber) {
    const content = document.getElementById('content');
    content.innerHTML = '<iframe src="work/classwork' + taskNumber + (taskNumber.suffix ? taskNumber.suffix : '') + '/classwork' + taskNumber + (taskNumber.suffix ? taskNumber.suffix : '')+ '.html" style="width:100%; height:400px; border:none;"></iframe>';
    //content.innerHTML = '<iframe src="works/classwork' + taskNumber + (taskNumber.suffix ? taskNumber.suffix : '') + '/classwork' + taskNumber + (taskNumber.suffix ? taskNumber.suffix : '') + '.html" style="width:100%; height:400px; border:none;"></iframe>';
}