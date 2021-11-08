//@ts-nocheck
import { Menu, Transition } from '@headlessui/react'
import React, {Component} from 'react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useAppState } from '../../overmind';
import { useActions } from '../../overmind';
import { DropDown } from './DropDown';


//Searchbar to search through menu items
export const Searchbar: React.FunctionComponent = () => {
    
    return (

        <div className=" relative mx-auto text-gray-600 flex items-center">
          {/* Search icon will be swapped out with "font-awesome" icon */}
        <button type="submit" className="absolute left-3 top-0 mt-2 mr-4">
          <svg className="text-gray-400 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
             version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966"  
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
        {/* Searchbar object */}
        <input id="searchbar" className=" bg-gray-100 h-8 px-9 rounded-lg text-sm focus:outline-none" style={{width:'97vw'}} type="search" name="search" placeholder="Search..."></input>
      </div>
      
    )
    
}