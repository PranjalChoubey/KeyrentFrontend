import Navbar from "./navbar"
import Footer from "./footer"
import Pagination from "./pagination"
const people = [
    {
      Name: 'Leslie 1',
      Property: 'Property Name 1',
      Landlord: 'Landloard Name 1',
      Amount: '$ 2',
      Details: "NA"
    },
    {
      Name: 'Leslie 2',
      Property: 'Property Name 1',
      Landlord: 'Landloard Name 1',
      Amount: '$1',
      Details: "NA"
    },
    {
      Name: 'Leslie 3',
      Property: 'Property Name 1',
      Landlord: 'Landloard Name 1',
      Amount: '$2',
      Details: "NA"
    },
    {
      Name: 'Leslie 4',
      Property: 'Property Name 1',
      Landlord: 'Landloard Name 1',
      Amount: '$3',
      Details: "NA"
    },
    {
      Name: 'Leslie 5',
      Property: 'Property Name 1',
      Landlord: 'Landloard Name 1',
      Amount: '$4 ',
      Details: "NA"
    },
    {
      Name: 'Leslie 6',
      Property: 'Property Name 1',
      Landlord: 'Landloard Name 1',
      Amount: '$5',
      Details: "NA"
    },
 
   
  ]
  
  export default function Payment() {
    return (
        <>
        <Navbar/>
        <div>
            <h2 className="flex justify-center align-middle text-emerald-600
            m-8 py-4 font-extrabold border-b-8 border-t-8 border-emerald-600">
                Payment Due
            </h2>
        </div>
      <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li key={person.email} className="flex mt-10 justify-evenly gap-x-3">
            <div className="flex gap-x-4 px-4 min-w-0">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.Name}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end  px-4">
              <p className="text-sm leading-6 text-gray-900">{person.Property}</p>
      
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end  px-4">
              <p className="text-sm leading-6 text-gray-900">{person.Landlord}</p>

            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end  px-4">
              <p className="text-sm leading-6 text-gray-900">{person.Amount}</p>
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <button 
                type="submit"
                className="flex justify-center rounded-md bg-emerald-600 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emrald-500"
              >
             Pay Now
              </button>
          </li>
        ))}
      </ul>
      <Pagination/>
      <Footer/>
      </>
    )
  }
  