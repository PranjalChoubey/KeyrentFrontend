import Navbar from "./navbar"
import Footer from "./footer"
import Pagination from "./pagination.jsx"
const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
      PropertyName: 'PropertyName1',
      Type: 'Type1',
      Condition: 'Active'
    },
    {
      name: 'Michael Foster',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
      PropertyName: 'PropertyName2',
      Type: 'Type2',
       Condition: 'InActive'
    },
    {
      name: 'Dries Vincent',
      email: 'leslie.alexander@example.com',
      role: 'Business Relations',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
      PropertyName: 'PropertyName3',
      Type: 'Type3',
       Condition: 'InDraft'
    },
    {
      name: 'Lindsay Walton',
      email: 'leslie.alexander@example.com',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
      PropertyName: 'PropertyName4',
      Type: 'Type4',
       Condition: 'Reactive'
    },
    {
      name: 'Courtney Henry',
      email: 'leslie.alexander@example.com',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
      PropertyName: 'PropertyName5',
      Type: 'Type5',
      Condition: 'IsActive'
    },
    {
      name: 'Tom Cook',
      email: 'leslie.alexander@example.com',
      role: 'Director of Product',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
     PropertyName: 'PropertyName6',
     Type: 'Type6',
     Condition: 'Inactive'
    },
  ]
  
  export default function PropertyTab() {
    return (
        <>
        <Navbar/>
        <div className="px-12 " style={{ backgroundColor: '#e1f4f5' }} >
        <div  >
            <h2 className="py-4 px-20 font-bold">
                Tenant List
            </h2>
        </div>
        <div>
        <div className="ml-14 mr-14 grid grid-cols-1 sm:grid-cols-6 border-width rounded-xl" style={{ backgroundColor: '#1D5E6D' }}>
       <div className="sm:col-span-1">
       <ul role="list" className="divide-y divide-gray-100">
          <li className="flex mt-4 justify-evenly gap-x-3">
            <div className="flex gap-x-4 px-4 min-w-0">
              <div className="min-w-0 flex-auto">
                <p className="pb-2 text-sm font-semibold leading-6 text-white">Tenant Name</p>
              </div>
            </div>
          </li>
      </ul>
       </div>
       <div className="sm:col-span-4">

       </div>
       <div className="sm:col-span-1">
       <ul role="list" className="">
          <li className="flex mt-4 justify-evenly gap-x-3">
       <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end  px-4">
              <p className="text-sm font-semibold leading-6 text-white">Status</p>
         
             
            </div>
            </li>
      
      </ul>
       </div>
     
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-6 border-width bg-white ml-[60px] mr-[60px] rounded-xl mt-6">
       <div className="sm:col-span-1 mb-2">
       <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li key={person.email} className="flex mt-10 justify-evenly gap-x-3">
            <div className="flex gap-x-4 px-4 min-w-0">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
              </div>
            </div>

           
          </li>
        ))}
      </ul>
       </div>
       <div className="sm:col-span-4">

       </div>
       <div className="sm:col-span-1">
       <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li key={person.email} className="flex mt-10 justify-evenly gap-x-3">
       <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end  px-4 py-2.5 ">
        <button className="bg-emerald-300 w-20 rounded-xl">
        <p className="text-sm leading-6 text-gray-900">{person.Condition}</p>
        </button>
              
             
            </div>
            </li>
        ))}
      </ul>
       </div>
     
      </div>
        </div>
<div className="flex justify-center align-middle">
<Pagination/>
</div>
      </div>
      <Footer/>

      </>
    )
  }
  