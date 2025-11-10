export default function decorate(block) {
  // Extract date, author, tags from the auto-blocked structure
  const [dateCell, authorCell, tagsCell] = [...block.children[0].children];
  const date = dateCell.textContent.trim();
  const author = authorCell.textContent.trim();
  const tags = tagsCell.textContent.trim();

  // Create new structure
  const container = document.createElement('div');
  container.className = 'blog-header-container';

  // Meta section (date and author)
  const meta = document.createElement('div');
  meta.className = 'blog-header-meta';

  // Date
  if (date) {
    const dateWrapper = document.createElement('p');
    dateWrapper.className = 'blog-header-date';

    const time = document.createElement('time');
    time.textContent = date;
    dateWrapper.appendChild(time);

    // Add RSS icon
    const rssLink = document.createElement('a');
    rssLink.href = '/feed';
    rssLink.setAttribute('aria-label', 'Atom Feed');
    rssLink.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="6.18" cy="17.82" r="2.18"/><path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/></svg>';
    dateWrapper.appendChild(rssLink);

    meta.appendChild(dateWrapper);
  }

  // Author
  if (author) {
    const authorWrapper = document.createElement('ul');
    authorWrapper.className = 'blog-header-author';

    const li = document.createElement('li');
    const authorLink = document.createElement('a');

    // Convert author name to GitHub username format (lowercase, no spaces)
    const githubUsername = author.toLowerCase().replace(/\s+/g, '');
    authorLink.href = `https://github.com/${githubUsername}`;

    // Add author image from GitHub
    const img = document.createElement('img');
    img.src = 'https://avatars.githubusercontent.com/u/2760139?v=4'; // This could be enhanced to lookup actual user
    img.alt = author;
    img.width = 40;
    img.height = 40;
    img.loading = 'lazy';
    authorLink.appendChild(img);

    // Add author name
    const nameSpan = document.createElement('span');
    nameSpan.textContent = author;
    authorLink.appendChild(nameSpan);

    li.appendChild(authorLink);
    authorWrapper.appendChild(li);
    meta.appendChild(authorWrapper);
  }

  container.appendChild(meta);

  // Tags
  if (tags) {
    const tagsWrapper = document.createElement('ul');
    tagsWrapper.className = 'blog-header-tags';

    // Split by comma in case there are multiple tags
    const tagList = tags.split(',').map((t) => t.trim()).filter((t) => t);
    tagList.forEach((tag) => {
      const li = document.createElement('li');
      const tagLink = document.createElement('a');
      tagLink.href = `/blog?tag=${tag.toLowerCase()}`;
      tagLink.textContent = tag;
      li.appendChild(tagLink);
      tagsWrapper.appendChild(li);
    });

    container.appendChild(tagsWrapper);
  }

  // Replace block content
  block.textContent = '';
  block.appendChild(container);
}
