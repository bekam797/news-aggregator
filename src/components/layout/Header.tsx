import SearchBar from '../SearchBar';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // const handleDateChange = (date: Date | null) => {
  //   setSelectedDate(date);
  // };
  // const [selectedSource, setSelectedSource] = useState<string | null>(null);

  // const handleSourceChange = (source: string) => {
  //   setSelectedSource(source);
  // };

  return (
    <header className="bg-white p-4 pb-[10px] border-solid border-b-[1px] border-b-[#dadce0]">
      <div className="mx-auto flex justify-between items-center">
        <Link to="/" className="text-black font-bold text-xl">
          NewsAggrr
        </Link>
        <SearchBar containerClassName="w-[40%]" />
        <ul className="space-x-4 flex-wrap text-[#5f6368] font-medium text-sm hidden lg:flex">
          <li className="text-black ">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li className="text-black ">
            <NavLink to="/favorites" className={({ isActive }) => (isActive ? 'active' : '')}>
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
