/**
 * main.js is the entry point to your program.
 * You find the program logic, data structures and calls in this file
 */

"use strict";

$(document).ready(function(){
    $('input').on('input', handler);
    $('button').click(function(){
        if(timer){
            stopCharge();
        }else{
            startCharge();
        }
    }, );
});