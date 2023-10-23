import Header from './Header';
import FilterBar from '../filters/FilterBar';

const MainLayout: React.FC<any> = ({ children }) => {
  return (
    <div className="">
      <Header />
      <FilterBar />
      <div className="">{children}</div>
    </div>
  );
};

export default MainLayout;
