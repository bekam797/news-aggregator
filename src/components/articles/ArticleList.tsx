import Article from './Article';

interface ArticleListProps {
  articles: Array<{
    title: string;
    author: string;
    date: string;
    content: string;
  }>;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="article-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
