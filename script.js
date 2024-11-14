function showComparison() {
    const selectedLanguages = [];
    const languages = ['Python', 'CSharp','TypeScript' ,'JavaScript', 'Java', 'Go', 'Rust', 'Swift'];
  
    // Collect selected languages
    languages.forEach(language => {
      if (document.getElementById(language.toLowerCase() + 'Checkbox').checked) {
        selectedLanguages.push(language);
      }
    });
  
    // If fewer than 2 languages are selected, show an error
    if (selectedLanguages.length < 2) {
      document.getElementById('error-message').textContent = 'Please select at least two languages to compare.';
      document.getElementById('comparison-table').style.display = 'none';
      return;
    }
  
    // Hide error message and display table
    document.getElementById('error-message').textContent = '';
    document.getElementById('comparison-table').style.display = 'block';
  
    // Update table header with selected languages
    const tableHeader = document.querySelector('thead tr');
    tableHeader.innerHTML = '<th>Feature</th>';
    selectedLanguages.forEach(language => {
      const th = document.createElement('th');
      th.textContent = language;
      tableHeader.appendChild(th);
    });
  
    // Update table body with comparison data
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
  
    const features = Object.keys(comparisonData[selectedLanguages[0]]);
    features.forEach(feature => {
      const tr = document.createElement('tr');
      const featureTd = document.createElement('td');
      featureTd.textContent = feature;
      tr.appendChild(featureTd);
  
      selectedLanguages.forEach(language => {
        const td = document.createElement('td');
        td.textContent = comparisonData[language][feature];
        tr.appendChild(td);
      });
  
      tableBody.appendChild(tr);
    });
  }
  
  function toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }
  