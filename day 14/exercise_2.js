/*
Practice.
Example
*/


try {
    let lastName = 'Emmanuel'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log(err)
  }                              
                            // ReferenceError: fistName is not defined
                             //    at <anonymous>:4:20



/*
Example 2
 */

try {
    let lastName = 'Ola'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.error(err) // we can use console.log() or console.error()
  } finally {
    console.log('In any case I will be executed')
  }

                        
                                        // ReferenceError: fistName is not defined
                                         // at <anonymous>:4:20



/*
Example 3
*/

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
  } finally {
    console.log('In any case I will be executed')
  }

                                         

                                            // Name of the error ReferenceError
                                            // Error message fistName is not defined
                                            // In any case I will be executed
                                            