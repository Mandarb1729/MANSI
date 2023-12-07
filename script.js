document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const main = document.querySelector('main');
    fetch(href)
      .then(response => response.text())
      .then(data => {
        main.innerHTML = data;
      });
  });
});
// Define the courses data structure
const coursesData = {
    math: {
        school: {
            paper1: ['Algebra', 'Geometry'],
            paper2: ['Calculus', 'Statistics'],
        },
        undergraduate: {
            paper1: ['Linear Algebra', 'Number Theory'],
            paper2: ['Calculus II', 'Probability'],
        },
        // Define courses for other learner levels and papers
    },
    stats: {
        // Define courses for different learner levels and papers
    }
};

// Populate learner levels dropdown based on the selected subject
function populateLevels() {
    const subjectSelect = document.getElementById('subject');
    const levelSelect = document.getElementById('level');
    const selectedSubject = subjectSelect.value;

    // Clear previous options
    levelSelect.innerHTML = '<option value="">Select Learner Level</option>';

    if (selectedSubject) {
        const learnerLevels = Object.keys(coursesData[selectedSubject]);
        learnerLevels.forEach(level => {
            const option = document.createElement('option');
            option.value = level;
            option.textContent = level;
            levelSelect.appendChild(option);
        });
    }
}

// Populate papers dropdown based on the selected learner level
function populatePapers() {
    const subjectSelect = document.getElementById('subject');
    const levelSelect = document.getElementById('level');
    const paperSelect = document.getElementById('paper');
    const selectedSubject = subjectSelect.value;
    const selectedLevel = levelSelect.value;

    // Clear previous options
    paperSelect.innerHTML = '<option value="">Select Paper</option>';

    if (selectedSubject && selectedLevel) {
        const papers = Object.keys(coursesData[selectedSubject][selectedLevel]);
        papers.forEach(paper => {
            const option = document.createElement('option');
            option.value = paper;
            option.textContent = paper;
            paperSelect.appendChild(option);
        });
    }
}

// Populate concepts dropdown based on the selected paper
function populateConcepts() {
    const subjectSelect = document.getElementById('subject');
    const levelSelect = document.getElementById('level');
    const paperSelect = document.getElementById('paper');
    const conceptSelect = document.getElementById('concept');
    const selectedSubject = subjectSelect.value;
    const selectedLevel = levelSelect.value;
    const selectedPaper = paperSelect.value;

    // Clear previous options
    conceptSelect.innerHTML = '<option value="">Select Concept</option>';

    if (selectedSubject && selectedLevel && selectedPaper) {
        const concepts = coursesData[selectedSubject][selectedLevel][selectedPaper];
        concepts.forEach(concept => {
            const option = document.createElement('option');
            option.value = concept;
            option.textContent = concept;
            conceptSelect.appendChild(option);
        });
    }
}

// Show the selected courses on the page
function showSelectedCourses() {
    const subjectSelect = document.getElementById('subject');
    const levelSelect = document.getElementById('level');
    const paperSelect = document.getElementById('paper');
    const conceptSelect = document.getElementById('concept');
    const selectedSubject = subjectSelect.value;
    const selectedLevel = levelSelect.value;
    const selectedPaper = paperSelect.value;
    const selectedConcept = conceptSelect.value;

    const selectedCourses = document.getElementById('selectedCourses');
    selectedCourses.innerHTML = `
        <h2>Selected Courses:</h2>
        <p>Subject: ${selectedSubject}</p>
        <p>Learner Level: ${selectedLevel}</p>
        <p>Paper: ${selectedPaper}</p>
        <p>Concept: ${selectedConcept}</p>
    `;
}