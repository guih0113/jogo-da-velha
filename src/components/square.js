'use client'

import { useState } from 'react';

export function Square({value, onSquareClick}) {

    return (
        <button
            className="h-22 w-22 border-2 border-indigo-600 hover:bg-indigo-950"
            onClick={onSquareClick}    
        >   
            {value}
        </button>   
    ); 
}