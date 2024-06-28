
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";


const socialLinks = [
  {
    id: 1,
    icon: <FiGlobe />,
    url: "https://www.stoman.me/",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/",
  },
  {
    id: 3,
    icon: <FiTwitter />,
    url: "https://twitter.com/",
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/",
  },
  {
    id: 5,
    icon: <FiYoutube />,
    url: "https://www.youtube.com/c/",
  },
];


export default function App() {
  return (
    <MDBFooter className='text-center text-white  max-h-fit bg-emerald-600' >
      <MDBContainer className='h8  grid grid-cols-1 sm:grid-cols-6'>
      <section className=' sm:col-span-2 py-6z'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-14">
        <h3>
          Looking for help?
        </h3>
        </div>
          <p className='d-flex justify-content-center align-items-center'>
          Write us on: 
          <div>
          <a className='text-white' href='https://mdbootstrap.com/'>
            Keyrent@gmail.com
        </a>
          </div>
       
          </p>
        </section>
        <section className=' sm:col-span-2'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
            className="mx-auto h-20 w-20 my-4 mt-14"
            src="/keyrent.png"
            alt="Your Company"
          />
        </div>
          <p className='d-flex justify-content-center align-items-center'>
          © 2024 Keyrent:
        <a className='text-white' href='https://mdbootstrap.com/'>
           Keyrent.com
        </a>
          </p>
        </section>
        
        <section className=' sm:col-span-2'>
        <div className="font-general-regular flex flex-col justify-end items-center sm:mb-28 mt-12">
          <p className="text-xl sm:text-2xl text-primary-dark dark:text-primary-light mb-5">
           Follow us on
          </p>
          <ul className="flex sm:gap-2">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-2 mb-4 duration-300"
              >
                <i className="text-l sm:text-xl md:text-2xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
        </section>
      </MDBContainer>
  
    </MDBFooter>
  );
}

