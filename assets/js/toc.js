document.addEventListener('DOMContentLoaded', function() {
  const toc = document.getElementById('toc');
  const toggleButton = document.getElementById('toc-toggle');
  const main = document.querySelector('main');
  const headings = main.querySelectorAll('h1, h2, h3, h4, h5, h6');

  if (headings.length === 0) {
    toc.style.display = 'none';
    return;
  }

  const ul = document.createElement('ul');
  ul.className = 'toc-list';

  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = 'heading-' + index;
    }

    const li = document.createElement('li');
    li.className = 'toc-item toc-level-' + heading.tagName.toLowerCase();
    const a = document.createElement('a');
    a.href = '#' + heading.id;
    a.textContent = heading.textContent;
    li.appendChild(a);

    ul.appendChild(li);
  });

  const tocTitle = document.createElement('h2');
  tocTitle.textContent = 'Оглавление';
  toc.appendChild(tocTitle);
  toc.appendChild(ul);

  // Toggle TOC visibility
  toggleButton.addEventListener('click', function() {
    toc.classList.toggle('toc-visible');
    this.textContent = toc.classList.contains('toc-visible') ? 'Скрыть оглавление' : 'Показать оглавление';
  });
});