/**
 * This file contains Immediately Invoked Function Expressions (IIFEs)
 * 
 * Two self-executing functions that demonstrate database connection logging:
 * - chai(): Logs first database connection message
 * - aurcode(): Logs second database connection message
 * 
 * IIFEs are used here to create private scopes and execute immediately
 * The functions are wrapped in parentheses to treat them as expressions
 * Each function is immediately called using the trailing ()
 * 
 * @file life.js
 * @module scope
 */
(function chai(){
    console.log(`Db connected`);
    
}) ();

( function aurcode() {
    console.log("DB connect two");
    
}) ()