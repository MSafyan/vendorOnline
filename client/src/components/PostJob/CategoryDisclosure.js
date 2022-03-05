import { Disclosure, Transition } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/outline';
// import categories from './categories';
import { useQuery } from 'react-query';
import { CategoryAPI } from '../../api';
import LoaderIcon from '../../assets/icons/LoaderIcon';

const CategoryDisclosure = ({ selected, setSelected }) => {
  const { data: categories, isLoading } = useQuery(
    'categories',
    CategoryAPI.getCategories
  );

  return (
    <div className="w-full bg-primary-500/5">
      {isLoading ? (
        <LoaderIcon className="h-16 w-16 text-primary-400" />
      ) : (
        categories?.map((category) => (
          <Disclosure key={category._id} as="div" className="mt-0.5">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-md bg-primary-500 py-1 px-2 text-left text-white">
                  {category.name}
                  <ChevronRightIcon
                    className={`h-5 w-5 transition ${open ? 'rotate-90' : ''}`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-2 py-1 text-sm text-gray-500">
                    <ul className="flex flex-wrap gap-x-2 gap-y-1">
                      {category.subcategories.map((subcategory) => (
                        <li
                          key={subcategory._id}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            className="h-3.5 w-3.5 rounded text-primary-500 focus:ring-primary-500"
                            id={`subcategory-${subcategory._id}`}
                            checked={selected === subcategory._id}
                            onChange={() => {
                              if (selected === subcategory._id) {
                                setSelected('');
                              } else {
                                setSelected(subcategory._id);
                              }
                            }}
                          />
                          <label for={`subcategory-${subcategory._id}`}>
                            {subcategory.name}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))
      )}
    </div>
  );
};

export default CategoryDisclosure;
