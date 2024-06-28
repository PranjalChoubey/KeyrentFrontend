import Navbar from "./navbar";
import Footer from "./footer"

export default function LandLord() {
  return (
    <>
    <Navbar></Navbar>
    <form>
    <div className="px-12 " style={{ backgroundColor: '#ffff' }}>
        <div className="border-b border-gray-900/10 pb-3  grid grid-cols-1 sm:grid-cols-6 max-lg">
        <div className="sm:col-span-1">
        <h2 className="py-4 px-20 font-bold">
        Property/view
    </h2>
        </div>
        <div className="sm:col-span-2 mt-20 pt-10  style={{ backgroundColor: '#ffff' }}">
        <div className=" mt-5 grid grid-cols-1 gap-x-3 gap-y-2 sm:grid-cols-6 max-lg:">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Property Type
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  placeholder="Duplex"
                  id="first-name"
                  autoComplete="given-name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Property Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  placeholder="ABC"
                  id="last-name"
                  autoComplete="family-name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Full Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  placeholder="12, zyx street address"
                  id="street-address"
                  autoComplete="street-address"
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
               Tenant Name
              </label>

              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  placeholder="john Doe"
                  id="first-name"
                  autoComplete="given-name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
            Tenant Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  placeholder="johndoe@gmail.com"
                  id="last-name"
                  autoComplete="family-name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Amount
              </label>

              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  placeholder="john Doe"
                  id="first-name"
                  autoComplete="given-name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
            Gas Bill
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  placeholder="johndoe@gmail.com"
                  id="last-name"
                  autoComplete="family-name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
               Amount
              </label>

              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  placeholder="john Doe"
                  id="first-name"
                  autoComplete="given-name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
            Gas Bill
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  placeholder="johndoe@gmail.com"
                  id="last-name"
                  autoComplete="family-name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Electricity Bill
              </label>

              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Date"
                  autoComplete="given-name"
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
     End Date
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Date"
                  autoComplete="family-name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
               <b>Total Amount</b>
              </label>
              <input
                  type="number"
                  name="number"
                  placeholder="$    600"
                  id="number"
                  autoComplete="amount"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              <div className="mt-2">
            </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3">
          <div className="flex flex-row right[200px] px-[100px] mt-20 pt-14">
          <p className="px-4 block text-sm font-medium leading-6 text-gray-900">Property Status</p>
          <button className="block text-sm font-medium leading-6 text-gray-900 rounded-md px-4 bg-emerald-500">
            Active
          </button>
          </div>
          <div className="pr-[900px]">
          <button 
                type="submit"
                className="flex flex-row  px-[50px] mt-[468px] justify-center rounded-md bg-emerald-600 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
              Save
              </button>
          </div>
        
                   </div>

        </div>
      </div>
    </form>
    <Footer/>
    </>
  )
}