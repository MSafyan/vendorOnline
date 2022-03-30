import { Popover, Transition } from '@headlessui/react';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import Map from './Map';
import Geocode from 'react-geocode';

Geocode.setApiKey(process.env.REACT_APP_API_KEY);

// Get address from latitude & longitude.
Geocode.fromLatLng('48.8583701', '2.2922926').then(
  (response) => {
    const address = response.results[0].formatted_address;
    console.log(response, address);
  },
  (error) => {
    console.error(error);
  }
);

const LocationInput = ({ value, onChange, onBlur, error }) => {
  return (
    <Popover className="relative w-full">
      <Popover.Button
        className="relative w-full cursor-default text-left"
        onBlur={onBlur}
      >
        <label htmlFor="location" className="cursor-pointer font-medium">
          Location
        </label>
        <div className="relative w-full">
          <input
            id="location"
            type="text"
            placeholder="Eg San Francisco, CA"
            className="mt-0.5 w-full cursor-text rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-800 transition focus:border-primary-500 focus:ring-1 focus:ring-primary-600"
            value={value ? 'Selected!' : ''}
            disabled
          />
          <LocationMarkerIcon className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 cursor-pointer text-primary-500" />
        </div>
        {error && <div className="mt-1 text-xs text-red-600">* {error}</div>}
      </Popover.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute z-10 mt-2">
          <div className="aspect-square w-72 overflow-hidden rounded border border-gray-400 bg-white shadow-lg">
            <Map selectedPosition={value} setSelectedPosition={onChange} />
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default LocationInput;
