// components/GitHubStats.js
export default function GitHubStats() {
    return (
      <section className="p-10 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold">GitHub Stats</h2>
        <img
          src="https://github-readme-stats.vercel.app/api?username=ZayanMustafa&show_icons=true&theme=radical"
          alt="GitHub Stats"
          className="mx-auto mt-5"
        />
      </section>
    );
  }
  