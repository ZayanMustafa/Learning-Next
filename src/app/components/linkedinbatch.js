 // components/LinkedInBadge.js
 export default function LinkedInBadge() {
    return (
      <section className="p-10 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold">Connect with Me</h2>
        <div className="mt-5">
          <a href="https://www.linkedin.com/in/zayyanmustafa/" target="_blank" rel="noopener noreferrer">
            <img
              src="/linkedin-badge.png" 
              alt="LinkedIn Profile"
              className="mx-auto"
            />
          </a>
        </div>
      </section>
    );
  }
