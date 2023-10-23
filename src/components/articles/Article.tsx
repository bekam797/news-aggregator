interface ArticleProps {
  article: {
    title: string;
    author: string;
    date: string;
    content: string;
  };
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover-underline-title ">
      <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
        <div className="flex justify-between text-gray-500">
          <span className="font-semibold">The New York Times</span>
          <span>{article.date}</span>
        </div>

        <h1 className="text-2xl font-bold my-4 underline-on-hover">{article.title}</h1>

        <img
          src="https://via.placeholder.com/150"
          alt="Article Image"
          className="rounded-lg w-full h-48 object-cover my-4"
        />

        <p>{article.content}</p>
      </a>
      <div className="flex justify-end">
        <button>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 2C4.89543 2 4 2.89543 4 4V20L12 15L20 20V4C20 2.89543 19.1046 2 18 2H6ZM6 0C3.79086 0 2 1.79086 2 4V20.8284C2 21.4222 2.63214 21.85 3.17157 21.541L12 16.316L20.8284 21.541C21.3679 21.85 22 21.4222 22 20.8284V4C22 1.79086 20.2091 0 18 0H6Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Article;
