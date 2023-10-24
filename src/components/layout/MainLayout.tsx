import Header from './Header';
import FilterBar from '../filters/FilterBar';

const MainLayout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Header />
      <FilterBar />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
