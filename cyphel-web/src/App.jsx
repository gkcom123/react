"use client";
// import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "./App.css";

const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];
const navigation = [
  { name: "Pricing", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Company", href: "#" },
];

function App() {
  const people = [
    {
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Michael Foster",
      email: "michael.foster@example.com",
      role: "Co-Founder / CTO",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Dries Vincent",
      email: "dries.vincent@example.com",
      role: "Business Relations",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: null,
    },
    {
      name: "Lindsay Walton",
      email: "lindsay.walton@example.com",
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      role: "Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Tom Cook",
      email: "tom.cook@example.com",
      role: "Director of Product",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: null,
    },
  ];
  return (
    // <div className="flex min-w-screen min-h-screen flex-col items-center justify-center bg-gray-100 py-2">
    //   <>
    //     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    //       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //         <img
    //           alt="Your Company"
    //           src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
    //           className="mx-auto h-10 w-auto"
    //         />
    //         <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
    //           Sign in to your account
    //         </h2>
    //       </div>

    //       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    //         <form action="#" method="POST" className="space-y-6">
    //           <div>
    //             <label
    //               htmlFor="email"
    //               className="block text-sm/6 font-medium text-gray-900"
    //             >
    //               Email address
    //             </label>
    //             <div className="mt-2">
    //               <input
    //                 id="email"
    //                 name="email"
    //                 type="email"
    //                 required
    //                 autoComplete="email"
    //                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //               />
    //             </div>
    //           </div>

    //           <div>
    //             <div className="flex items-center justify-between">
    //               <label
    //                 htmlFor="password"
    //                 className="block text-sm/6 font-medium text-gray-900"
    //               >
    //                 Password
    //               </label>
    //               <div className="text-sm">
    //                 <a
    //                   href="#"
    //                   className="font-semibold text-indigo-600 hover:text-indigo-500"
    //                 >
    //                   Forgot password?
    //                 </a>
    //               </div>
    //             </div>
    //             <div className="mt-2">
    //               <input
    //                 id="password"
    //                 name="password"
    //                 type="password"
    //                 required
    //                 autoComplete="current-password"
    //                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //               />
    //             </div>
    //           </div>

    //           <div>
    //             <button
    //               type="submit"
    //               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //             >
    //               Sign in
    //             </button>
    //           </div>
    //         </form>

    //         <p className="mt-10 text-center text-sm/6 text-gray-500">
    //           Not a member?{" "}
    //           <a
    //             href="#"
    //             className="font-semibold text-indigo-600 hover:text-indigo-500"
    //           >
    //             Start a 14 day free trial
    //           </a>
    //         </p>
    //       </div>
    //     </div>
    //   </>
    //   <ul role="list" className="divide-y divide-gray-100">
    //     {people.map((person) => (
    //       <li key={person.email} className="flex justify-between gap-x-6 py-5">
    //         <div className="flex min-w-0 gap-x-4">
    //           <img
    //             alt=""
    //             src={person.imageUrl}
    //             className="size-12 flex-none rounded-full bg-gray-50"
    //           />
    //           <div className="min-w-0 flex-auto">
    //             <p className="text-sm/6 font-semibold text-gray-900">
    //               {person.name}
    //             </p>
    //             <p className="mt-1 truncate text-xs/5 text-gray-500">
    //               {person.email}
    //             </p>
    //           </div>
    //         </div>
    //         <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
    //           <p className="text-sm/6 text-gray-900">{person.role}</p>
    //           {person.lastSeen ? (
    //             <p className="mt-1 text-xs/5 text-gray-500">
    //               Last seen{" "}
    //               <time dateTime={person.lastSeenDateTime}>
    //                 {person.lastSeen}
    //               </time>
    //             </p>
    //           ) : (
    //             <div className="mt-1 flex items-center gap-x-1.5">
    //               <div className="flex-none rounded-full bg-emerald-500/20 p-1">
    //                 <div className="size-1.5 rounded-full bg-emerald-500" />
    //               </div>
    //               <p className="text-xs/5 text-gray-500">Online</p>
    //             </div>
    //           )}
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="bg-white w-screen h-screen">
      <header>
        <Popover className="relative bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto sm:h-10"
                />
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </PopoverButton>
            </div>
            <PopoverGroup as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                <PopoverButton className="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden data-open:text-gray-900">
                  <span>Solutions</span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="ml-2 size-5 text-gray-400 group-hover:text-gray-500 group-data-open:text-gray-600 group-data-open:group-hover:text-gray-500"
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute z-10 mt-3 -ml-4 w-screen max-w-md transform transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2"
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-indigo-600 text-white sm:size-12">
                            <item.icon aria-hidden="true" className="size-6" />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>

              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </PopoverGroup>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a
                href="#"
                className="text-base font-medium whitespace-nowrap text-gray-500 hover:text-gray-900"
              >
                Sign in
              </a>
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium whitespace-nowrap text-white shadow-xs hover:bg-indigo-700"
              >
                Sign up
              </a>
            </div>
          </div>

          <PopoverPanel
            transition
            className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition data-closed:scale-95 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-100 data-leave:ease-in md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      alt="Your Company"
                      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="-mr-2">
                    <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon aria-hidden="true" className="size-6" />
                    </PopoverButton>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-indigo-600 text-white">
                          <item.icon aria-hidden="true" className="size-6" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="grid grid-cols-2 gap-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a href="#" className="text-gray-900">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </Popover>
      </header>

      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <img
                    alt="People working on laptops"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      Take control of your
                    </span>
                    <span className="block text-indigo-200">
                      customer support
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-xs hover:bg-indigo-50 sm:px-8"
                      >
                        Get started
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500/60 px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-500/70 sm:px-8"
                      >
                        Live demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <p className="text-center text-base font-semibold text-gray-500">
                Trusted by over 5 very average small businesses
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    alt="Tuple"
                    src="https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-400.svg"
                    className="h-12"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    alt="Mirage"
                    src="https://tailwindcss.com/plus-assets/img/logos/mirage-logo-gray-400.svg"
                    className="h-12"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    alt="StaticKit"
                    src="https://tailwindcss.com/plus-assets/img/logos/statickit-logo-gray-400.svg"
                    className="h-12"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    alt="Transistor"
                    src="https://tailwindcss.com/plus-assets/img/logos/transistor-logo-gray-400.svg"
                    className="h-12"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    alt="Workcation"
                    src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-gray-400.svg"
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}

export default App;
