(function () {
  const hostParts = window.location.hostname.split('.');
  const isGitHubPages = hostParts.length >= 3 && hostParts.slice(-2).join('.') === 'github.io';
  const owner = isGitHubPages ? hostParts[0] : '330904798';
  const repo = isGitHubPages ? window.location.pathname.split('/').filter(Boolean)[0] : 'house-prices-advanced-regression';
  const base = `https://github.com/${owner}/${repo}`;

  document.querySelectorAll('.repo-link').forEach((link) => {
    link.href = base;
  });
  document.querySelectorAll('.notebook-link').forEach((link) => {
    link.href = `${base}/blob/main/notebooks/house-prices-analysis.ipynb`;
  });
})();
