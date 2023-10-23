import ArticleList from '../../components/articles/ArticleList';

const articles = [
  {
    id: 1,
    title: 'Title 1',
    author: 'Author 1',
    date: '2023-10-21',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae velit ullamcorper pulvinar.',
    category: 'Technology',
    source: 'NewsAPI'
  },
  {
    id: 2,
    title: 'Title 2',
    author: 'Author 2',
    date: '2023-10-20',
    content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    category: 'Business',
    source: 'The Guardian'
  },
  {
    id: 2,
    title: 'Title 2',
    author: 'Author 2',
    date: '2023-10-20',
    content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    category: 'Business',
    source: 'The Guardian'
  },
  {
    id: 2,
    title: 'Title 2',
    author: 'Author 2',
    date: '2023-10-20',
    content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    category: 'Business',
    source: 'The Guardian'
  }
];

const HomePage: React.FC = () => {
  return <ArticleList articles={articles} />;
};

export default HomePage;
