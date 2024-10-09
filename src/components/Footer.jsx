import { useContext } from 'react';
import { UserContext } from '../App';

const Footer = () => {
  const { data, setData } = useContext(UserContext);

  return (
    <div>
      <p>{data}</p>
      <button onClick={() => setData("Updated data!")}>Update Data</button>
    </div>
  );
}

export default Footer;
